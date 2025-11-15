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
