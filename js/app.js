const productCards = document.querySelectorAll(".product-card");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

productCards.forEach((card) => {
  card.addEventListener("click", () => {
    modalOverlay.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("show");
});
