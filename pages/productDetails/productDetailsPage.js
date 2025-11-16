const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const quantityInput = document.getElementById("quantityInput");
const quantityControls = document.getElementsByClassName("quantity-controls");

plusBtn.addEventListener("click", () => {
  let currentVlaue = parseInt(quantityInput.value);
  if (currentVlaue < parseInt(quantityInput.max)) {
    quantityInput.value = currentVlaue + 1;
  }
  plusBtn.style.backgroundColor = "#db4444";
  plusBtn.style.color = "white";
  minusBtn.style.backgroundColor = "white";
  minusBtn.style.color = "black";
});

minusBtn.addEventListener("click", () => {
  let currentVlaue = parseInt(quantityInput.value);
  if (currentVlaue > parseInt(quantityInput.min)) {
    quantityInput.value = currentVlaue - 1;
  }
  minusBtn.style.backgroundColor = "#db4444";
  minusBtn.style.color = "white";
  plusBtn.style.backgroundColor = "white";
  plusBtn.style.color = "black";
});

const mainImage = document.querySelector(".mainImage");
const fullView = document.querySelector(".fullView img");
const rightSideAngle = document.querySelector(".rightSideAngle img");
const extendedView = document.querySelector(".extendedView img");
const sideView = document.querySelector(".sideView img");
const changeImage = (thumb) => {
  const oldSource = mainImage.src;
  mainImage.src = thumb.src;
  thumb.src = oldSource;
};

fullView.addEventListener("click", () => changeImage(fullView));
rightSideAngle.addEventListener("click", () => changeImage(rightSideAngle));
extendedView.addEventListener("click", () => changeImage(extendedView));
sideView.addEventListener("click", () => changeImage(sideView));
