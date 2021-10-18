const options = document.getElementsByClassName("question--option");
const condoSizes = document.getElementById("condoSizes");
const slider = document.getElementById("slider");
const rangeValue = document.getElementById("rangeValue");
const paintOptions = document.getElementById("paintOptions");
const wholeCondo = document.getElementById("wholeCondoOption");
const singleRooms = document.getElementById("singleRoomOption");
const estimate = document.querySelector("#estimate > span");
const colorChangePrice = document.getElementById("colorChangePrice");
const refreshRadio = document.getElementById("colorRefresh");
const refreshPrice = document.getElementById("refreshPrice");
const radioInputs = document.querySelectorAll('input[type="radio"]');
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
const wholeCondoAnswers = {
  condoRooms: "",
  condoSize: 10,

  colorPicking: "",
};

const estimateCalc = () => {
  // const { condoSize, paintJob, colorPicking } = wholeCondoAnswers;
  // const estimateCal = parseFloat(condoSize) * 10;
  // estimate.innerHTML = estimateCal;
  let total = 0;
  refreshRadio.value = slider.value * 2;
  let checkedInputs = [];
  radioInputs.forEach((input) => {
    if (input.checked) {
      checkedInputs.push(parseFloat(input.value));
    }
  });
  checkboxInputs.forEach((input) => {
    if (input.checked) {
      checkedInputs.push(parseFloat(input.value));
    }
  });
  if (refreshRadio.checked) {
    total = refreshPrice.innerHTML;
  }
  // elseif();
  estimate.innerHTML = checkedInputs.reduce((total, value) => {
    return total + value;
  });
  console.log(checkedInputs);
};

function activateSlider() {
  slider.classList.remove("disabled");
  slider.removeAttribute("disabled");
}

function sliderSquareFootage(x, y) {
  slider.value = x;
  rangeValue.value = x;
  wholeCondoAnswers.condoSize = x;
  const sliderPercent = (x / 3500) * 100;
  slider.style.background = `linear-gradient(
    90deg,
    rgba(222, 204, 47, 1) ${sliderPercent}%,
    rgba(43, 43, 43, 1) ${sliderPercent}%
  )`;
  showNextQuestion(y);
}

function changeSliderColor() {
  const sliderPercent = (slider.value / 3500) * 100;
  slider.style.background = `linear-gradient(
    90deg,
    rgba(222, 204, 47, 1) ${sliderPercent}%,
    rgba(43, 43, 43, 1) ${sliderPercent}%
  )`;
  rangeValue.value = slider.value;
  refreshPrice.innerHTML = `$${slider.value * 2}.00`;
  colorChangePrice.innerHTML = `$${slider.value * 1.5}.00`;
  estimateCalc();
}

const showNextQuestion = (e) => {
  const priceCalc = e.closest(".pricing-calc--question");
  priceCalc.nextElementSibling.classList.remove("hide");
  wholeCondoAnswers[e.name] = e.value;
};

function showWholeCondoOptions() {
  singleRooms.classList.add("hide");
  wholeCondo.classList.remove("hide");
}

function showSingleRoomsOptions() {
  wholeCondo.classList.add("hide");
  singleRooms.classList.remove("hide");
}

const removeSelectedOption = (parentEl) => {
  [...parentEl.children].forEach((option) => {
    option.addEventListener("click", () => {
      [...parentEl.children].forEach((e) => {
        e.classList.remove("question--option__selected");
      });
      option.classList.add("question--option__selected");
    });
  });
};

radioInputs.forEach((input) => {
  input.addEventListener("input", handleRadioInputs);
});

function handleRadioInputs(e) {
  console.log(e.target);
  estimate.classList.remove("hide");
  estimateCalc();
}

condoSizes.addEventListener("click", activateSlider);

removeSelectedOption(paintOptions);
removeSelectedOption(condoSizes);
