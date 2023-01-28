const buttonClose = document.querySelector("[js-button-close]");
const buttonMobile = document.querySelectorAll("[js-button-mobile]");
const buttonNext = document.querySelector("[js-slider-next]");
const buttonPrev = document.querySelector("[js-slider-prev]");
const carousel = document.querySelector("[js-carousel]");
const header = document.querySelector("[js-header]");
const images = document.querySelectorAll("[js-slider-gallery]");
const menuFlyout = document.querySelector("[js-menu-flyout]");
const menuItens = document.querySelectorAll("[js-menu-item]");
const menuMobile = document.querySelector(".js-menu-mobile");
const menuMobileFlyout = document.querySelector("[js-menu-mobile-flyout]");
const menuMobileItens = document.querySelectorAll("[js-menu-mobile-item]");
const stickerStraightBig = document.querySelector(".js-sticky__straight-big");
const stickerStraightSmall = document.querySelector(
  ".js-sticky__straight-small"
);
const stickerCrookeds = document.querySelectorAll(".js-sticky__crooked");
const stickers = document.querySelectorAll("[js-sticky]");
const contactInput = document.querySelectorAll("[js-contact-input]");
const contactLabel = document.querySelectorAll("[js-contact-label]");
const uP720 = window.matchMedia("(min-width: 720px)");

let amountImages = images.length - 1;
let classOpened;
let clickMenu;
let currentIndex = 1;
let isCollapsed;
let menuIsOpened;

document.querySelector(".js-fake").style.height = header.offsetHeight + "px";
