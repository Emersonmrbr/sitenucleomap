contactInput.forEach((input, index) => {
  input.addEventListener("blur", function () {
    contactLabel.forEach((label) => {
      // label.classList.remove("is-filled");
    });
    const labelOnce = document.querySelector(`label[for="${input.name}"]`);
    if (input.value) {
      labelOnce.classList.add("is-filled");
    } else {
      labelOnce.classList.remove("is-filled");
    }
  });
});
