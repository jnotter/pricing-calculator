const options = document.getElementsByClassName("question-option");

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", addOptions);
}

function addOptions() {
  const question = document.querySelector(".pricing-calc--question");
  question.insertAdjacentHTML(
    "afterend",
    `<div class="pricing-calc--question">
  <div class="question--heading">
    <h1>1. How much of your condo needs painting?</h1>
  </div>
  <div class="question-options__wrapper">
    <div class="question-option">
      <p>1 Bedroom</p>
    </div>
    <div class="question-option">
      <p>2 Bedroom</p>
    </div>
  </div>`
  );
}
