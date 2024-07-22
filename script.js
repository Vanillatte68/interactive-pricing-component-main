// get variables
const sliderEl = document.getElementById("slider");
const price = document.getElementsByClassName("price");
const views = document.getElementById("views");
const billing = document.getElementsByClassName("price-label");
const toggle = document.getElementById("switch");
const priceMark = document.querySelectorAll("option");

// slider variables
const sliderStep = (sliderEl.max - sliderEl.min) / 4;
const priceList = [8, 12, 16, 24, 36];
const viewsList = ["10K", "50K", "100K", "500K", "1M"];

sliderEl.addEventListener("input", (event) => {
  const sliderValue = event.target.value;
  const sliderProgress = (sliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${sliderProgress}%, hsl(224, 65%, 95%) ${sliderProgress}%)`;

  views.textContent = viewsList[sliderValue / sliderStep];

  for (let i = 0; i < 2; i++) {
    if (toggle.checked === true) {
      price.item(i).textContent = `$${
        priceList[sliderValue / sliderStep] * 0.75
      }.00`;
      billing.item(i).textContent = "/ year";
    } else {
      price.item(i).textContent = `$${priceList[sliderValue / sliderStep]}.00`;
      billing.item(i).textContent = "/ month";
    }
  }
});

toggle.addEventListener("change", () => {
  for (let i = 0; i < 2; i++) {
    if (toggle.checked === true) {
      price.item(i).textContent = `$${
        priceList[sliderEl.value / sliderStep] * 0.75
      }.00`;
      billing.item(i).textContent = "/ year";
    } else {
      price.item(i).textContent = `$${
        priceList[sliderEl.value / sliderStep]
      }.00`;
      billing.item(i).textContent = "/ month";
    }
  }
});
