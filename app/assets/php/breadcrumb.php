<?php
/*
 * @Author Josean Matias (www.joseanmatias.com.br)
 * função para criar breadcrumb da página
 * pode ser passado os fragmentos da url
 * ou os fragmentos serão criados pela própria função
 * @param $url_pieces = url em forma de array
 */
// function breadcrumb($url_pieces = array(), $divisor = '>')
// {
//     //verifica se foram passados parametros
//     if ($url_pieces) {
//         $url_crumb = $url_pieces;
//         $http = null;
//     } else {
//         //senão não houver parametro
//         //então criar a url automaticamente
//         $http = 'http://';
//         $request = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
//         $explode = explode('/', $request);
//         foreach ($explode as $explode) {
//             $url_crumb[str_replace(
//                 '.php',
//                 '',
//                 $explode
//             )] = str_replace('.php', '', $explode);
//         }
//     }
//     //quantidade de fragmentos da url
//     $count = sizeof($url_crumb);
//     //inicia contador
//     $i = 1;
//     foreach ($url_crumb as $link => $inner) {
//         $href = "0";
//         //verifica se é o primeiro fragmento da url
//         if ($i == 1) {
//             $href .= $http . $link;
//         } else {
//             $href .= '/' . $link;
//         }
//         //verifica se é o ultimo fragmento da url
//         if ($i == $count) {
//             //mostrar fragmento sem link
//             $crumb[] = '<span>' . ($inner) . '</span>';
//         } else {
//             //mostrar fragmento com link para a pagina
//             $crumb[] = '<a href="' . $href . '" title="' . $inner . '">' . $inner . '</a> ' . $divisor . ' ';
//         }
//         $i++;
//     }
//     //mostrar breadcrumb na tela
//     echo '<div class="breadcrumb">';
//     foreach ($crumb as $crumb) {
//         echo $crumb;
//     }
//     echo '</div>';
// }
?>
<?php

// Cria a função para gerar o breadcrumb
// function generateBreadcrumb()
// {
//   $currentPage = $_SERVER['REQUEST_URI'];
//   $pages = explode('/', $currentPage);
//   // Cria o HTML do breadcrumb
//   $breadcrumb = '<ol class="breadcrumb">';
//   $breadcrumb .= '<li class="breadcrumb-item"><a href="/">Home</a></li>';
//   foreach ($pages as $page) {
//     if (!empty($page)) {
//       $breadcrumb .= '<li class="breadcrumb-item">' . ucfirst($page) . '</li>';
//     }
//   }
//   $breadcrumb .= '</ol>';
//   return $breadcrumb;
// }
// // Exibe o breadcrumb na página
// echo generateBreadcrumb();
?>