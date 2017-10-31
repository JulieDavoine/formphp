<?php
//===récupère les variables
$pseudo = $_POST['pseudo'];
$mail = $_POST['mail'];
$lemessage = $_POST['lemessage'];
print("<center>Bonjour $pseudo votre mail est $mail et votre message est : $lemessage</center> ");
//=======
//======on vérifie l'email
$point = strpos($mail,".");
$aroba = strpos($mail,"@");

if($point=='')
{
echo "Votre email doit comporter un <b>point</b>";
}
elseif($aroba=='')
{
echo "Votre email doit comporter un <b>'@'</b>";
}

//=====Création du header de l'e-mail
$to = "julie.da@codeur.online";
$lemessage=$_POST['lemessage'];
$mail = $_POST['mail'];
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

mail($to, $mail, $lemessage, $headers);
?>