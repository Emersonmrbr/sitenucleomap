//Move to second image
carousel.style.transition = "none";
carousel.style.marginLeft = `-${currentIndex * 100}%`;

const autoSlider = setInterval(function () {
	advanceImage();
}, 5000);

function changeImage(direction) {
	carousel.style.transition = "all 450ms ease-in";
	if (direction === "next") {
		carousel.style.marginLeft = `-${currentIndex * 100}%`;
	} else if (direction === "prev") {
		carousel.style.marginLeft = `-${currentIndex * 100}%`;
	}
}

buttonNext.addEventListener("click", () => {
	advanceImage();
	clearInterval(autoSlider);
});

function advanceImage() {
	currentIndex++;
	if (currentIndex > amountImages) {
		currentIndex = 0;
	}
	changeImage("next");
}

buttonPrev.addEventListener("click", () => {
	rewindImage();
	clearInterval(autoSlider);
});

function rewindImage() {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = amountImages;
	}
	changeImage("prev");
}

carousel.addEventListener("transitionend", () => {
	if (carousel.style.marginLeft === `-${amountImages * 100}%`) {
		currentIndex = 1;
		carousel.style.transition = "none";
		carousel.style.marginLeft = `-${currentIndex * 100}%`;
	} else if (carousel.style.marginLeft === `${0}%`) {
		currentIndex = amountImages - 1;
		carousel.style.transition = "none";
		carousel.style.marginLeft = `-${currentIndex * 100}%`;
	}
});
