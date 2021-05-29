var header = document.querySelector("header");
var headerTop = document.querySelector('[data-sticky=top]');
var headerLogoLink = document.querySelector('[data-sticky=logoLink]');
var headerNav = document.querySelector('[data-sticky=nav]');
var headerNavLink = document.querySelector('[data-sticky=navLink]');
var headerSvgLines = document.querySelectorAll('[data-sticky=svgLines]');
var headerGLines = document.querySelectorAll('[data-sticky=gLines]');
var headerlineGrey = document.getElementById("idheaderLineGrey");
const navMobile = document.querySelector('[ data-sticky=navMobile]');
const navMobileFlyout = document.querySelector('[data-navFlyout=navMobileFlyout]');
const navMobileLegend = document.querySelector('[data-navFlyout=navMobileLegend]')
const currentLegend = document.getElementById("idLegend");
var varCollapse;
var varExpand;

window.onscroll = function () {
  headerSticky()
};

function headerSticky() {
  if ((window.pageYOffset > header.offsetTop) && !(varCollapse)) {
    collapse();
  } else if ((window.pageYOffset <= header.offsetTop) && !(varExpand)) {
    expand();
  }
}

function collapse() {
  header.classList.add("clHeaderSticky");
  headerTop.classList.add("clSticky");
  headerLogoLink.classList.add("clHeaderLogoLinkSticky");
  headerGLines.forEach(addLineSticky => {
    addLineSticky.classList.add("clHeaderLinesSticky")
  });
  headerlineGrey.addEventListener("transitionend", collapseAfterTransition());
  varCollapse = true;
  varExpand = false;
}

function expand() {
  header.classList.remove("clHeaderSticky");
  headerTop.classList.remove("clSticky");
  headerLogoLink.classList.remove("clHeaderLogoLinkSticky");
  headerGLines.forEach(removeLineSticky => {
    removeLineSticky.classList.remove("clHeaderLinesSticky")
  });
  headerSvgLines.forEach(removeSvgSticky => {
    removeSvgSticky.classList.remove("clSticky")
  });
  varExpand = true;
  varCollapse = false;
}

function collapseAfterTransition() {
  if (!(varCollapse)) {
    headerSvgLines.forEach(addSvgSticky => {
      addSvgSticky.classList.add("clSticky")
    })
  } else {
    console.log("Effect falut");
  }
}

function navMobileOpen(){
  collapse();
  navMobile.style.height = "auto";
}

function addLegend(legend){
currentLegend.innerHTML = legend;
navMobileLegend.classList.add("clHeaderNavFlayoutOpen");
if (legend == "produtos") {
  document.querySelector('[data-navFlyout="navMobileProdutos"]').classList.add("clHeaderNavFlayoutOpen");
}
}