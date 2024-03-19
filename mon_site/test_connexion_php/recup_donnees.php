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
    //ETAPE 2 : je vérifie que mes champs obligatoires ne sont pas vide
    if(isset($_POST['mail']) && isset($_POST['mdp']) && !empty($_POST['mail']) && !empty($_POST['mdp'])){

        echo 'isset';

        //ETAPE 3 : Nettoyage de mes données
        $email = sanitize($_POST['mail']);
        $mdp = sanitize($_POST['mdp']);

        //ETAPE 4 : Hashage du mot de passe
        $mdp = password_hash($mdp,PASSWORD_BCRYPT);

        try{
                //ETAPE 5 : Connexion à la BDD
                $bdd = new PDO('mysql:host=localhost;dbname=fishingspot','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
                echo 'CONNEXION';

                $req = $bdd->prepare('INSERT INTO utilisateur (mail_utilisateur, mot_de_passe_utilisateur) VALUES (?,?)');

                //ETAPE 6: Binding de Paramètre pour lier les ? à nos différentes données
                $req->bindParam(1,$email,PDO::PARAM_STR);
                $req->bindParam(2,$mdp,PDO::PARAM_STR);

                //ETAPE 7 : Exécution de la requête
                $req->execute();

                // //ETAPE 7 : Préparation ma requête
                // $req = $bdd->prepare('INSERT INTO article (nom_article, contenu_article) VALUES (?,?)');

                // //ETAPE 8 : Binding de Paramètre -> je relie chaque ? à la valeur souhaitée
                // $req->bindParam(1,$nomArticle,PDO::PARAM_STR);
                // $req->bindParam(2,$contenuArticle,PDO::PARAM_STR);



        }catch(Exception $error){
            //afficher le message d'erreur via $message
            $message = $error->getMessage();
        }
    }else{
        //Message d'erreur si les champs ne sont pas correctement remplis
        $message = "Veuillez remplir tous les champs.";
    }
}
