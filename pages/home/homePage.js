function redirectToDetails(productId) {
  window.location.href = `../../pages/productDetails/productDetailsPage.html`;
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".flashSalesCards");
  const leftBtn = document.querySelector(".flashSalesNavigation .navArrowLeft");
  const rightBtn = document.querySelector(".flashSalesNavigation .navArrowRight");

  const cards = Array.from(slider.querySelectorAll(".productCard"));

  cards.forEach((card) => {
    slider.appendChild(card.cloneNode(true));
    slider.insertBefore(card.cloneNode(true), slider.firstChild);
  });

  const gap = 40;
  const cardWidth = 220;
  const scrollDistance = cardWidth + gap;

  const startPosition = cards.length * scrollDistance;
  slider.scrollLeft = startPosition;

  slider.addEventListener("scroll", function () {
    const scrollLeft = slider.scrollLeft;
    const scrollWidth = slider.scrollWidth;
    const clientWidth = slider.clientWidth;
    const realCardsWidth = cards.length * scrollDistance;
    const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 50;
    const isAtStart = scrollLeft <= 50;

    if (isAtEnd) {
      slider.style.scrollBehavior = "auto";
      slider.scrollLeft = startPosition + 50;
    } else if (isAtStart) {
      slider.style.scrollBehavior = "auto";
      slider.scrollLeft = startPosition + realCardsWidth - 50;
    }
  });

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollDistance, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: scrollDistance, behavior: "smooth" });
  });
});
