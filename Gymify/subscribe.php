<?php
$email_address = $_POST['sub']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))

if( empty($errors))
{
	$to = 'rsetiyawan5@gmail.com';
	$email_subject = "Subscribe Subject";
	$email_body = "You have received a new Subscribe. ".
	" Here are the details:\n Email: $email_address"; 
	
	$headers = "From: $to\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: thanks.html');
}

?>