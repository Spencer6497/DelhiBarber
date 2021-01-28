<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

$mail = new PHPMailer(true);
  
try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.google.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'supergamer64973@gmail.com';                     // SMTP username
    $mail->Password   = 'Usaf6497';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    if($_POST) {
        $name = "";
        $email = "";
        $subject = "";
        $comment = "";
        $email_body = "<div>";
          
        if(isset($_POST['name'])) {
            $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
            $email_body .= "<div>
                               <label><b>Visitor Name:</b></label>&nbsp;<span>".$name."</span>
                            </div>";
        }
     
        if(isset($_POST['email'])) {
            $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
            $email = filter_var($email, FILTER_VALIDATE_EMAIL);
            $email_body .= "<div>
                               <label><b>Visitor Email:</b></label>&nbsp;<span>".$email."</span>
                            </div>";
        }
          
        if(isset($_POST['subject'])) {
            $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
            $email_body .= "<div>
                               <label><b>Reason For Contacting Us:</b></label>&nbsp;<span>".$subject."</span>
                            </div>";
        }
          
        if(isset($_POST['comment'])) {
            $comment = htmlspecialchars($_POST['comment']);
            $email_body .= "<div>
                               <label><b>Visitor Message:</b></label>
                               <div>".$comment."</div>
                            </div>";
        }
    
        $recipient = "spencer.peace6497@yahoo.com";
          
        $email_body .= "</div>";
     
        $headers  = 'MIME-Version: 1.0' . "\r\n"
        .'Content-type: text/html; charset=utf-8' . "\r\n"
        .'From: ' . $email . "\r\n";
    }

    //Recipients
    $mail->setFrom($email);
    $mail->addAddress($email);

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body    = $email_body;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>