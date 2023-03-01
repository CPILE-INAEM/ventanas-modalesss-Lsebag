const btnShowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

console.log(btnShowModal);
console.log(modal);
console.log(btnCloseModal);
console.log(overlay);

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btnShowModal.forEach((btn) => btn.addEventListener("click", openModal));
