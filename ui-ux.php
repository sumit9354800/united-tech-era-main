<?php
require_once("connection.php");
// Step 1: Form Data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $mobile = htmlspecialchars($_POST["mobile"]);

    $name = $_POST["name"];
    $email = $_POST["email"];
    $mobile = $_POST["mobile"];

    $insert = "INSERT INTO formtd(name, email,mobile)
    VALUES ('$name', '$email','$mobile')";

    $query = mysqli_query($conn, $insert);

    // Step 3: Force File Download
    $file = "download/animation-review.webp"; // Your file path

    if (file_exists($file)) {
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($file) . '"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($file));
        readfile($file);
        exit;
    } else {
        echo "File not found!";
    }
} else {
    echo "Invalid request.";
}
?>