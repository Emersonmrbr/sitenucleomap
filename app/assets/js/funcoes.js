// Variáveis globais
//=========================
//=========================

var idCorpo                        = document.getElementById("inCorpo");
var idSombra                       = document.getElementById("inSombra");
var idCabecalho                    = document.getElementById("inCabecalho");
var idCabecalhoNivel1              = document.getElementById("inCabecalhoNivel1");
var idFaixaSuperior                = document.getElementById("inFaixaSuperior");
var idCabecalhoNivel2              = document.getElementById("inCabecalhoNivel2");
var idCabecalhoNivel3              = document.getElementById("inCabecalhoNivel3");
var idMenu                         = document.getElementById("inMenu");
var idMenuLink1                    = document.getElementById("inMenuLink1");
var idMenuLink2                    = document.getElementById("inMenuLink2");
var idMenuLink3                    = document.getElementById("inMenuLink3");
var idMenuLista                    = document.getElementById("inMenuLista");
var idMenuAba                      = document.getElementById("inMenuAba");
var idMenuAreaUtil                 = document.getElementById("inMenuAreaUtil");
var idMenuJanela1                  = document.getElementById("inMenuJanela1");
var idMenuJanela1Lista1            = document.getElementById("inMenuJanela1Lista1");
var idMenuJanela1Lista2            = document.getElementById("inMenuJanela1Lista2");
var idMenuJanela1Lista3            = document.getElementById("inMenuJanela1Lista3");
var idAreaBotaoFechar              = document.getElementById("inAreaBotaoFechar");
var idFaixaBotaoFechar             = document.getElementById("inFaixaBotaoFechar");
var idBotaoFecharAntes             = document.getElementById("inBotaoFecharAntes");
var idBotaoFechar                  = document.getElementById("inBotaoFechar");
var idBotaoFecharDepois            = document.getElementById("inBotaoFecharDepois");
var idMenuIndicativo               = document.getElementById("inMenuIndicativo");
var idAreaImagens                  = document.getElementById("inAreaImagens");
var idAreaImagensFaixaSuperior     = document.getElementById("inAreaImagensFaixaSuperior");
var idAreaImagensPrincipal         = document.getElementById("inAreaImagensPrincipal");
var idCarrocelImagens              = document.getElementById("inCarrocelImagens");
var idAreaImagensFaixaInferior     = document.getElementById("inAreaImagensFaixaInferior");
var idLegenda                      = document.getElementById("inLegenda");
var idLegendaTexto                 = document.getElementById("inLegendaTexto");
var idLegendaControle              = document.getElementById("inLegendaControle");
var idLegendaIndicador             = document.getElementById("inLegendaIndicador");
var idLegendaIndicadorItem1        = document.getElementById("inLegendaIndicadorItem1");
var idLegendaIndicadorItem2        = document.getElementById("inLegendaIndicadorItem2");
var idLegendaIndicadorItem3        = document.getElementById("inLegendaIndicadorItem3");
var idLegendaIndicadorItem4        = document.getElementById("inLegendaIndicadorItem4");
var idLegendaTexto1                = document.getElementById("inLegendaTexto1");
var idLegendaTexto2                = document.getElementById("inLegendaTexto2");
var idLegendaTexto3                = document.getElementById("inLegendaTexto3");
var idLegendaTexto4                = document.getElementById("inLegendaTexto4");
var TamanhoSombra                  = idCorpo.clientHeight + 100;
var TamanhoImagem                  = idCarrocelImagens.children[0].clientWidth + 3;
var TamanhoTotalImagens            = (idCarrocelImagens.children.length * TamanhoImagem);
var TamnhoAreaImagens              = TamanhoTotalImagens + TamanhoImagem;
var LimiteSlide                    = (TamanhoTotalImagens * -1);
var IdentificacaoImagem            = idCarrocelImagens.children[0].id;
var Contagem                       = 0;
var Offset                         = 75;
var SlideImagem;
console.log(document.getElementsByTagName("div"));
console.log(TamanhoSombra);

//==============
//EFEITO DO MENU
//==============
window.onscroll = function () {
  CabecalhoAnimado();
};

function CabecalhoAnimado() {
  if (window.pageYOffset !== 0 && idMenuAba.clientHeight === 0) {
    idFaixaSuperior.classList.remove("Cab-Fax-Supeior");
    idCabecalhoNivel3.classList.remove("Cab-Nivel3");
    idMenu.classList.remove("Menu-Nav");
    idCabecalho.classList.add("Flutuante-Menu-1");
    idCabecalhoNivel3.classList.add("Flutuante-Menu-2");
    idFaixaSuperior.classList.add("Flutuante-Menu-3");
    idMenu.classList.add("Flutuante-Menu-4");
  } else if (window.pageYOffset !== 0 && idMenuAba.clientHeight !== 0) {
    idFaixaSuperior.classList.remove("Cab-Fax-Supeior");
    idCabecalhoNivel3.classList.remove("Cab-Nivel3");
    idMenu.classList.remove("Menu-Nav");
    idCabecalho.classList.add("Flutuante-Menu-1");
    idCabecalhoNivel3.classList.add("Flutuante-Menu-2");
    idFaixaSuperior.classList.add("Flutuante-Menu-3");
    idMenu.classList.add("Flutuante-Menu-4");
  } else if (window.pageYOffset === 0 && idMenuAba.clientHeight === 0) {
    idFaixaSuperior.classList.add("Cab-Fax-Supeior");
    idCabecalhoNivel3.classList.add("Cab-Nivel3");
    idMenu.classList.add("Menu-Nav");
    idCabecalho.classList.remove("Flutuante-Menu-1");
    idCabecalhoNivel3.classList.remove("Flutuante-Menu-2");
    idFaixaSuperior.classList.remove("Flutuante-Menu-3");
    idMenu.classList.remove("Flutuante-Menu-4");
  }
}

//===============
//$$$$$$$$$$$$$$$
//===============


//================
//EFEITO MENU ABAS
//================

//Abre uma aba de menu quando algum icone for clicado.

function AbreAbaMenuProdutos() {
  if (idMenuAba.clientHeight === (idMenuJanela1Lista3.clientHeight + Offset)) {
    FechaAbaMenu();
  } else {
    idSombra.style.display = "block";
    idSombra.style.height = TamanhoSombra + "px";
    idFaixaSuperior.classList.remove("Cab-Fax-Supeior");
    idCabecalhoNivel3.classList.remove("Cab-Nivel3");
    idMenu.classList.remove("Menu-Nav");
    idCabecalho.classList.add("Flutuante-Aba-1");
    idCabecalhoNivel3.classList.add("Flutuante-Aba-2");
    idFaixaSuperior.classList.add("Flutuante-Aba-3");
    idMenu.classList.add("Flutuante-Aba-4");
    idMenuJanela1Lista3.style.display = "block";
    idMenuJanela1Lista1 .style.display = "none";
    idMenuJanela1Lista2.style.display = "none";
    idAreaBotaoFechar.style.display = "flex";
    idMenuJanela1.clientHeight = "100%";
    idMenuJanela1.style.width = "25%";
    idMenuLink3.classList.add("Menu-a-Ativo");
    idMenuLink1.classList.remove("Menu-a-Ativo");
    idMenuLink2.classList.remove("Menu-a-Ativo");
    var MedidaJanela = idMenuJanela1Lista3.clientHeight + Offset;
    idMenuAba.style.height = MedidaJanela + "px";
    console.log(idMenuJanela1Lista3.clientHeight);
  }
}

function AbreAbaMenuServicos() {
  if (idMenuAba.clientHeight === (idMenuJanela1Lista2.clientHeight + Offset)) {
    FechaAbaMenu();
  } else {
    idSombra.style.display = "block";
    idSombra.style.height = TamanhoSombra + "px";
    idFaixaSuperior.classList.remove("Cab-Fax-Supeior");
    idCabecalhoNivel3.classList.remove("Cab-Nivel3");
    idMenu.classList.remove("Menu-Nav");
    idCabecalho.classList.add("Flutuante-Aba-1");
    idCabecalhoNivel3.classList.add("Flutuante-Aba-2");
    idFaixaSuperior.classList.add("Flutuante-Aba-3");
    idMenu.classList.add("Flutuante-Aba-4");
    idMenuJanela1Lista2.style.display = "block";
    idMenuJanela1Lista1 .style.display = "none";
    idMenuJanela1Lista3.style.display = "none";
    idAreaBotaoFechar.style.display = "flex";
    idMenuJanela1.clientHeight = "100%";
    idMenuJanela1.style.width = "25%";
    idMenuLink2.classList.add("Menu-a-Ativo");
    idMenuLink1.classList.remove("Menu-a-Ativo");
    idMenuLink3.classList.remove("Menu-a-Ativo");
    var MedidaJanela = idMenuJanela1Lista2.clientHeight + Offset;
    idMenuAba.style.height = MedidaJanela + "px";
  }
}

function AbreAbaMenuEmpresa() {
  if (idMenuAba.clientHeight === (idMenuJanela1Lista1 .clientHeight + Offset)) {
    FechaAbaMenu();
  } else {
    idSombra.style.display = "block";
    idSombra.style.height = TamanhoSombra + "px";
    idFaixaSuperior.classList.remove("Cab-Fax-Supeior");
    idCabecalhoNivel3.classList.remove("Cab-Nivel3");
    idMenu.classList.remove("Menu-Nav");
    idCabecalho.classList.add("Flutuante-Aba-1");
    idCabecalhoNivel3.classList.add("Flutuante-Aba-2");
    idFaixaSuperior.classList.add("Flutuante-Aba-3");
    idMenu.classList.add("Flutuante-Aba-4");
    idMenuJanela1Lista1 .style.display = "block";
    idMenuJanela1Lista2.style.display = "none";
    idMenuJanela1Lista3.style.display = "none";
    idAreaBotaoFechar.style.display = "flex";
    idMenuJanela1.clientHeight = "100%";
    idMenuJanela1.style.width = "25%";
    idMenuLink1.classList.add("Menu-a-Ativo");
    idMenuLink2.classList.remove("Menu-a-Ativo");
    idMenuLink3.classList.remove("Menu-a-Ativo");
    var MedidaJanela = idMenuJanela1Lista1 .clientHeight + Offset;
    console.log(MedidaJanela);
    idMenuAba.style.height = MedidaJanela + "px";
  }
}

//Fecha a aba do menu quando for clicado no botão fechar.
function FechaAbaMenu() {
  if (window.pageYOffset === 0) {
    idSombra.style.display = "none";
    idFaixaSuperior.classList.add("Cab-Fax-Supeior");
    idCabecalhoNivel3.classList.add("Cab-Nivel3");
    idMenu.classList.add("Menu-Nav");
    idCabecalho.classList.remove("Flutuante-Aba-1", "Flutuante-Menu-1");
    idCabecalhoNivel3.classList.remove("Flutuante-Aba-2");
    idFaixaSuperior.classList.remove("Flutuante-Aba-3");
    idMenu.classList.remove("Flutuante-Aba-4");
    idMenuAba.style.height = "0";
    idMenuJanela1Lista1 .style.display = "none";
    idMenuJanela1Lista2.style.display = "none";
    idMenuJanela1Lista3.style.display = "none";
    idAreaBotaoFechar.style.display = "none";
    idMenuLink1.classList.remove("Menu-a-Ativo");
    idMenuLink2.classList.remove("Menu-a-Ativo");
    idMenuLink3.classList.remove("Menu-a-Ativo");
  } else {
    idSombra.style.display = "none";
    idCabecalho.classList.remove("Flutuante-Aba-1", "Flutuante-Menu-1");
    idCabecalhoNivel3.classList.remove("Flutuante-Aba-2");
    idFaixaSuperior.classList.remove("Flutuante-Aba-3");
    idMenu.classList.remove("Flutuante-Aba-4");
    idMenuAba.style.height = "0";
    idMenuJanela1Lista1 .style.display = "none";
    idMenuJanela1Lista2.style.display = "none";
    idMenuJanela1Lista3.style.display = "none";
    idAreaBotaoFechar.style.display = "none";
    idMenuLink1.classList.remove("Menu-a-Ativo");
    idMenuLink2.classList.remove("Menu-a-Ativo");
    idMenuLink3.classList.remove("Menu-a-Ativo");
  }
}

//===============
//$$$$$$$$$$$$$$$
//===============


//==============
//SLIDE DE FOTOS
//==============
//Efeito de rolagem de imagens no slide.

idAreaImagens.style.left         = (TamanhoImagem * -1) + "px";
idAreaImagens.style.width        = TamnhoAreaImagens + "px";
SlideImagem = setTimeout(SlideFotos, 10000);

switch (idCarrocelImagens.children[0].id) {
    
case "inFoto1":
  idLegendaIndicador.children[3].classList.add("Legenda-Indicador-Item-Ativo");
  idLegendaIndicador.children[2].classList.remove("Legenda-Indicador-Item-Ativo");
  idLegendaIndicador.children[1].classList.remove("Legenda-Indicador-Item-Ativo");
  idLegendaIndicador.children[0].classList.remove("Legenda-Indicador-Item-Ativo");
  idLegendaTexto.children[0].classList.add('Legenda-Texto-Ativo');
  idLegendaTexto.children[1].classList.remove('Legenda-Texto-Ativo');
  idLegendaTexto.children[2].classList.remove('Legenda-Texto-Ativo');
  idLegendaTexto.children[3].classList.remove('Legenda-Texto-Ativo');
  break;
case "inFoto2":
  idLegendaIndicador.children[2].classList.add("Legenda-Indicador-Item-Ativo");
  idLegendaIndicador.children[3].classList.remove("Legenda-Indicador-Item-Ativo");
  idLegendaIndicador.children[1].classList.remove("Legenda-Indicador-Item-Ativo");
  idLegendaIndicador.children[0].classList.remove("Legenda-Indicador-Item-Ativo");
  idLegendaTexto.children[1].classList.add('Legenda-Texto-Ativo');
  idLegendaTexto.children[0].classList.remove('Legenda-Texto-Ativo');
  idLegendaTexto.children[2].classList.remove('Legenda-Texto-Ativo');
  idLegendaTexto.children[3].classList.remove('Legenda-Texto-Ativo');  
  break;
case "inFoto3":
  idLegendaIndicador.children[1].classList.add("Legenda-Indicador-Item-Ativo");
  idLegendaIndicador.children[3].classList.remove("Legenda-Indicador-Item-Ativo");
  idLegendaIndicador.children[2].classList.remove("Legenda-Indicador-Item-Ativo");
  idLegendaIndicador.children[0].classList.remove("Legenda-Indicador-Item-Ativo");
  idLegendaTexto.children[2].classList.add('Legenda-Texto-Ativo');
  idLegendaTexto.children[0].classList.remove('Legenda-Texto-Ativo');
  idLegendaTexto.children[1].classList.remove('Legenda-Texto-Ativo');
  idLegendaTexto.children[3].classList.remove('Legenda-Texto-Ativo');
  break;
case "inFoto4":
  idLegendaIndicador.children[0].classList.add("Legenda-Indicador-Item-Ativo");
  idLegendaIndicador.children[3].classList.remove("Legenda-Indicador-Item-Ativo");
  idLegendaIndicador.children[2].classList.remove("Legenda-Indicador-Item-Ativo");
  idLegendaIndicador.children[1].classList.remove("Legenda-Indicador-Item-Ativo");
  idLegendaTexto.children[3].classList.add('Legenda-Texto-Ativo');
  idLegendaTexto.children[0].classList.remove('Legenda-Texto-Ativo');
  idLegendaTexto.children[1].classList.remove('Legenda-Texto-Ativo');
  idLegendaTexto.children[2].classList.remove('Legenda-Texto-Ativo');
  break;

}

function SlideFotos() {
  var IndexImagem = TamanhoImagem * -2, Id = MoveImagem(), Posicao = (TamanhoImagem * -1); 
  function MoveImagem() {
    if (Posicao < IndexImagem) {
      idCarrocelImagens.insertAdjacentElement("beforeend", idCarrocelImagens.children[0]);
      idAreaImagens.style.left = (TamanhoImagem * -1) + "px";
      SlideImagem = setTimeout(SlideFotos, 10000);
    } else {
      Posicao = Posicao - 100;
      idAreaImagens.style.left = Posicao + "px";
      setTimeout(MoveImagem, 1);
    }
    switch (idCarrocelImagens.children[0].id) {
    
      case "inFoto1":
        idLegendaIndicador.children[3].classList.add("Legenda-Indicador-Item-Ativo");
        idLegendaIndicador.children[2].classList.remove("Legenda-Indicador-Item-Ativo");
        idLegendaIndicador.children[1].classList.remove("Legenda-Indicador-Item-Ativo");
        idLegendaIndicador.children[0].classList.remove("Legenda-Indicador-Item-Ativo");
        idLegendaTexto.children[0].classList.add('Legenda-Texto-Ativo');
        idLegendaTexto.children[1].classList.remove('Legenda-Texto-Ativo');
        idLegendaTexto.children[2].classList.remove('Legenda-Texto-Ativo');
        idLegendaTexto.children[3].classList.remove('Legenda-Texto-Ativo');
        break;
      case "inFoto2":
        idLegendaIndicador.children[2].classList.add("Legenda-Indicador-Item-Ativo");
        idLegendaIndicador.children[3].classList.remove("Legenda-Indicador-Item-Ativo");
        idLegendaIndicador.children[1].classList.remove("Legenda-Indicador-Item-Ativo");
        idLegendaIndicador.children[0].classList.remove("Legenda-Indicador-Item-Ativo");
        idLegendaTexto.children[1].classList.add('Legenda-Texto-Ativo');
        idLegendaTexto.children[0].classList.remove('Legenda-Texto-Ativo');
        idLegendaTexto.children[2].classList.remove('Legenda-Texto-Ativo');
        idLegendaTexto.children[3].classList.remove('Legenda-Texto-Ativo');  
        break;
      case "inFoto3":
        idLegendaIndicador.children[1].classList.add("Legenda-Indicador-Item-Ativo");
        idLegendaIndicador.children[3].classList.remove("Legenda-Indicador-Item-Ativo");
        idLegendaIndicador.children[2].classList.remove("Legenda-Indicador-Item-Ativo");
        idLegendaIndicador.children[0].classList.remove("Legenda-Indicador-Item-Ativo");
        idLegendaTexto.children[2].classList.add('Legenda-Texto-Ativo');
        idLegendaTexto.children[0].classList.remove('Legenda-Texto-Ativo');
        idLegendaTexto.children[1].classList.remove('Legenda-Texto-Ativo');
        idLegendaTexto.children[3].classList.remove('Legenda-Texto-Ativo');
        break;
      case "inFoto4":
        idLegendaIndicador.children[0].classList.add("Legenda-Indicador-Item-Ativo");
        idLegendaIndicador.children[3].classList.remove("Legenda-Indicador-Item-Ativo");
        idLegendaIndicador.children[2].classList.remove("Legenda-Indicador-Item-Ativo");
        idLegendaIndicador.children[1].classList.remove("Legenda-Indicador-Item-Ativo");
        idLegendaTexto.children[3].classList.add('Legenda-Texto-Ativo');
        idLegendaTexto.children[0].classList.remove('Legenda-Texto-Ativo');
        idLegendaTexto.children[1].classList.remove('Legenda-Texto-Ativo');
        idLegendaTexto.children[2].classList.remove('Legenda-Texto-Ativo');
        break;

    }
  }
}

function AvancaImagem() {
  var IndexImagem = (TamanhoImagem * -2), Id = MoveImagem(), Posicao = (TamanhoImagem * -1);
  clearTimeout(SlideImagem);
  function MoveImagem() {
    if (Posicao < IndexImagem) {
      idCarrocelImagens.insertAdjacentElement("beforeend", idCarrocelImagens.children[0]);
      idAreaImagens.style.left = (TamanhoImagem * -1) + "px";
      SlideImagem = setTimeout(SlideFotos, 10000);
      switch (idCarrocelImagens.children[0].id) {
    
        case "inFoto1":
          idLegendaIndicador.children[3].classList.add("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[2].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[1].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[0].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaTexto.children[0].classList.add('Legenda-Texto-Ativo');
          idLegendaTexto.children[1].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[2].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[3].classList.remove('Legenda-Texto-Ativo');
          break;
        case "inFoto2":
          idLegendaIndicador.children[2].classList.add("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[3].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[1].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[0].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaTexto.children[1].classList.add('Legenda-Texto-Ativo');
          idLegendaTexto.children[0].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[2].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[3].classList.remove('Legenda-Texto-Ativo');  
          break;
        case "inFoto3":
          idLegendaIndicador.children[1].classList.add("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[3].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[2].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[0].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaTexto.children[2].classList.add('Legenda-Texto-Ativo');
          idLegendaTexto.children[0].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[1].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[3].classList.remove('Legenda-Texto-Ativo');
          break;
        case "inFoto4":
          idLegendaIndicador.children[0].classList.add("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[3].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[2].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[1].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaTexto.children[3].classList.add('Legenda-Texto-Ativo');
          idLegendaTexto.children[0].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[1].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[2].classList.remove('Legenda-Texto-Ativo');
          break;

      }
      return;
    } else {
      Posicao = Posicao - 100;
      idAreaImagens.style.left = Posicao + "px";
      setTimeout(MoveImagem, 1);
    }
  }
}

function RetrocedeImagem() {
  var IndexImagem = 0, Id = MoveImagem(), Posicao = (TamanhoImagem * -1);
  clearTimeout(SlideImagem);
  function MoveImagem() {
    if (Posicao > IndexImagem) {
      idCarrocelImagens.insertAdjacentElement("afterbegin", idCarrocelImagens.children[3]);
      idAreaImagens.style.left = (TamanhoImagem * -1) + "px";
      SlideImagem = setTimeout(SlideFotos, 10000);
      switch (idCarrocelImagens.children[0].id) {
    
        case "inFoto1":
          idLegendaIndicador.children[3].classList.add("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[2].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[1].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[0].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaTexto.children[0].classList.add('Legenda-Texto-Ativo');
          idLegendaTexto.children[1].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[2].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[3].classList.remove('Legenda-Texto-Ativo');
          break;
        case "inFoto2":
          idLegendaIndicador.children[2].classList.add("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[3].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[1].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[0].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaTexto.children[1].classList.add('Legenda-Texto-Ativo');
          idLegendaTexto.children[0].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[2].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[3].classList.remove('Legenda-Texto-Ativo');  
          break;
        case "inFoto3":
          idLegendaIndicador.children[1].classList.add("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[3].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[2].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[0].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaTexto.children[2].classList.add('Legenda-Texto-Ativo');
          idLegendaTexto.children[0].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[1].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[3].classList.remove('Legenda-Texto-Ativo');
          break;
        case "inFoto4":
          idLegendaIndicador.children[0].classList.add("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[3].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[2].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaIndicador.children[1].classList.remove("Legenda-Indicador-Item-Ativo");
          idLegendaTexto.children[3].classList.add('Legenda-Texto-Ativo');
          idLegendaTexto.children[0].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[1].classList.remove('Legenda-Texto-Ativo');
          idLegendaTexto.children[2].classList.remove('Legenda-Texto-Ativo');
          break;

      }
      return;
    } else {
      Posicao = Posicao + 100;
      idAreaImagens.style.left = Posicao + "px";
      setTimeout(MoveImagem, 1);
    }
  }
}