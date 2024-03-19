CREATE DATABASE fishingspot;

USE fishingspot;

CREATE TABLE Produits(
   id_produit INT AUTO_INCREMENT,
   nom_produit VARCHAR(50) ,
   description_produit VARCHAR(50) ,
   prix_produit VARCHAR(50) ,
   image_produit VARCHAR(50) ,
   PRIMARY KEY(id_produit)
);

CREATE TABLE Lac(
   id_lac INT AUTO_INCREMENT,
   description_lac VARCHAR(50) ,
   position_lac VARCHAR(50) ,
   img_lac VARCHAR(50) ,
   acces_handicape BOOLEAN NOT NULL,
   carte_peche BOOLEAN NOT NULL,
   PRIMARY KEY(id_lac)
);

CREATE TABLE Rôle(
   id_role INT NOT NULL,
   nom_role VARCHAR(50)  NOT NULL,
   PRIMARY KEY(id_role)
);

CREATE TABLE code_postal(
   Id_code_postal INT AUTO_INCREMENT,
   code_postal_utilisateur VARCHAR(50) ,
   PRIMARY KEY(Id_code_postal)
);

CREATE TABLE Pays(
   Id_Pays INT AUTO_INCREMENT,
   pays_utilisateur VARCHAR(50) ,
   PRIMARY KEY(Id_Pays)
);

CREATE TABLE Ville(
   Id_Ville INT AUTO_INCREMENT,
   ville_utilisateur VARCHAR(50) ,
   PRIMARY KEY(Id_Ville)
);

CREATE TABLE Formulaire_Contact(
   Id_Formulaire_Contact INT AUTO_INCREMENT,
   message_formulaire VARCHAR(200) ,
   mail_formulaire VARCHAR(50) ,
   nom_famille_formulaire VARCHAR(50) ,
   PRIMARY KEY(Id_Formulaire_Contact)
);

CREATE TABLE Paypal(
   Id_Paypal INT AUTO_INCREMENT,
   adresse_mail_paypal VARCHAR(50) ,
   PRIMARY KEY(Id_Paypal)
);

CREATE TABLE Carte_Bleue(
   Id_Carte_Bleue INT AUTO_INCREMENT,
   numero_carte_bleue INT,
   nom_titulaire_paiement VARCHAR(50) ,
   adresse_mail_paiement VARCHAR(50) ,
   PRIMARY KEY(Id_Carte_Bleue)
);

CREATE TABLE Utilisateur(
   id_utilisateur INT AUTO_INCREMENT,
   pseudo_utilisateur VARCHAR(50) ,
   mail_utilisateur VARCHAR(50) ,
   telephone_utilisateur VARCHAR(50) ,
   mot_de_passe_utilisateur VARCHAR(150) ,
   id_role INT NOT NULL,
   PRIMARY KEY(id_utilisateur),
   FOREIGN KEY(id_role) REFERENCES Rôle(id_role)
);

CREATE TABLE Panier(
   id_panier INT AUTO_INCREMENT,
   id_utilisateur INT NOT NULL,
   PRIMARY KEY(id_panier),
   UNIQUE(id_utilisateur),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur)
);

CREATE TABLE Adresse(
   id_adresse INT AUTO_INCREMENT,
   adresse_utilisateur VARCHAR(50) ,
   adresse_facturation VARCHAR(50) ,
   rue_adresse VARCHAR(50) ,
   numero_adresse INT,
   Id_Ville INT,
   Id_Pays INT,
   Id_code_postal INT,
   PRIMARY KEY(id_adresse),
   FOREIGN KEY(Id_Ville) REFERENCES Ville(Id_Ville),
   FOREIGN KEY(Id_Pays) REFERENCES Pays(Id_Pays),
   FOREIGN KEY(Id_code_postal) REFERENCES code_postal(Id_code_postal)
);

CREATE TABLE Commande(
   Id_Commande INT AUTO_INCREMENT,
   date_commande DATE,
   status_commande VARCHAR(50) ,
   facture_commande DECIMAL(15,2)  ,
   Id_Carte_Bleue INT NOT NULL,
   Id_Paypal INT NOT NULL,
   PRIMARY KEY(Id_Commande),
   FOREIGN KEY(Id_Carte_Bleue) REFERENCES Carte_Bleue(Id_Carte_Bleue),
   FOREIGN KEY(Id_Paypal) REFERENCES Paypal(Id_Paypal)
);

CREATE TABLE Contient(
   id_produit INT,
   id_panier INT,
   quantite_produit INT,
   PRIMARY KEY(id_produit, id_panier),
   FOREIGN KEY(id_produit) REFERENCES Produits(id_produit),
   FOREIGN KEY(id_panier) REFERENCES Panier(id_panier)
);

CREATE TABLE est_liée(
   id_adresse INT,
   Id_Commande INT,
   PRIMARY KEY(id_adresse, Id_Commande),
   FOREIGN KEY(id_adresse) REFERENCES Adresse(id_adresse),
   FOREIGN KEY(Id_Commande) REFERENCES Commande(Id_Commande)
);

CREATE TABLE Enregistre(
   id_utilisateur INT,
   id_adresse INT,
   PRIMARY KEY(id_utilisateur, id_adresse),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
   FOREIGN KEY(id_adresse) REFERENCES Adresse(id_adresse)
);

CREATE TABLE Sauvegarde(
   id_utilisateur INT,
   id_lac INT,
   PRIMARY KEY(id_utilisateur, id_lac),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
   FOREIGN KEY(id_lac) REFERENCES Lac(id_lac)
);

CREATE TABLE Appartient(
   id_utilisateur INT,
   Id_Commande INT,
   PRIMARY KEY(id_utilisateur, Id_Commande),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
   FOREIGN KEY(Id_Commande) REFERENCES Commande(Id_Commande)
);

CREATE TABLE Rédige(
   id_utilisateur INT,
   Id_Formulaire_Contact INT,
   PRIMARY KEY(id_utilisateur, Id_Formulaire_Contact),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
   FOREIGN KEY(Id_Formulaire_Contact) REFERENCES Formulaire_Contact(Id_Formulaire_Contact)
);

CREATE TABLE Choisit(
   id_utilisateur INT,
   Id_Paypal INT,
   PRIMARY KEY(id_utilisateur, Id_Paypal),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
   FOREIGN KEY(Id_Paypal) REFERENCES Paypal(Id_Paypal)
);

CREATE TABLE selectionne(
   id_utilisateur INT,
   Id_Carte_Bleue INT,
   PRIMARY KEY(id_utilisateur, Id_Carte_Bleue),
   FOREIGN KEY(id_utilisateur) REFERENCES Utilisateur(id_utilisateur),
   FOREIGN KEY(Id_Carte_Bleue) REFERENCES Carte_Bleue(Id_Carte_Bleue)
);