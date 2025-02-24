
<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error_log.txt'); // Log errors in the same directory

// Test logging
error_log("Error logging enabled. Script started.");

// Allow CORS for local development
// Allow CORS for local development (and any other origin)
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin (Replace * with your React domain in production)
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Allow only POST and OPTIONS methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow required headers
header("Content-Type: application/json"); // Set JSON response type
require 'db_connection.php'; // Separate DB connection file

// Handle preflight request (for OPTIONS request)
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(204); // No Content response
    exit(); // End the script early for OPTIONS requests
}
require 'src/PHPMailer.php';
require 'src/Exception.php';
require 'src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $type = $_POST['type'] ?? "";
    $name = $_POST['name'] ?? '';
    $mobile = $_POST['mobile'] ?? '';
    $company = $_POST['company'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';
    $country = $_POST['country'] ?? '';
    $product = $_POST['product'] ?? '';
    $description = $_POST['description'] ?? '';
    $brochure = $_POST['brochure'] ?? '';
    
    // Return response immediately
    $response = [
        "status" => "success",
        "message" => "Form data received",
        "data" => [
            "type" => $type,
            "name" => $name,
            "mobile" => $mobile,
            "company" => $company,
            "email" => $email,
            "message" => $message,
            "country" => $country,
            "product" => $product,
            "description" => $description,
            "brochure" => $brochure
        ]
    ];
    
    error_log("Response: " . json_encode($response)); // Logs in server error log
    // Save to database
    $stmt = $conn->prepare("INSERT INTO inquiries (name, type, mobile, company, email, message, country, product, description, brochure) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssss", $name, $type, $mobile, $company, $email, $message, $country, $product, $description, $brochure);
    $stmt->execute();
    $stmt->close();

    
    // Send email
    $mail = new PHPMailer(true);
    try {
        // $mail->isSMTP();
        // $mail->Host = 'smtp.zoho.com';
        // $mail->SMTPAuth = true;
        // $mail->Username = 'aniket@altinexports.com'; // Your Gmail
        // $mail->Password = 'YRz8gz9PR3AP'; // Use App Password
        // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        // $mail->Port = 587;
        
        // $mail->setFrom('aniket@altinexports.com', 'Altin Exports');
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'no.reply.altinexports@gmail.com'; 
        $mail->Password = 'dgixlrcwlmiciiwe'; // App Password, NOT your Zoho login password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Use ENCRYPTION_SMTPS for port 465
        $mail->Port = 587;
        $mail->setFrom('no.reply.altinexports@gmail.com', 'Altin Exports');

        $mail->addAddress('info@altinexports.com'); // Admin email
        $mail->addReplyTo($email, $name);
        
        $mail->isHTML(true);
        $mail->Subject = "New form filled from $name";
        $mail->Body = ""; // Initialize the body as an empty string

        // Conditionally add fields to the email body
        if (!empty($name)) {
            $mail->Body .= "<p><strong>Name:</strong> $name</p>";
        }
        if (!empty($type)) {
            $mail->Body .= "<p><strong>Used form is:</strong> $type</p>";
        }
        if (!empty($mobile)) {
            $mail->Body .= "<p><strong>Mobile:</strong> $mobile</p>";
        }
        if (!empty($company)) {
            $mail->Body .= "<p><strong>Company:</strong> $company</p>";
        }
        if (!empty($email)) {
            $mail->Body .= "<p><strong>Email:</strong> $email</p>";
        }
        if (!empty($message)) {
            $mail->Body .= "<p><strong>Message:</strong> $message</p>";
        }
        if (!empty($country)) {
            $mail->Body .= "<p><strong>Country:</strong> $country</p>";
        }
        if (!empty($product)) {
            $mail->Body .= "<p><strong>Product:</strong> $product</p>";
        }
        if (!empty($description)) {
            $mail->Body .= "<p><strong>Description:</strong> $description</p>";
        }
        if (!empty($brochure)) {
            $mail->Body .= "<p><strong>Brochure:</strong> $brochure</p>";
        }

        $mail->SMTPDebug = 2;
        $mail->Debugoutput = 'error_log';

        $mail->send();
        echo json_encode(["status" => "success", "message" => "Form submitted successfully!"]);
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Mail Error: " . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}
?>
