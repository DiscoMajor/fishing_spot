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




