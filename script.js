//const btnShowModal = document.querySelectorAll(".show-modal");
const btnShowModal = document.querySelectorAll("#botones");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

console.log(btnShowModal);
console.log(modal);
console.log(btnCloseModal);
console.log(overlay);

const openModal = function (e) {
  console.log(e, e.target);
  if (e.target.classList.contains("show-modal")) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
};

btnShowModal.forEach((btn) => btn.addEventListener("click", openModal));

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
  event.stopPropagation();
});
