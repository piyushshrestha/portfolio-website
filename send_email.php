<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $details = $_POST['details'];

    $to = 'sthapiyush0@gmail.com';
    $subject = 'Contact Form Submission';
    $message = "Name: $name\nEmail: $email\nDetails: $details";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
