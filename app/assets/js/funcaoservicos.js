//======================================================================================================================================================
//======================================================================================================================================================
// Variáveis globais
//======================================================================================================================================================
//======================================================================================================================================================

var idCorpo = document.getElementById("inCorpo");
var idSombra = document.getElementById("inSombra");
var idFaixaCabecalho = document.getElementById("inFaixaCabecalho");
var idCabecalho = document.getElementById("inCabecalho");
var idLogo = document.getElementById("inLogo");
var idCabecalhoNivel1 = document.getElementById("inCabecalhoNivel1");
var idFaixaSuperior = document.getElementById("inFaixaSuperior");
var idCabecalhoNivel2 = document.getElementById("inCabecalhoNivel2");
var idCabecalhoNivel3 = document.getElementById("inCabecalhoNivel3");
var idMenu = document.getElementById("inMenu");
var idMenuLink1 = document.getElementById("inMenuLink1");
var idMenuLink2 = document.getElementById("inMenuLink2");
var idMenuLink3 = document.getElementById("inMenuLink3");
var idMenuLista = document.getElementById("inMenuLista");
var idMenuAba = document.getElementById("inMenuAba");
var idMenuAreaUtil = document.getElementById("inMenuAreaUtil");
var idMenuJanela1 = document.getElementById("inMenuJanela1");
var idMenuJanela1Lista1 = document.getElementById("inMenuJanela1Lista1");
var idMenuJanela1Lista2 = document.getElementById("inMenuJanela1Lista2");
var idMenuJanela1Lista3 = document.getElementById("inMenuJanela1Lista3");
var idAreaBotaoFechar = document.getElementById("inAreaBotaoFechar");
var idFaixaBotaoFechar = document.getElementById("inFaixaBotaoFechar");
var idBotaoFecharAntes = document.getElementById("inBotaoFecharAntes");
var idBotaoFechar = document.getElementById("inBotaoFechar");
var idBotaoFecharDepois = document.getElementById("inBotaoFecharDepois");
var idMenuIndicativo = document.getElementById("inMenuIndicativo");
var TamanhoSombra = idCorpo.clientHeight;
var Contagem = 0;
var Offset = 75;

idFaixaCabecalho.style.height = idCabecalho.clientHeight + "px";

//======================================================================================================================================================
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//======================================================================================================================================================

//======================================================================================================================================================
//EFEITO DO MENU
//======================================================================================================================================================

//Teste de captura do valor da largura da tela.
window.console.log(window.innerWidth);

window.onscroll = function() {
    CabecalhoAnimado();
};

function CabecalhoAnimado() {
    if (window.pageYOffset !== 0 && idMenuAba.clientHeight === 0) {
        idFaixaSuperior.classList.remove("Cab-Fax-Supeior");
        idCabecalhoNivel2.classList.remove("Cab-Nivel2");
        idCabecalhoNivel3.classList.remove("Cab-Nivel3");
        idMenu.classList.remove("Menu-Nav");
        idCabecalho.classList.add("Flutuante-Menu-1");
        idCabecalhoNivel3.classList.add("Flutuante-Menu-2");
        idFaixaSuperior.classList.add("Flutuante-Menu-3");
        idMenu.classList.add("Flutuante-Menu-4");
        idLogo.classList.add("Logo-Fixo");
        idLogo.width = "160";
    } else if (window.pageYOffset !== 0 && idMenuAba.clientHeight !== 0) {
        idFaixaSuperior.classList.remove("Cab-Fax-Supeior");
        idCabecalhoNivel2.classList.remove("Cab-Nivel2");
        idCabecalhoNivel3.classList.remove("Cab-Nivel3");
        idMenu.classList.remove("Menu-Nav");
        idCabecalho.classList.add("Flutuante-Menu-1");
        idCabecalhoNivel3.classList.add("Flutuante-Menu-2");
        idFaixaSuperior.classList.add("Flutuante-Menu-3");
        idMenu.classList.add("Flutuante-Menu-4");
        idLogo.classList.add("Logo-Fixo");
        idLogo.width = "160";
    } else if (window.pageYOffset === 0 && idMenuAba.clientHeight === 0) {
        idFaixaSuperior.classList.add("Cab-Fax-Supeior");
        idCabecalhoNivel2.classList.add("Cab-Nivel2");
        idCabecalhoNivel3.classList.add("Cab-Nivel3");
        idMenu.classList.add("Menu-Nav");
        idCabecalho.classList.remove("Flutuante-Menu-1");
        idCabecalhoNivel3.classList.remove("Flutuante-Menu-2");
        idFaixaSuperior.classList.remove("Flutuante-Menu-3");
        idMenu.classList.remove("Flutuante-Menu-4");
        idLogo.classList.remove("Logo-Fixo");
        idLogo.width = "222";
    }
}

//======================================================================================================================================================
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//======================================================================================================================================================

//======================================================================================================================================================
//EFEITO MENU ABAS
//======================================================================================================================================================

//Abre uma aba de menu quando algum icone for clicado.

function AbreAbaMenuProdutos() {
    if (idMenuAba.clientHeight === (idMenuJanela1Lista3.clientHeight + Offset)) {
        FechaAbaMenu();
    } else {
        idFaixaSuperior.classList.remove("Cab-Fax-Supeior");
        idCabecalhoNivel2.classList.remove("Cab-Nivel2");
        idCabecalhoNivel3.classList.remove("Cab-Nivel3");
        idMenu.classList.remove("Menu-Nav");
        idCabecalho.classList.add("Flutuante-Aba-1");
        idCabecalhoNivel3.classList.add("Flutuante-Aba-2");
        idFaixaSuperior.classList.add("Flutuante-Aba-3");
        idMenu.classList.add("Flutuante-Aba-4");
        idMenuLink3.classList.add("Menu-a-Ativo");
        idMenuLink1.classList.remove("Menu-a-Ativo");
        idMenuLink2.classList.remove("Menu-a-Ativo");
        idLogo.classList.add("Logo-Fixo");
        idLogo.width = "160";
        idMenuJanela1Lista3.style.display = "block";
        idMenuJanela1Lista1.style.display = "none";
        idMenuJanela1Lista2.style.display = "none";
        idAreaBotaoFechar.style.display = "flex";
        idMenuJanela1.clientHeight = "100%";
        idMenuJanela1.style.width = "25%";
        TamanhoSombra = idCorpo.clientHeight;
        idSombra.style.display = "block";
        idSombra.style.height = TamanhoSombra + "px";
        var MedidaJanela = idMenuJanela1Lista3.clientHeight + Offset;
        idMenuAba.style.height = MedidaJanela + "px";
    }
}

function AbreAbaMenuServicos() {
    if (idMenuAba.clientHeight === (idMenuJanela1Lista2.clientHeight + Offset)) {
        FechaAbaMenu();
    } else {
        idFaixaSuperior.classList.remove("Cab-Fax-Supeior");
        idCabecalhoNivel2.classList.remove("Cab-Nivel2");
        idCabecalhoNivel3.classList.remove("Cab-Nivel3");
        idMenu.classList.remove("Menu-Nav");
        idCabecalho.classList.add("Flutuante-Aba-1");
        idCabecalhoNivel3.classList.add("Flutuante-Aba-2");
        idFaixaSuperior.classList.add("Flutuante-Aba-3");
        idMenu.classList.add("Flutuante-Aba-4");
        idMenuLink2.classList.add("Menu-a-Ativo");
        idMenuLink1.classList.remove("Menu-a-Ativo");
        idMenuLink3.classList.remove("Menu-a-Ativo");
        idLogo.classList.add("Logo-Fixo");
        idLogo.width = "160";
        idMenuJanela1Lista2.style.display = "block";
        idMenuJanela1Lista1.style.display = "none";
        idMenuJanela1Lista3.style.display = "none";
        idAreaBotaoFechar.style.display = "flex";
        idMenuJanela1.clientHeight = "100%";
        idMenuJanela1.style.width = "25%";
        TamanhoSombra = idCorpo.clientHeight;
        idSombra.style.display = "block";
        idSombra.style.height = TamanhoSombra + "px";
        var MedidaJanela = idMenuJanela1Lista2.clientHeight + Offset;
        idMenuAba.style.height = MedidaJanela + "px";
    }
}

function AbreAbaMenuEmpresa() {
    if (idMenuAba.clientHeight === (idMenuJanela1Lista1.clientHeight + Offset)) {
        FechaAbaMenu();
    } else {
        idFaixaSuperior.classList.remove("Cab-Fax-Supeior");
        idCabecalhoNivel2.classList.remove("Cab-Nivel2");
        idCabecalhoNivel3.classList.remove("Cab-Nivel3");
        idMenu.classList.remove("Menu-Nav");
        idCabecalho.classList.add("Flutuante-Aba-1");
        idCabecalhoNivel3.classList.add("Flutuante-Aba-2");
        idFaixaSuperior.classList.add("Flutuante-Aba-3");
        idMenu.classList.add("Flutuante-Aba-4");
        idMenuLink1.classList.add("Menu-a-Ativo");
        idMenuLink2.classList.remove("Menu-a-Ativo");
        idMenuLink3.classList.remove("Menu-a-Ativo");
        idLogo.classList.add("Logo-Fixo");
        idLogo.width = "160";
        idMenuJanela1Lista1.style.display = "block";
        idMenuJanela1Lista2.style.display = "none";
        idMenuJanela1Lista3.style.display = "none";
        idAreaBotaoFechar.style.display = "flex";
        idMenuJanela1.clientHeight = "100%";
        idMenuJanela1.style.width = "25%";
        TamanhoSombra = idCorpo.clientHeight;
        idSombra.style.display = "block";
        idSombra.style.height = TamanhoSombra + "px";
        var MedidaJanela = idMenuJanela1Lista1.clientHeight + Offset;
        idMenuAba.style.height = MedidaJanela + "px";
    }
}

//Fecha a aba do menu quando for clicado no botão fechar.
function FechaAbaMenu() {
    if (window.pageYOffset === 0) {
        idFaixaSuperior.classList.add("Cab-Fax-Supeior");
        idCabecalhoNivel2.classList.add("Cab-Nivel2");
        idCabecalhoNivel3.classList.add("Cab-Nivel3");
        idMenu.classList.add("Menu-Nav");
        idCabecalho.classList.remove("Flutuante-Aba-1", "Flutuante-Menu-1");
        idCabecalhoNivel3.classList.remove("Flutuante-Aba-2");
        idFaixaSuperior.classList.remove("Flutuante-Aba-3");
        idMenu.classList.remove("Flutuante-Aba-4");
        idMenuLink1.classList.remove("Menu-a-Ativo");
        idMenuLink2.classList.remove("Menu-a-Ativo");
        idMenuLink3.classList.remove("Menu-a-Ativo");
        idLogo.classList.remove("Logo-Fixo");
        idLogo.width = "222";
        idMenuAba.style.height = "0";
        idMenuJanela1Lista1.style.display = "none";
        idMenuJanela1Lista2.style.display = "none";
        idMenuJanela1Lista3.style.display = "none";
        idAreaBotaoFechar.style.display = "none";
        idSombra.style.display = "none";
    } else {
        idCabecalho.classList.remove("Flutuante-Aba-1", "Flutuante-Menu-1");
        idCabecalhoNivel3.classList.remove("Flutuante-Aba-2");
        idFaixaSuperior.classList.remove("Flutuante-Aba-3");
        idMenu.classList.remove("Flutuante-Aba-4");
        idMenuLink1.classList.remove("Menu-a-Ativo");
        idMenuLink2.classList.remove("Menu-a-Ativo");
        idMenuLink3.classList.remove("Menu-a-Ativo");
        idMenuAba.style.height = "0";
        idMenuJanela1Lista1.style.display = "none";
        idMenuJanela1Lista2.style.display = "none";
        idMenuJanela1Lista3.style.display = "none";
        idAreaBotaoFechar.style.display = "none";
        idSombra.style.display = "none";
    }
}

//======================================================================================================================================================
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//======================================================================================================================================================