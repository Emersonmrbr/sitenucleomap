carousel.style.transition = "none";

function createSlideClone() {
  const firstSlide = images[0].cloneNode(true);
  firstSlide.classList.add("slide-cloned");
  const lastSlide = images[images.length - 1].cloneNode(true);
  lastSlide.classList.add("slide-cloned");
  galleryWrapper.append(firstSlide);
  galleryWrapper.prepend(lastSlide);
}
function imageMove() {
  carousel.style.marginLeft = `-${currentIndex * 100}%`;
}
imageMove();
const autoSlider = setInterval(function () {
  advanceImage();
}, 5000);

function changeImage(direction) {
  carousel.style.transition = "all 450ms ease-in";
  if (direction === "next") {
    imageMove();
  } else if (direction === "prev") {
    imageMove();
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
    imageMove();
  } else if (carousel.style.marginLeft === `${0}%`) {
    currentIndex = amountImages - 1;
    carousel.style.transition = "none";
    imageMove();
  }
});
createSlideClone();
