const header = document.querySelector(".js-header");
const stickerLag = document.querySelector(".js-sticky__lag");
const stickers = document.querySelectorAll(".js-sticky");
const menuFlyout = document.querySelector(".js-menu-flyout");
const menuItens = document.querySelectorAll(".js-menu-item");
const menuMobile = document.querySelector(".js-menu-mobile");
const menuMobileFlyout = document.querySelector(".js-menu-mobile-flyout");
const menuMobileItens = document.querySelectorAll(".js-menu-mobile-item");
const buttonClose = document.querySelector(".js-button-close");
const buttonMobile = document.querySelectorAll(".js-button-mobile");
let menuMobileIsOpened;
let menuIsOpened;
let isCollapsed;
let classOpened;

// Collap menu
function menuCollap() {
	stickers.forEach(sticky => {
		sticky.classList.add("has-sticker");
	});
	stickerLag.style.transition = "350ms ease-in 0ms";
}

// Expand menu
function menuExpand() {
	stickers.forEach(sticky => {
		sticky.classList.remove("has-sticker");
	});
	stickerLag.style.transition = "450ms ease-in 350ms";
}
// stick header
window.onscroll = function () {
	if (window.pageYOffset > header.offsetTop && isCollapsed !== true) {
		menuCollap();
		isCollapsed = true;
	} else if (window.pageYOffset <= header.offsetTop && isCollapsed !== false && menuIsOpened !== true) {
		menuExpand();
		isCollapsed = false;
	}
};

// Open menu
function openMenu(itenMenu) {
	let actualClass = ".js-" + itenMenu;
	if (classOpened !== actualClass) {
		menuItens.forEach(element => {
			element.classList.add("is-hidden");
		});
		menuCollap();
		menuFlyout.classList.add("is-open");
		buttonClose.classList.remove("is-hidden");
		buttonClose.classList.add("is-open");
		document.querySelector(actualClass).classList.remove("is-hidden");
		document.querySelector(actualClass).classList.add("is-open");
		classOpened = actualClass;
		menuIsOpened = true;
	} else {
		menuItens.forEach(element => {
			element.classList.add("is-hidden");
			element.classList.remove("is-open");
		});
		menuFlyout.classList.remove("is-open");
		buttonClose.classList.add("is-hidden");
		buttonClose.classList.remove("is-open");
		menuIsOpened = false;
		classOpened = "empty";
		if (window.pageYOffset > header.offsetTop) {
			menuCollap();
			isCollapsed = true;
		} else if (window.pageYOffset <= header.offsetTop) {
			menuExpand();
			isCollapsed = false;
		}
	}
}

function closeMenu() {
	menuItens.forEach(element => {
		element.classList.add("is-hidden");
		element.classList.remove("is-open");
	});
	menuFlyout.classList.remove("is-open");
	buttonClose.classList.add("is-hidden");
	buttonClose.classList.remove("is-open");
	menuIsOpened = false;
	classOpened = "empty";
	if (window.pageYOffset > header.offsetTop) {
		menuCollap();
		isCollapsed = true;
	} else if (window.pageYOffset <= header.offsetTop) {
		menuExpand();
		isCollapsed = false;
	}
}
// Menu mobile
function openMenuMobile(itenMenuMobile) {
	let actualClass = ".js-mobile-" + itenMenuMobile;
	if (classOpened !== actualClass) {
		menuItens.forEach(element => {
			element.classList.add("is-hidden");
		});
		menuCollap();
		menuFlyout.classList.add("is-open");
		buttonClose.classList.remove("is-hidden");
		buttonClose.classList.add("is-open");
		document.querySelector(actualClass).classList.remove("is-hidden");
		document.querySelector(actualClass).classList.add("is-open");
		classOpened = actualClass;
		menuMobileIsOpened = true;
	} else {
		menuItens.forEach(element => {
			element.classList.add("is-hidden");
			element.classList.remove("is-open");
		});
		menuFlyout.classList.remove("is-open");
		buttonClose.classList.add("is-hidden");
		buttonClose.classList.remove("is-open");
		menuMobileIsOpened = false;
		classOpened = "empty";
		if (window.pageYOffset > header.offsetTop) {
			menuCollap();
			isCollapsed = true;
		} else if (window.pageYOffset <= header.offsetTop) {
			menuExpand();
			isCollapsed = false;
		}
	}
}

// Animação botão menu mobile
function buttonMobileMenu() {
	if (menuMobileIsOpened === true) {
		buttonMobile.forEach(element => {
			element.classList.remove("is-open");
		});
		menuMobile.classList.remove("is-open");
		menuMobile.classList.add("is-hidden");
		if (window.pageYOffset > header.offsetTop) {
			menuCollap();
			isCollapsed = true;
		} else if (window.pageYOffset <= header.offsetTop) {
			menuExpand();
			isCollapsed = false;
		}
		menuMobileIsOpened = false;
	} else {
		buttonMobile.forEach(element => {
			element.classList.add("is-open");
		});
		menuMobile.classList.add("is-open");
		menuMobile.classList.remove("is-hidden");
		menuCollap();
		menuMobileIsOpened = true;
	}
}

// maps;
function containerMaps() {
	let mapCanvas = document.querySelector(".js-maps");
	let mapCenter = new google.maps.LatLng(-25.4979, -49.31375);
	let mapIcon = "app/assets/image/NucleoMAP_Pin_mapa.png";
	let mapOptions = { center: mapCenter, zoom: 17 };
	let map = new google.maps.Map(mapCanvas, mapOptions);
	let marker = new google.maps.Marker({ position: mapCenter, icon: mapIcon });
	marker.setMap(map);
}

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
