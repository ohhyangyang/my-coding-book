<?php
    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    $acceptLang = ['fr', 'es', 'en', 'de', 'pt']; 
    $lang = in_array($lang, $acceptLang) ? $lang : 'en';
    require_once "4_Releasing-the-load_{$lang}.html"; 

?>