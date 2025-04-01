export function showModal(modalOverlay) {
  modalOverlay.style.display = "block";
  requestAnimationFrame(() => {
    modalOverlay.classList.add("show");
  });
}
  
export function closeModal(modalOverlay) {
  modalOverlay.classList.remove("show");
  setTimeout(() => {
    modalOverlay.style.display = "none";
  }, 300);
}