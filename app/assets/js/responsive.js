// Responsivo
function responsive(element) {
	if (element.matches && menuIsOpened === true) {
		classOpened = "empty";
		closeMenuMobile();
		openMenu(clickMenu);
	} else if (!element.matches && menuIsOpened === true) {
		classOpened = "empty";
		closeMenu();
		buttonMobileMenu();
		openMenuMobile(clickMenu);
	}
}

uP720.addEventListener("change", responsive);
responsive(uP720);
