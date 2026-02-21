function redirectToDetails() {
  window.location.href = "../../pages/productDetails/product-details.html";
}

function runCountdown(ids, storageKey, defaultOffsetMs) {
  const els = ids.map((id) => document.getElementById(id));
  if (els.some((el) => !el)) return;
  const [daysEl, hoursEl, minutesEl, secondsEl] = els;
  let endDate;
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored) endDate = new Date(Number(stored));
    if (!stored || endDate <= new Date()) {
      endDate = new Date(Date.now() + defaultOffsetMs);
      localStorage.setItem(storageKey, String(endDate.getTime()));
    }
  } catch (_) {
    endDate = new Date(Date.now() + defaultOffsetMs);
  }
  function tick() {
    const diff = Math.max(0, endDate - new Date());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    daysEl.textContent = String(d).padStart(2, "0");
    hoursEl.textContent = String(h).padStart(2, "0");
    minutesEl.textContent = String(m).padStart(2, "0");
    secondsEl.textContent = String(s).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  runCountdown(
    ["timerDays", "timerHours", "timerMinutes", "timerSeconds"],
    "exclusiveFlashSaleEnd",
    3 * 86400000 + 23 * 3600000 + 19 * 60000 + 56000
  );
  runCountdown(
    ["bannerTimerDays", "bannerTimerHours", "bannerTimerMinutes", "bannerTimerSeconds"],
    "exclusivePromoBannerEnd",
    5 * 86400000 + 23 * 3600000 + 59 * 60000 + 35000
  );
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
