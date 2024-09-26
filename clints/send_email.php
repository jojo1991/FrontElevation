<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $address = htmlspecialchars($_POST['address']);
    $message = htmlspecialchars($_POST['message']);

    $to = "front.elevation.tx@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nPhone: $phone\nEmail: $email\nAddress: $address\n\nMessage:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again later.";
    }
}
?>
