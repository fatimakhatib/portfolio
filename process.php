<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "fatimakh594@gmail.com";
  $subject = "رسالة جديدة من موقع الويب";
  $email = $_POST["email"];
  $message = $_POST["message"];
  $headers = "From: $email";
  if (mail($to, $subject, $message, $headers)) {
    echo "تم إرسال البريد الإلكتروني بنجاح!";
  } else {
    echo "حدثت مشكلة في إرسال البريد الإلكتروني.";
  }
}
?>