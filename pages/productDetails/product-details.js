const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const quantityInput = document.getElementById("quantityInput");

function updateQtyDisplay() {
  const val = parseInt(quantityInput.value, 10);
  const max = parseInt(quantityInput.max, 10);
  const min = parseInt(quantityInput.min, 10);
  plusBtn.classList.toggle("qtyActive", val < max);
  minusBtn.classList.toggle("qtyActive", val > min);
}

if (plusBtn && quantityInput) {
  plusBtn.addEventListener("click", () => {
    const current = parseInt(quantityInput.value, 10);
    const max = parseInt(quantityInput.max, 10);
    if (current < max) quantityInput.value = current + 1;
    updateQtyDisplay();
  });
}
if (minusBtn && quantityInput) {
  minusBtn.addEventListener("click", () => {
    const current = parseInt(quantityInput.value, 10);
    const min = parseInt(quantityInput.min, 10);
    if (current > min) quantityInput.value = current - 1;
    updateQtyDisplay();
  });
}
if (quantityInput) quantityInput.addEventListener("input", updateQtyDisplay);

function initProductGallery() {
  const mainImage = document.querySelector(".mainImage");
  const fullView = document.querySelector(".fullView img");
  const rightSideAngle = document.querySelector(".rightSideAngle img");
  const extendedView = document.querySelector(".extendedView img");
  const sideView = document.querySelector(".sideView img");
  const lightbox = document.getElementById("productLightbox");
  const lightboxImg = document.querySelector(".productLightboxImage");
  const lightboxBackdrop = document.querySelector(".productLightboxBackdrop");
  const lightboxClose = document.querySelector(".productLightboxClose");

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "Product image";
    lightbox.hidden = false;
    if (lightboxClose) lightboxClose.focus();
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    document.body.style.overflow = "";
  }

  function changeImage(thumb) {
    if (!mainImage || !thumb) return;
    const prev = mainImage.src;
    mainImage.src = thumb.src;
    thumb.src = prev;
  }

  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && !lightbox.hidden) closeLightbox();
  });

  [fullView, rightSideAngle, extendedView, sideView].forEach((el) => {
    if (el) el.addEventListener("click", () => { changeImage(el); openLightbox(el.src, el.alt); });
  });

  const frontView = document.querySelector(".frontView");
  if (frontView && mainImage) frontView.addEventListener("click", () => openLightbox(mainImage.src, mainImage.alt));
}

document.addEventListener("DOMContentLoaded", () => {
  updateQtyDisplay();
  initProductGallery();
});
