<!DOCTYPE html>
<html lang="pt-br">
<!-- Definição do idioma do site -->

<head>
    <?php
    //     Site Núcleo MAP
    // Autor: Emerson Martins Brito
    // Data: 15/03/2021
    include 'app/assets/head.php';
    ?>
</head>

<body>
    <div class="l-body">

        <header data-reactroot role="banner" class="l-header js-header js-sticky">
            <?php
            include 'app/views/header.php';
            ?>
        </header>
        <?php
        include 'app/assets/breadcrumb.php';
        ?>
        <main class="l-main">
            <?php
            $pagina = 'home';
            $pagina = $_GET["pagina"];
            switch ($pagina) {
                case 'seriePRNU':
                    include 'app/views/seriePRNU.php';
                    break;
                case 'serieSTNU':
                    include 'app/views/serieSTNU.php';
                    break;
                case 'servicos':
                    include 'app/views/servicos.php';
                    break;
                case 'automacaoIndustrial':
                    include 'app/views/automacaoIndustrial.php';
                    break;
                case 'automacaoResidencial':
                    include 'app/views/automacaoResidencial.php';
                    break;
                case 'projetoEletrico':
                    include 'app/views/projetoeletrico.php';
                    break;
                case 'projetoMecanico':
                    include 'app/views/projetomecanico.php';
                    break;
                case 'robotica':
                    include 'app/views/robotica.php';
                    break;
                case 'sobreNos':
                    include 'app/views/sobrenos.php';
                    break;
                case 'contato':
                    include 'app/views/contato.php';
                    break;
                case 'parceiros':
                    include 'app/views/parceiros.php';
                    break;
                case 'localizacao':
                    include 'app/views/localizacao.php';
                    //                     echo "<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyA42QEJ5viU_M-B8sBuHE2JMTaiDJbLyXg&callback=initMap'>
                    // </script>";
                    break;
                default:
                    include 'app/views/home.php';
                    break;
            }
            ?>
        </main>

        <footer class="l-footer">
            <?php
            include 'app/views/footer.php';
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