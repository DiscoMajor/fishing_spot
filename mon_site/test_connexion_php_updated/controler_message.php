<?php 
include "model/model_form.php";
include "utils/utils.php";

$list = "";

//FAIRE MON SELECT $data ect

// JE DOIS ME CONNECTER A LA BDD ICI
// AVEC DES IF/ELSE (regarder tp sur les tasks)
// avec une foreach (voir exo supergame ou projet task pour faire la liste )
// et des paragraphes


$formu = new Formulaire();
$formu->setDataBase(connect());
$data = $formu->infoFormulaire();


foreach($data as $formu){
    $list = $list."<article>
        <h2>Email : ".$formu['mail_formulaire']."</h2>
        <p>Nom de famille : ".$formu['nom_famille_formulaire']."</p>
        <p>Message du formulaire : : ".$formu['message_formulaire']."</p>
    </article>";
}



include ('vue/vue_header.php');
include ('vue/vue_messages.php');
include ('vue/vue_footer.php');