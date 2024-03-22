<?php
function sanitize($data){
    return htmlentities(strip_tags(stripslashes(trim($data))));
}
