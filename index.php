<!DOCTYPE html>
<html lang="pt-br">

<head>
  <!-- Site Núcleo MAP
  Autor: Emerson Martins Brito
  Data: 15/03/2021 -->
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Fabricação de máquinas CNC, Nesting CNC, Controle númerico computadorizado, Máquinas robustas e precisas, qualidade, tecnologia e inovação, série STNU, série PRNU" />
  <meta name="description" content="Programação de robôs, especialista em KUKA Robotcs, Denso Robotics, Universal Robots, ABB, Omron, Yaskawa, Mitsubishi" />
  <meta name="description" content="Start-up de máquinas, especialista em Rockwell Automation, Allen Bradley, B&R Automation, Omron, Yaskawa, Beckhoff, Mitsubishi." />
  <meta name="description" content="Projetos elétricos com Eplan, AutoCAD Electrical e E3 Séries" />
  <meta name="description" content="Projetos mecânicos com Solidworks, FreeCAD e AutoCAD" />
  <meta name="description" content="Automação Industrial, Industria 4.0, Internet das Coisas, IOT" />
  <meta name="description" content="Automação Residencial, Domótica" />
  <meta name="geo.region" content="BR-PR" />
  <meta name="geo.placename" content="Curitiba" />
  <meta name="geo.position" content="-25.43711;-49.329101" />
  <meta name="ICBM" content="-25.43711, -49.329101" />
  <title>Núcleo MAP</title>
  <link rel="stylesheet" type="text/css" href="app/assets/css/style.css" />
  <link rel="icon" type="image/svg+xml" href="app/assets/image/svg/faviconNucleoMAP.svg" />
  <script src="https://kit.fontawesome.com/ec63449ac4.js" crossorigin="anonymous"></script>
</head>

<body>
  <div class="l-body">

    <header data-reactroot role="banner" class="l-header js-header js-sticky">
      <?php
      include_once 'app/views/header.html';
      ?>
    </header>
    <!-- <?php
          // include 'app/assets/breadcrumb.php';
          ?> -->
    <div class="l-fake js-fake"></div>

    <?php
    ?>

    <main class="l-main">
      <?php
      include_once 'app/assets/php/include.php'
      ?>
    </main>

    <footer class="l-footer">
      <?php
      include_once 'app/views/footer.html';
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

  <script src="app/assets/js/form.js"></script>
  <script src="app/assets/js/map.js"></script>
  <script src="app/assets/js/menu-mobile.js"></script>
  <script src="app/assets/js/menu.js"></script>
  <script src="app/assets/js/responsive.js"></script>
  <script src="app/assets/js/slider.js"></script>
  <script src="app/assets/js/sticky.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA42QEJ5viU_M-B8sBuHE2JMTaiDJbLyXg&callback=containerMaps" async defer></script>
</body>

</html>