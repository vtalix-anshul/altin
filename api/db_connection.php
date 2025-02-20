<?php
$servername = "localhost";
$username = "u752398920_altin__admin";
$password = "ILJjgnR$7d";
$dbname = "u752398920_altin_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
