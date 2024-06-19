<!-- Feedback -->


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $feedback = $_POST['feedback'];

    $to = "simhadribhagyasri5@gmail.com"; // Change this to your email address
    $subject = "Feedback from $name";
    $message = "Name: $name\n\nFeedback:\n$feedback";

    // Send email
    if (mail($to, $subject, $message)) {
        echo "Thank you for your feedback!";
    } else {
        echo "Oops! Something went wrong.";
    }
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}
?>
