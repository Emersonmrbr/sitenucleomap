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
