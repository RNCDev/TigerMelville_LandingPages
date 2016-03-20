<?php
$field_email = $_POST['email'];

$mail_to = 'help@eventca.st';
$subject = 'Message from Eventcast website '.$field_email;

$body_message .= 'E-mail: '.$field_email."\n";

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed.');
		window.location = 'index.html';
	</script>
<?php
}
?>