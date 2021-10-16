const options = document.getElementsByClassName("question--option");
const condoSizes = document.getElementById("condoSizes");
const slider = document.getElementById("slider");
const sliderWrapper = document.getElementById("sliderWrapper");
const paintOptions = document.getElementById("paintOptions");

function activateSlider() {
  slider.classList.remove("disabled");
  slider.removeAttribute("disabled");
}

const removeSelectedOption = (parentEl) => {
  [...parentEl.children].forEach((option) => {
    option.addEventListener("click", () => {
      [...parentEl.children].forEach((e) => {
        e.classList.remove("question--option__selected");
      });
      option.classList.add("question--option__selected");
      parentEl.parentElement.nextElementSibling.classList.remove("hide");
    });
  });
};

condoSizes.addEventListener("click", activateSlider);

removeSelectedOption(paintOptions);
removeSelectedOption(condoSizes);

// [...paintOptions.children].forEach((option) => {
//   option.addEventListener("click", () => {
//     [...paintOptions.children].forEach((e) => {
//       e.classList.remove("question--option__selected");
//     });
//     option.classList.add("question--option__selected");
//   });
// });

// paintOptions.addEventListener(
//   "click",
//   console.log(paintOptions.children[0].classList)
// );
// for (let i = 0; i < options.length; i++) {
//   options[i].addEventListener("click", (e) => {
//     console.log(e.parentNode);
//     const parentEl = e.target.parentNode;
//     const parentElChildren = parentEl.children;
//     console.log(parentElChildren);
//     removeClass(parentElChildren);
//     options[i].classList.add("question--option__selected");
//   });
// }

// function addOptions() {
//   const question = document.querySelector(".pricing-calc--question");
//   question.insertAdjacentHTML(
//     "afterend",
//     `<div class="pricing-calc--question">
//   <div class="question--heading">
//     <h1>1. How much of your condo needs painting?</h1>
//   </div>
//   <div class="question-options__wrapper">
//     <div class="question-option">
//       <p>1 Bedroom</p>
//     </div>
//     <div class="question-option">
//       <p>2 Bedroom</p>
//     </div>
//   </div>`
//   );
// }
