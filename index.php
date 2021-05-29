﻿<!DOCTYPE html>
<html lang="pt-br">
<!-- Definição do idioma do site -->

<head>
    <?php
    // ======================
    // CONFIGURAÇÕES INICIAIS
    // ======================

    // Todas as configurações iniciais para funcionamento do site estão nas linhas a seguir.

    //     Site Núcleo MAP
    // Autor: Emerson Martins Brito
    // Data: 15/03/2021
    include 'app/assets/head.php';
    ?>
</head>

<body>
    <div class="l-body">

        <header data-reactroot role="banner" class="l-header">
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
                    echo "<script src='app/_script/mapa.js'></script>";
                    echo "<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDwE3tZRrfF_ndldkvPdg3AYXKbZYtD1V0&callback=myMap'>
</script>";
                    break;
                default:
                    include 'app/views/home.php';
                    echo "<script src='app/_script/slideimagens.js'></script>";
                    break;
            }
            ?>
        </main>

        <footer class="l-footer">
            <?php
            include 'app/views/footer.php';
            ?>
        </footer>
    </div>
</body>

</html>