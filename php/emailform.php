<html>
<body>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = test_input($_POST['name']);
	$visitor_email = test_input($_POST['email']);
	$message = test_input($_POST['message']);
	$honeyPot = $_POST['phoneNumber6tzPKQkla'];
}
	
if (trim($honeyPot) != '') {
	// This is a robot!
	exit("We're sorry, the form could not be sent at the moment. Please try gain later. <br /> <a href='http://www.cooperart.net'>Click here to return to homepage</a>");
}

// Function to check for spam characters
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

$email_from = $_POST['email'];
$email_subject = "New Form Submission";
$email_body = "You have received a new message from $name at $visitor_email\n".
				"Here is the message:\n$message\n".

$to = "coopergdesigner@gmail.com";
$headers = "From:$email_from\r\n";
$headers .= "Reply-To:$visitor_email\r\n";
$sent = mail($to, $email_subject, $email_body, $headers);

if($sent)
{print('Thank you! Thomas will get back to you within 3 business days. <br /> <a href="http://www.cooperart.net">Click here to return to homepage</a>');}
else
{print "We have encountered an error sending your mail";}

?>

</body>
</html>