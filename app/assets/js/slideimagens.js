//======================================================================================================================================================
//======================================================================================================================================================
// Variáveis globais
//======================================================================================================================================================
//======================================================================================================================================================

var idCorpo = document.getElementById("inCorpo");
var idAreaImagens = document.getElementById("inAreaImagens");
var idAreaImagensFaixaSuperior = document.getElementById("inAreaImagensFaixaSuperior");
var idAreaImagensPrincipal = document.getElementById("inAreaImagensPrincipal");
var idCarrocelImagens = document.getElementById("inCarrocelImagens");
var idAreaImagensFaixaInferior = document.getElementById("inAreaImagensFaixaInferior");
var idLegenda = document.getElementById("inLegenda");
var idLegendaTexto = document.getElementById("inLegendaTexto");
var idLegendaControle = document.getElementById("inLegendaControle");
var idLegendaIndicador = document.getElementById("inLegendaIndicador");
var idLegendaIndicadorItem1 = document.getElementById("inLegendaIndicadorItem1");
var idLegendaIndicadorItem2 = document.getElementById("inLegendaIndicadorItem2");
var idLegendaIndicadorItem3 = document.getElementById("inLegendaIndicadorItem3");
var idLegendaIndicadorItem4 = document.getElementById("inLegendaIndicadorItem4");
var idLegendaTexto1 = document.getElementById("inLegendaTexto1");
var idLegendaTexto2 = document.getElementById("inLegendaTexto2");
var idLegendaTexto3 = document.getElementById("inLegendaTexto3");
var idLegendaTexto4 = document.getElementById("inLegendaTexto4");
var TamanhoImagem = idCarrocelImagens.children[0].clientWidth;
var TamanhoTotalImagens = (idCarrocelImagens.children.length * TamanhoImagem);
var TamnhoAreaImagens = TamanhoTotalImagens + TamanhoImagem;
var LimiteSlide = (TamanhoTotalImagens * -1);
var IdentificacaoImagem = idCarrocelImagens.children[0].id;
var Contagem = 0;
var Offset = 75;
var SlideImagem;

//======================================================================================================================================================
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//======================================================================================================================================================

//======================================================================================================================================================
//SLIDE DE FOTOS
//======================================================================================================================================================
//Efeito de rolagem de imagens no slide.

idAreaImagens.style.left = (TamanhoImagem * -1) + "px";
idAreaImagens.style.width = TamnhoAreaImagens + "px";
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
    var IndexImagem = TamanhoImagem * -2,
        Id = MoveImagem(),
        Posicao = (TamanhoImagem * -1);

    function MoveImagem() {
        if (Posicao < IndexImagem) {
            idCarrocelImagens.insertAdjacentElement("beforeend", idCarrocelImagens.children[0]);
            idAreaImagens.style.left = (TamanhoImagem * -1) + "px";
            SlideImagem = setTimeout(SlideFotos, 10000);
        } else {
            Posicao = Posicao - 50;
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
    var IndexImagem = (TamanhoImagem * -2),
        Id = MoveImagem(),
        Posicao = (TamanhoImagem * -1);
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
    var IndexImagem = 0,
        Id = MoveImagem(),
        Posicao = (TamanhoImagem * -1);
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

//======================================================================================================================================================
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//======================================================================================================================================================