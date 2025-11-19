function updateTotals() {
    let rows = document.querySelectorAll(".cartRow");
    let subtotal = 0;

    rows.forEach(row => {
        let price = Number(row.querySelector(".cartPrice").dataset.price);
        let qty = Number(row.querySelector(".qtyInput").value);
        let sub = price * qty;

        row.querySelector(".cartSubtotal").textContent = "$" + sub;
        subtotal += sub;
    });

    document.getElementById("subtotalAmount").textContent = "$" + subtotal;
    document.getElementById("totalAmount").textContent = "$" + subtotal;
}

document.querySelectorAll(".qtyInput").forEach(input => {
    input.addEventListener("input", updateTotals);
});

updateTotals();

