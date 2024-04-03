<?php
include("utils/utils.php");
include("model/model_form.php");
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
        $submitButton = sanitize($_POST['envoyer']);

        if(filter_var($emailForm, FILTER_VALIDATE_EMAIL) ){

        //Cretation objet formulaire interroger la BDD
            $formulaireText = new Formulaire();
        //On va donner à notre objet l'objet de connexion PDO ainsi que les données à chercher
            $formulaireText->setDataBase(connect())->setMessageForm($textForm)->setMailForm($emailForm)->setNomForm($nomForm);

        //Je regarde si il n'y a pas de doublons du mail envoyé en BDD
            $data = $formulaireText->checkDuplicate();

        //Si le mail n'est pas déjà en BBD alors :
            if(empty($data)){
                $formulaireText->getFormulaire($textForm,$emailForm,$nomForm);
                $message = "Votre message a bien été envoyé 🐟✨";
            }else{
                $message = "Message déjà envoyé 🎣";
            }
        }  
    }else{
        $message = "Message non envoyé, veuillez remplir tous les champs.";
    }
}


include ('vue/vue_header.php');
include ('vue/vue_contact.php');
include ('vue/vue_footer.php');