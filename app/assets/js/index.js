const buttonClose = document.querySelector(".js-button-close");
const buttonMobile = document.querySelectorAll(".js-button-mobile");
const header = document.querySelector(".js-header");
const menuFlyout = document.querySelector(".js-menu-flyout");
const menuItens = document.querySelectorAll(".js-menu-item");
const menuMobile = document.querySelector(".js-menu-mobile");
const menuMobileFlyout = document.querySelector(".js-menu-mobile-flyout");
const menuMobileItens = document.querySelectorAll(".js-menu-mobile-item");
const stickerLag = document.querySelector(".js-sticky__lag");
const stickers = document.querySelectorAll(".js-sticky");
const uP720 = window.matchMedia("(min-width: 720px)");
let classOpened;
let clickMenu;
let isCollapsed;
let menuIsOpened;

// function menu(e) {
// 	openMenu(e);
// 	markAsMenuActive(e);
// }

// function openMenu(el) {
// 	menuItens.forEach(($menuItem) => {
// 		if ($menuItem.classList.value.includes(el) && menuOpen != true) {
// 			collapse();
// 			$flyoutMenu.classList.toggle("is-open");
// 			$menuItem.classList.toggle("is-hidden");
// 			menuOpen = true;
// 		} else if (menuOpen == true) {
// 			$menuItem.classList.add("is-hidden");
// 			headerSticky();
// 		}
// 	});
// }

// function markAsMenuActive(el) {}

// footer
// const elementDivMenu1 = document.getElementById("idNav1");
// const elementDivMenu2 = document.getElementById("idNav2");
// const elementH4Menu1 = elementDivMenu1.children[0];
// const elementH4Menu2 = elementDivMenu2.children[0];
// const elementNavMenu1 = elementDivMenu1.children[1];
// const elementNavMenu2 = elementDivMenu2.children[1];
// const elementUlMenu1 = elementNavMenu1.children[0];
// const elementUlMenu2 = elementNavMenu2.children[0];
// const heightNav1 = elementUlMenu1.clientHeight;
// const heightNav2 = elementUlMenu2.clientHeight;
// let pos1 = elementDivMenu1.offsetTop;
// let pos2 = elementDivMenu2.offsetTop;
// let footerMobile;

// function footerNav1() {
//   if (footerMobile === "nav1Open") {
//     elementH4Menu1.classList.remove("footerMobileNavOpen");
//     elementH4Menu2.classList.remove("footerMobileNavOpen");
//     elementNavMenu1.style.height = 0;
//     elementNavMenu2.style.clientHeight = 0;
//     footerMobile = "nav1Close";
//   } else {
//     elementH4Menu1.classList.add("footerMobileNavOpen");
//     elementH4Menu2.classList.remove("footerMobileNavOpen");
//     elementNavMenu2.style.height = 0;
//     elementNavMenu1.style.height = heightNav1 + "px";
//     footerMobile = "nav1Open";
//     setTimeout(smoothScrollTo(0, pos1, 1000));
//   }
// }

// function footerNav2() {
//   if (footerMobile === "nav2Open") {
//     elementH4Menu2.classList.remove("footerMobileNavOpen");
//     elementH4Menu1.classList.remove("footerMobileNavOpen");
//     elementNavMenu2.style.height = 0;
//     elementNavMenu1.style.height = 0;
//     footerMobile = "nav2Close";
//   } else {
//     elementH4Menu2.classList.add("footerMobileNavOpen");
//     elementH4Menu1.classList.remove("footerMobileNavOpen");
//     elementNavMenu1.style.height = 0;
//     elementNavMenu2.style.height = heightNav2 + "px";
//     footerMobile = "nav2Open";
//     setTimeout(smoothScrollTo(0, pos2, 1000));
//   }
// }

// // Smooth scrooll
// function smoothScrollTo(endX, endY, duration) {
//   const startX = window.scrollX || window.pageXOffset;
//   const startY = window.scrollY || window.pageYOffset;
//   const distanceX = endX - startX;
//   const distanceY = endY - startY;
//   const startTime = new Date().getTime();

//   duration = typeof duration !== "undefined" ? duration : 400;

//   // Easing function
//   const easeInOutQuart = (time, from, distance, duration) => {
//     if ((time /= duration / 2) < 1)
//       return (distance / 2) * time * time * time * time + from;
//     return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
//   };

//   const timer = setInterval(() => {
//     const time = new Date().getTime() - startTime;
//     const newX = easeInOutQuart(time, startX, distanceX, duration);
//     const newY = easeInOutQuart(time, startY, distanceY, duration);
//     if (time >= duration) {
//       clearInterval(timer);
//     }
//     window.scroll(newX, newY);
//   }, 1000 / 60); // 60 fps
// }
