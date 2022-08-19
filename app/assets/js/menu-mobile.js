// Animação botão menu mobile
function buttonMobileMenu() {
	if (menuIsOpened === true) {
		// buttonMobile.forEach(element => {
		// 	element.classList.add("is-hidden");
		// 	element.classList.remove("is-open");
		// });
		// menuMobileItens.forEach(element => {
		// 	element.classList.add("is-hidden");
		// 	element.classList.remove("is-open");
		// });
		// menuMobile.classList.remove("is-open");
		// menuMobile.classList.add("is-hidden");
		// menuMobileFlyout.classList.remove("is-open");
		// menuMobileFlyout.classList.add("is-hidden");
		// if (window.pageYOffset > header.offsetTop) {
		// 	menuCollap();
		// 	isCollapsed = true;
		// } else if (window.pageYOffset <= header.offsetTop) {
		// 	menuExpand();
		// 	isCollapsed = false;
		// }
		// menuIsOpened = false;
		closeMenuMobile();
	} else {
		buttonMobile.forEach(element => {
			element.classList.add("is-open");
		});
		menuMobile.classList.add("is-open");
		menuMobile.classList.remove("is-hidden");
		menuCollap();
		menuIsOpened = true;
	}
}

function closeMenuMobile() {
	buttonMobile.forEach(element => {
		element.classList.remove("is-open");
	});
	menuMobileItens.forEach(element => {
		element.classList.add("is-hidden");
		element.classList.remove("is-open");
	});
	menuMobile.classList.remove("is-open");
	menuMobile.classList.add("is-hidden");
	menuMobileFlyout.classList.remove("is-open");
	menuMobileFlyout.classList.add("is-hidden");
	buttonClose.classList.add("is-hidden");
	buttonClose.classList.remove("is-open");
	if (window.pageYOffset > header.offsetTop) {
		menuCollap();
		isCollapsed = true;
	} else if (window.pageYOffset <= header.offsetTop) {
		menuExpand();
		isCollapsed = false;
	}
	menuIsOpened = false;
	classOpened = "empty";
}

// Menu mobile flyout
function openMenuMobile(itenMenuMobile) {
	clickMenu = itenMenuMobile;
	let actualClass = ".js-mobile-" + itenMenuMobile;
	console.log(actualClass);
	if (classOpened !== actualClass) {
		menuMobileItens.forEach(element => {
			element.classList.add("is-hidden");
			element.classList.remove("is-open");
		});
		menuMobileFlyout.classList.add("is-open");
		menuMobileFlyout.classList.remove("is-hidden");
		document.querySelector(actualClass).classList.remove("is-hidden");
		document.querySelector(actualClass).classList.add("is-open");
		classOpened = actualClass;
		menuIsOpened = true;
	} else {
		// menuMobileItens.forEach(element => {
		// 	element.classList.add("is-hidden");
		// 	element.classList.remove("is-open");
		// });
		// menuMobileFlyout.classList.remove("is-open");
		// menuMobileFlyout.classList.add("is-hidden");
		// buttonClose.classList.add("is-hidden");
		// buttonClose.classList.remove("is-open");
		// menuIsOpened = false;
		// classOpened = "empty";
		closeMenuMobile();
	}
}
