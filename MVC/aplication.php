<?php

class Application{
    public function executar(){
        $url = isset($_GET['url']) ? explode('/',$_GET['url'])[0] : 'Home';
        $url = ucfirst($url);
        $url.="controller";
        if(file_exists('controller/'.$url.'.php')){
            $controler = new $url();
        }else{
            die("nao existe esse controlador");
        }
    }
}

?>