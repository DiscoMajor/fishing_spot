<?php
//Création de ma fonction de nettoyage de donnée
include("utils.php");
include("model.php");
$message = "";

if(isset($_POST['envoyer'])){
    echo 'envoyer';
    echo '-------';
    //ETAPE 2 : je vérifie que mes champs obligatoires ne sont pas vide
    if(isset($_POST['nom']) && isset($_POST['mail'])  && isset($_POST['messagePerso']) && !empty($_POST['nom']) && !empty($_POST['mail']) && !empty($_POST['messagePerso'])){
        
        echo 'isset';
        echo '-------';

        //ETAPE 3 : Nettoyage de mes données
        $nomForm = sanitize($_POST['nom']);
        $emailForm = sanitize ($_POST['mail']);
        $textForm = sanitize($_POST['messagePerso']);

        getFormulaire($emailForm,$nomForm,$textForm);
        
        $message = "Message bien envoyé";

    }else{
        $message = "Message non envoyé, veuillez remplir tous les champs.";
    }
}

include ('vue/vue_header.php');
include ('vue/vue_contact.php');
include ('vue/vue_footer.php');