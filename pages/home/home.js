function redirectToDetails(productId) {
  window.location.href = `../../pages/productDetails/product-details.html`;
}

document.addEventListener("DOMContentLoaded", function () {
  const daysEl = document.getElementById("timerDays");
  const hoursEl = document.getElementById("timerHours");
  const minutesEl = document.getElementById("timerMinutes");
  const secondsEl = document.getElementById("timerSeconds");
  if (daysEl && hoursEl && minutesEl && secondsEl) {
    var storageKey = "exclusiveFlashSaleEnd";
    var endDate;
    try {
      var stored = localStorage.getItem(storageKey);
      if (stored) endDate = new Date(Number(stored));
      if (!stored || endDate <= new Date()) {
        endDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 19 * 60 * 1000 + 56 * 1000);
        localStorage.setItem(storageKey, String(endDate.getTime()));
      }
    } catch (e) {
      endDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 19 * 60 * 1000 + 56 * 1000);
    }
    function updateCountdown() {
      var now = new Date();
      var diff = Math.max(0, endDate - now);
      var d = Math.floor(diff / (24 * 60 * 60 * 1000));
      var h = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      var m = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      var s = Math.floor((diff % (60 * 1000)) / 1000);
      daysEl.textContent = String(d).padStart(2, "0");
      hoursEl.textContent = String(h).padStart(2, "0");
      minutesEl.textContent = String(m).padStart(2, "0");
      secondsEl.textContent = String(s).padStart(2, "0");
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".flashSalesCards");
  const leftBtn = document.querySelector(".flashSalesNavigation .navArrowLeft");
  const rightBtn = document.querySelector(".flashSalesNavigation .navArrowRight");

  if (!slider || !leftBtn || !rightBtn) return;

  const gap = 32;
  const cardWidth = 280;
  const scrollDistance = cardWidth + gap;

  const originalCards = Array.from(slider.querySelectorAll(".productCard"));
  const setLength = originalCards.length;
  if (setLength === 0) return;

  const fragmentStart = document.createDocumentFragment();
  const fragmentEnd = document.createDocumentFragment();
  originalCards.forEach((card) => {
    fragmentStart.appendChild(card.cloneNode(true));
    fragmentEnd.appendChild(card.cloneNode(true));
  });
  slider.insertBefore(fragmentStart, slider.firstChild);
  slider.appendChild(fragmentEnd);

  const oneSetWidth = setLength * scrollDistance;
  const totalWidth = oneSetWidth * 3;

  slider.style.scrollBehavior = "auto";
  slider.scrollLeft = oneSetWidth;
  slider.style.scrollBehavior = "";

  const threshold = 80;

  function checkInfiniteScroll() {
    const scrollLeft = slider.scrollLeft;
    if (scrollLeft >= oneSetWidth * 2 - threshold) {
      slider.style.scrollBehavior = "auto";
      slider.scrollLeft = scrollLeft - oneSetWidth;
      requestAnimationFrame(() => {
        slider.style.scrollBehavior = "";
      });
    }
    else if (scrollLeft <= threshold) {
      slider.style.scrollBehavior = "auto";
      slider.scrollLeft = scrollLeft + oneSetWidth;
      requestAnimationFrame(() => {
        slider.style.scrollBehavior = "";
      });
    }
  }

  let scrollEndTimer;
  slider.addEventListener("scroll", () => {
    clearTimeout(scrollEndTimer);
    scrollEndTimer = setTimeout(checkInfiniteScroll, 50);
  }, { passive: true });

  leftBtn.addEventListener("click", () => {
    slider.style.scrollBehavior = "smooth";
    slider.scrollBy({ left: -scrollDistance, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    slider.style.scrollBehavior = "smooth";
    slider.scrollBy({ left: scrollDistance, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const categoryContainer = document.querySelector(".browseCategorySection .categoryCardsContainer");
  const categoryLeft = document.querySelector(".browseCategorySection .navArrowLeft");
  const categoryRight = document.querySelector(".browseCategorySection .navArrowRight");
  if (!categoryContainer || !categoryLeft || !categoryRight) return;
  const categoryScroll = 320;
  categoryLeft.addEventListener("click", () => {
    categoryContainer.scrollBy({ left: -categoryScroll, behavior: "smooth" });
  });
  categoryRight.addEventListener("click", () => {
    categoryContainer.scrollBy({ left: categoryScroll, behavior: "smooth" });
  });
});
