<?php

function getFormulaire($emailForm,$nomForm,$textForm) {
    try{
        //ETAPE 5 : Connexion à la BDD
        $bdd = new PDO('mysql:host=localhost;dbname=fishingspot','root','',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        echo 'CONNEXION';
        echo '-------';

        $req = $bdd->prepare("INSERT INTO formulaire_contact (mail_formulaire,nom_famille_formulaire,message_formulaire) VALUES (?,?,?)"); // J'ai mis en parametre par default l'id_role sur Workbench

        //ETAPE 6: Binding de Paramètre
        $req->bindParam(1,$emailForm,PDO::PARAM_STR);
        $req->bindParam(2,$nomForm,PDO::PARAM_STR);
        $req->bindParam(3,$textForm,PDO::PARAM_STR);
        echo 'PARAMETRES!';
        echo '-------';
        //ETAPE 7 : Exécution de la requête
        $req->execute();
        echo 'execute!';
        echo '-------';
    }catch(Exception $message){
        return $message ;
    }
}

