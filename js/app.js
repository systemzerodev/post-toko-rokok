const productCards = document.querySelectorAll(".product-card");

const modalOverlay = document.querySelector(".modal-overlay");

const modalProductName = document.querySelector(".modal-product-name");

const cancelBtn = document.querySelector(".cancel-btn");

// buka modal saat produk diklik
productCards.forEach((card) => {
  card.addEventListener("click", () => {
    const productName = card.dataset.name;

    modalProductName.textContent = productName;

    modalOverlay.classList.add("show");
  });
});

// tutup modal
cancelBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("show");
});
