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
      label.classList.remove("is-filled");
    });
    contactLabel[index].classList.add("is-filled");
  });
});
