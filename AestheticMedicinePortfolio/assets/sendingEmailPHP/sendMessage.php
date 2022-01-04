<?php
  if($_POST['Email'] !== ''){
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $title = $_POST['Title'];
    $message = $_POST['Message'];

    //create an email
    $email_to = "";
    $email_subject = "Message from ".$name."";
    $email_content = "From ".$name."\nEmail: ".$email."\nTitle".$title."\nMessage: ".$message."";

    mail($email_to, $email_subject, $email_content);

    //confirmation Email
    $confirmation_email_subject = "Thank's for an email";
    $confirmation_email_content = "Hello ".$email."!\nI will write back to you as soon as possible.\n\nJakub Miros";

    mail($email,$confirmation_email_subject,$confirmation_email_content);

    header("Location: ../index.php?success");
  }else{
    header("Location: ../index.php?fail");
  }
?>
