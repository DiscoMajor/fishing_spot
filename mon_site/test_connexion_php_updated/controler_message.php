<?php 

include "utils/utils.php";
include "model/model_form.php";


// $data = infoFormulaire();
$data = infoFormulaire();

//FAIRE MON SELECT $data ect

// JE DOIS ME CONNECTER A LA BDD ICI
// AVEC DES IF/ELSE (regarder tp sur les tasks)
// avec une foreach (voir exo supergame ou projet task pour faire la liste )
// et des paragraphes



include ('vue/vue_header.php');
include ('vue/vue_messages.php');
include ('vue/vue_footer.php');