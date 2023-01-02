function changeImage(direction) {
	carousel.style.transition = "all 450ms ease-in";
	if (direction === "next") {
		carousel.style.marginLeft = `-${currentIndex * 100}%`;
	} else if (direction === "prev") {
		carousel.style.marginLeft = `-${currentIndex * 100}%`;
	}
}

buttonNext.addEventListener("click", () => {
	currentIndex++;
	if (currentIndex > amountImages) {
		currentIndex = 0;
	}
	changeImage("next");
});

buttonPrev.addEventListener("click", () => {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = amountImages;
	}
	changeImage("prev");
});
carousel.addEventListener("transitionend", () => {
	if (carousel.style.marginLeft === `-${amountImages * 100}%`) {
		currentIndex = 0;
		carousel.style.transition = "none";
		carousel.style.marginLeft = `-${currentIndex * 100}%`;
	}
});
