<?php 

// Classe formulaire
class Formulaire {
    // Mes attributs
    
    private ?string $mail_form;
    private ?string $nom_form;
    private ?string $message_form;
    private ?PDO $data_base;

    // getter/setter des mes attributs

    public function getMailForm(): ?string { return $this->mail_form; }
    public function setMailForm(?string $mail_form): self { $this->mail_form = $mail_form; return $this; }
    public function getNomForm(): ?string { return $this->nom_form; }
    public function setNomForm(?string $nom_form): Formulaire { $this->nom_form = $nom_form; return $this; }

    public function getMessageForm(): ?string { return $this->message_form; }
    public function setMessageForm(?string $message_form): Formulaire { $this->message_form = $message_form; return $this; }

    public function getDataBase(): ?PDO { return $this->data_base; }
    public function setDataBase(?PDO $data_base): Formulaire { $this->data_base = $data_base; return $this; }


//Fonction pour envoyer les données de mon formulaire à ma BDD
    function getFormulaire($textForm,$emailForm,$nomForm) {
    try{
        // Preparation de ma requête
        $req = $this->getDataBase()->prepare("INSERT INTO formulaire_contact (message_formulaire,mail_formulaire,nom_famille_formulaire) VALUES (?,?,?)");
        
        $textForm = $this->getMessageForm();
        $emailForm = $this->getMailForm();
        $nomForm = $this->getNomForm();

        //Binding de Paramètres
        $req->bindParam(1,$textForm,PDO::PARAM_STR);
        $req->bindParam(2,$emailForm,PDO::PARAM_STR);
        $req->bindParam(3,$nomForm,PDO::PARAM_STR);
        echo 'PARAMETRES!';
        echo '-------';

        //Exécution de la requête
        $req->execute();
        echo 'execute!';
        echo '-------';

    }catch(Exception $message){
        return $message ;
    }
}

// Fonction pour regarder si il y a doublon du mail, pour eviter les spams en boucle (Choisir ici si je check le mail, le message ou le nom et si je peux mettre des MAIL AND MESSAGE dans mes conditions)
    public function checkDuplicate():array|string{
        try{
            //Preparation de la requête
            $req = $this->getDataBase()->prepare('SELECT formulaire_contact.mail_formulaire FROM formulaire_contact WHERE formulaire_contact.mail_formulaire = ?');

            //Récupérer le message du formulaire à partir de l'objet
            $mail_form = $this->getMailForm();

            //Binding de Paramètre
            $req->bindParam(1,$mail_form,PDO::PARAM_STR);

            //Exécution de la requête
            $req->execute();

            //Récupération de la réponse de la BDD
            $data = $req->fetchAll(PDO::FETCH_ASSOC);

            //Retourne la réponse de la BDD
            return $data;
        }catch(Exception $error){
            return $error->getMessage();
        }
    }

// Function qui récup (SELECT) mon form en BDD en orienté objet
public function infoFormulaire():array|string{
    try {
        $req = $this->getDataBase()->prepare('SELECT * FROM formulaire_contact');

         //ETAPE 1.3 : Exécuter la requête
        $req->execute();

        //ETAPE 1.4 : Récupération de la réponse de BDD dans $data
        $data = $req->fetchAll(PDO::FETCH_ASSOC);

        //ETAPE 1.5 : je renvoie $data à l'extérieur de ma fonction
        return ($data);

    }catch(Exception $error){
        return $error->getMessage();
    }
} 

}




