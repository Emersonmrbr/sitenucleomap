// Open  and close menu
function openMenu(itenMenu) {
	clickMenu = itenMenu;
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

// Close menu
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
