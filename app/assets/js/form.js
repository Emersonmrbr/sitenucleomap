// contactInput.forEach((input) => {
//   input.addEventListener("blur", function(){
//   contactLabel.forEach((label) => {
//     label.classList.remove("is-filled");
//     if (label.htmlFor === input.id) {
//       element.classList.add("is-filled");
//     }
//     console.log(element);
//   });
// });
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
