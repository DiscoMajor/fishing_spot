<?php
//Création de ma fonction de nettoyage de donnée
function sanitize($data){
    return htmlentities(strip_tags(stripslashes(trim($data))));
}

$message = " ";

//PROCESSUS D'ENREGISTREMENT D'UN UTILISATEUR
//ETAPE 1 : je vérifie que le formulaire a été envoyé
if(isset($_POST['ajouter'])){
    echo 'ajouter';
    echo '-------';
    //ETAPE 2 : je vérifie que mes champs obligatoires ne sont pas vide
    if(isset($_POST['mail']) && isset($_POST['mdp']) && !empty($_POST['mail']) && !empty($_POST['mdp'])){

        echo 'isset';
        echo '-------';

        //ETAPE 3 : Nettoyage de mes données
        $email = sanitize($_POST['mail']);
        $mdp = sanitize($_POST['mdp']);

        //ETAPE 4 : Hashage du mot de passe
        $mdp = password_hash($mdp,PASSWORD_BCRYPT);

        try{
                //ETAPE 5 : Connexion à la BDD
                $bdd = new PDO('mysql:host=localhost;dbname=fishingspot','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
                echo 'CONNEXION';
                echo '-------';

                $req = $bdd->prepare('INSERT INTO utilisateur (mail_utilisateur, mot_de_passe_utilisateur) VALUES (?,?)');

                //ETAPE 6: Binding de Paramètre
                $req->bindParam(1,$email,PDO::PARAM_STR);
                $req->bindParam(2,$mdp,PDO::PARAM_STR);
                echo 'TRY ICI!';
                echo '-------';
                //ETAPE 7 : Exécution de la requête
                $req->execute();
                echo 'execute!';
                echo '-------';
        }catch(Exception $error){
            $message = $error->getMessage();
        }
    }else{
        $message = "Veuillez remplir tous les champs.";
    }
}
