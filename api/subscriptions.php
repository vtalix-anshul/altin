<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error_log.txt'); // Log errors in the same directory

// Allow CORS for local development
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

require 'db_connection.php'; // Separate DB connection file
require 'src/PHPMailer.php';
require 'src/Exception.php';
require 'src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Handle preflight request (for OPTIONS request)
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(204);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format"]);
        exit();
    }

    // Convert email to lowercase
    $email = strtolower(trim($email));

    // Check if email already exists
    $stmt = $conn->prepare("SELECT id FROM subscriptions WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo json_encode(["status" => "success", "message" => "Already subscribed."]);
        $stmt->close();
        exit();
    }
    $stmt->close();

    // Insert into the database
    $stmt = $conn->prepare("INSERT INTO subscriptions (email) VALUES (?)");
    $stmt->bind_param("s", $email);

    if ($stmt->execute()) {
        $stmt->close();
        
        // Send confirmation email
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'no.reply.altinexports@gmail.com'; // Your Gmail
            $mail->Password = 'dgixlrcwlmiciiwe'; // Use App Password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->setFrom('no.reply.altinexports@gmail.com', 'Altin Exports');
            $mail->addAddress($email); // Send confirmation to the user

            $mail->isHTML(true);
            $mail->Subject = "Subscription Confirmed";
            $mail->Body = "<h2>🎉 Welcome to the Family! 🎉</h2>
                <p>Thank you for subscribing! You're now part of an exclusive group that gets the latest updates, special offers, and exciting news before anyone else. 🚀</p>
                <p>Stay tuned—we've got amazing things coming your way! 💡✨</p>
                <p>Best Regards,<br><strong>Altin Exports Team</strong></p>";


            $mail->send();
        } catch (Exception $e) {
            error_log("Mail Error: " . $mail->ErrorInfo);
        }

        echo json_encode(["status" => "success", "message" => "Subscription successful!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}
?>
