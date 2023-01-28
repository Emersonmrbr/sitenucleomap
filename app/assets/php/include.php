<?php
$pagina = "home";
if (!isset($_GET["pagina"])) {
  $_GET["pagina"] = "home";
}
$pagina = $_GET["pagina"];
switch ($pagina) {
  case 'NestingCNC':
    include_once 'app/views/NestingCNC.html';
    break;
  case 'PlasmaCNC':
    include_once 'app/views/PlasmaCNC.html';
    break;
  case 'servicos':
    include_once 'app/views/servicos.html';
    break;
  case 'automacaoIndustrial':
    include_once 'app/views/automacaoIndustrial.html';
    break;
  case 'automacaoResidencial':
    include_once 'app/views/automacaoResidencial.html';
    break;
  case 'projetoEletrico':
    include_once 'app/views/projetoeletrico.html';
    break;
  case 'projetoMecanico':
    include_once 'app/views/projetomecanico.html';
    break;
  case 'robotica':
    include_once 'app/views/robotica.html';
    break;
  case 'sobreNos':
    include_once 'app/views/sobrenos.html';
    break;
  case 'contato':
    include_once 'app/views/contato.php';
    break;
  case 'parceiros':
    include_once 'app/views/parceiros.html';
    break;
  case 'localizacao':
    include_once 'app/views/localizacao.html';
    break;
  case 'home':
    include_once 'app/views/home.html';
    break;
  default:
    include_once 'app/views/home.html';
    break;
}
