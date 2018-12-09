<?php
// $name = $_POST["name"];
// $email = $_POST["email"];
// $message = $_POST["message"];

// $EmailTo = "hello@minhpham.me";
// $Subject = "New Message Received";

// // prepare email body text
// $Body .= "Name: ";
// $Body .= $name;
// $Body .= "\n";

// $Body .= "Email: ";
// $Body .= $email;
// $Body .= "\n";

// $Body .= "Message: ";
// $Body .= $message;
// $Body .= "\n";

// // send email
// $success = mail($EmailTo, $Subject, $Body, "From:".$email);

// // redirect to success page
// if ($success){
//    echo "success";
// }else{
//     echo "invalid";
// }

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "hello@minhpham.me";
$subject = "New Email Subscriber";
$message = " Name: " . $name . "\r\n\r\n Email: " . $email . "\r\n\r\n Message: " . $message;


$from = "ContactForm";
$headers = "From:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo "success";
} else {
    echo "invalid";
}

?>
