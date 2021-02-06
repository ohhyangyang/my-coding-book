<?php
    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    $acceptLang = ['fr', 'es', 'en', 'de', 'pt']; 
    $lang = in_array($lang, $acceptLang) ? $lang : 'en';
    require_once "2_Loading-the-sterilizer_{$lang}.html"; 

?>