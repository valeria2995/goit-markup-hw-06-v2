const openModal = document.querySelector(".button1");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".circle");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modalshow");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modalshow");
});
