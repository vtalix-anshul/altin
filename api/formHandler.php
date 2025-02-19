<?php
require 'db_connection.php'; // Separate DB connection file
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Load PHPMailer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $mobile = $_POST['mobile'] ?? '';
    $company = $_POST['company'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';
    $country = $_POST['country'] ?? '';
    $product = $_POST['product'] ?? '';
    $description = $_POST['description'] ?? '';
    $brochure = $_POST['brochure'] ?? '';
    
    // Save to database
    $stmt = $conn->prepare("INSERT INTO inquiries (name, mobile, company, email, message, country, product, description, brochure) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssss", $name, $mobile, $company, $email, $message, $country, $product, $description, $brochure);
    $stmt->execute();
    $stmt->close();
    
    // Send email
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'maltanu332@gmail.com'; // Your Gmail
        $mail->Password = 'nzjkegmrrnwjisue'; // Use App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        
        $mail->setFrom('maltanu332@gmail.com', 'Altin Exports');
        $mail->addAddress('kumar.anshul9809@gmail.com'); // Admin email
        $mail->addReplyTo($email, $name);
        
        $mail->isHTML(true);
        $mail->Subject = "New Inquiry from $name";
        $mail->Body    = "<p><strong>Name:</strong> $name</p>
                         <p><strong>Mobile:</strong> $mobile</p>
                         <p><strong>Company:</strong> $company</p>
                         <p><strong>Email:</strong> $email</p>
                         <p><strong>Message:</strong> $message</p>
                         <p><strong>Country:</strong> $country</p>
                         <p><strong>Product:</strong> $product</p>
                         <p><strong>Description:</strong> $description</p>
                         <p><strong>Brochure:</strong> $brochure</p>";
        
        $mail->send();
        echo json_encode(["status" => "success", "message" => "Form submitted successfully!"]);
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Mail Error: " . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}
?>
