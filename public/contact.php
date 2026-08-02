<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = strip_tags($_POST["name"] ?? "");
    $phone = strip_tags($_POST["phone"] ?? "");
    $email = strip_tags($_POST["email"] ?? "");
    $equipment = strip_tags($_POST["equipment"] ?? "");
    $city = strip_tags($_POST["city"] ?? "");
    $availability = strip_tags($_POST["availability"] ?? "");
    $message = strip_tags($_POST["message"] ?? "");
    $subject = strip_tags($_POST["_subject"] ?? "Demande de contact");

    $to = "anthonyprimelec@gmail.com";
    $headers = "From: Anthony PRIME <anthonyprimelec@gmail.com>\r\n";
    $headers .= "Reply-To: $name <$email>\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Nouvelle demande de contact\n";
    $body .= "==========================\n\n";
    $body .= "Sujet : $subject\n";
    $body .= "Nom : $name\n";
    $body .= "Téléphone : $phone\n";
    $body .= "Email : $email\n";
    $body .= "Projet : $equipment\n";
    $body .= "Ville : $city\n";
    $body .= "Disponibilités : $availability\n";
    $body .= "Message : $message\n";

    mail($to, $subject, $body, $headers);

    header("Location: https://www.anthonyprime.fr/?sent=ok#contact-form");
    exit;
}
?>
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><title>Merci</title></head>
<body>
<h1>Merci !</h1>
<p>Votre demande a bien été envoyée. Anthony vous recontactera rapidement.</p>
<p><a href="/">Retour à l'accueil</a></p>
</body>
</html>
