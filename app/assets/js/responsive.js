// Responsivo
function responsive(element) {
	if (element.matches && menuIsOpened === true) {
		closeMenuMobile();
		openMenu(clickMenu);
	} else if (!element.matches && menuIsOpened === true) {
		closeMenu();
		// openMenuMobile(clickMenu);
		buttonMobileMenu();
	}
}

uP720.addEventListener("change", responsive);
responsive(uP720);
