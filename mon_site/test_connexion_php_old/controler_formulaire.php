<?php
include("utils.php");
include("model.php");
$message = "";

if(isset($_POST['envoyer'])){
    echo 'envoyer';
    echo '-------';
    //Verification champs obligatoires non vide
    if(isset($_POST['nom']) && isset($_POST['mail'])  && isset($_POST['messagePerso']) && !empty($_POST['nom']) && !empty($_POST['mail']) && !empty($_POST['messagePerso'])){
        
        echo 'Verification';
        echo '-------';

        //Nettoyage de mes données
        $nomForm = sanitize($_POST['nom']);
        $emailForm = sanitize ($_POST['mail']);
        $textForm = sanitize($_POST['messagePerso']);

        //Recuperation des infos formulaire
        getFormulaire($emailForm,$nomForm,$textForm);
        
        $message = "Message bien envoyé";

    }else{
        $message = "Message non envoyé, veuillez remplir tous les champs.";
    }
}

// JE DOIS ME CONNECTER A LA BDD ICI
// AVEC DES IF/ELSE (regarder tp sur les tasks)
// avec une foreach
// et des paragraphes

include ('vue/vue_header.php');
include ('vue/vue_contact.php');
include ('vue/vue_footer.php');