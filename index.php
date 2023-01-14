<!DOCTYPE html>
<html lang="pt-br">
<!-- Definição do idioma do site -->

<head>
  <?php
  //     Site Núcleo MAP
  // Autor: Emerson Martins Brito
  // Data: 15/03/2021
  include 'app/assets/head.html';
  ?>
</head>

<body>
  <div class="l-body">

    <header data-reactroot role="banner" class="l-header js-header js-sticky">
      <?php
      include 'app/views/header.html';
      ?>
    </header>
    <!-- <?php
          // include 'app/assets/breadcrumb.php';
          ?> -->
    <div class="l-fake js-fake"></div>

    <!-- <?php
          // Cria a função para gerar o breadcrumb
          // function generateBreadcrumb()
          // {
          //     $currentPage = $_SERVER['REQUEST_URI'];
          //     $pages = explode('/', $currentPage);
          //     // Cria o HTML do breadcrumb
          //     $breadcrumb = '<ol class="breadcrumb">';
          //     $breadcrumb .= '<li class="breadcrumb-item"><a href="/">Home</a></li>';
          //     foreach ($pages as $page) {
          //         if (!empty($page)) {
          //             $breadcrumb .= '<li class="breadcrumb-item">' . ucfirst($page) . '</li>';
          //         }
          //     }
          //     $breadcrumb .= '</ol>';
          //     return $breadcrumb;
          // }
          // // Exibe o breadcrumb na página
          // echo generateBreadcrumb();
          //
          //
          ?> -->

    <main class="l-main">
      <?php
      $pagina = 'home';
      $pagina = $_GET["pagina"];
      switch ($pagina) {
        case 'NestingCNC':
          include 'app/views/NestingCNC.html';
          break;
        case 'PlasmaCNC':
          include 'app/views/PlasmaCNC.html';
          break;
        case 'servicos':
          include 'app/views/servicos.html';
          break;
        case 'automacaoIndustrial':
          include 'app/views/automacaoIndustrial.html';
          break;
        case 'automacaoResidencial':
          include 'app/views/automacaoResidencial.html';
          break;
        case 'projetoEletrico':
          include 'app/views/projetoeletrico.html';
          break;
        case 'projetoMecanico':
          include 'app/views/projetomecanico.html';
          break;
        case 'robotica':
          include 'app/views/robotica.html';
          break;
        case 'sobreNos':
          include 'app/views/sobrenos.html';
          break;
        case 'contato':
          include 'app/views/contato.html';
          break;
        case 'parceiros':
          include 'app/views/parceiros.html';
          break;
        case 'localizacao':
          include 'app/views/localizacao.html';
          break;
        default:
          include 'app/views/home.html';
          break;
      }
      ?>
    </main>

    <footer class="l-footer">
      <?php
      include 'app/views/footer.html';
      ?>
    </footer>

    <section class="c-line-footer">
      <svg class="c-line-footer__full">
        <g class="c-line-footer__colored">
          <line x1="0" y1="7.5" x2="100%" y2="7.5"></line>
        </g>
        <g class="c-line-footer__mono">
          <line x1="0" y1="12.5" x2="100%" y2="12.5"></line>
        </g>
      </svg>
      <svg class="c-line-footer__right">
        <g class="c-line-footer__background">
          <path d="M0,0 90,0 140,-75 275,-75 275,0"></path>
        </g>
        <g class="c-line-footer__colored">
          <line x1="0" y1="7.5" x2="100" y2="7.5"></line>
          <line x1="100" y1="7.5" x2="150" y2="-67.5" class="c-line-footer__colored--smoth"></line>
          <line x1="150" y1="-67.5" x2="100%" y2="-67.5"></line>
        </g>
        <g class="c-line-footer__mono">
          <line x1="0" y1="12.5" x2="90" y2="12.5"></line>
          <line x1="90" y1="12.5" x2="140" y2="-62.5"></line>
          <line x1="140" y1="-62.5" x2="100%" y2="-62.5"></line>
        </g>
      </svg>
    </section>

  </div>
  <script src="app/assets/js/index.js"></script>
  <script src="app/assets/js/map.js"></script>
  <script src="app/assets/js/menu-mobile.js"></script>
  <script src="app/assets/js/menu.js"></script>
  <script src="app/assets/js/responsive.js"></script>
  <script src="app/assets/js/slider.js"></script>
  <script src="app/assets/js/sticky.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA42QEJ5viU_M-B8sBuHE2JMTaiDJbLyXg&callback=containerMaps" async defer></script>
</body>

</html>