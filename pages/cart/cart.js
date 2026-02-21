function updateTotals() {
  const rows = document.querySelectorAll(".cartRow");
  let subtotal = 0;
  rows.forEach((row) => {
    const priceEl = row.querySelector(".cartPrice");
    const qtyEl = row.querySelector(".qtyInput");
    const subEl = row.querySelector(".cartSubtotal");
    if (!priceEl || !qtyEl || !subEl) return;
    const price = Number(priceEl.dataset.price) || 0;
    const qty = Number(qtyEl.value) || 0;
    const sub = price * qty;
    subEl.textContent = `$${sub}`;
    subtotal += sub;
  });
  const subtotalEl = document.getElementById("subtotalAmount");
  const totalEl = document.getElementById("totalAmount");
  if (subtotalEl) subtotalEl.textContent = `$${subtotal}`;
  if (totalEl) totalEl.textContent = `$${subtotal}`;
}

document.querySelectorAll(".qtyInput").forEach((input) => input.addEventListener("input", updateTotals));
document.addEventListener("DOMContentLoaded", updateTotals);

