import { showModal, closeModal } from "./modalManager.js";
import {
  saveCurrentState,
  restorePreviousState,
  addItem,
  deleteSelectedItems,
  handleSelection,
  handleDoubleClick
} from "./listManager.js";

document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.querySelector(".item-list");

  const addBtn = document.getElementById("add-btn");
  const deleteBtn = document.getElementById("delete-btn");
  const undoBtn = document.getElementById("undo-btn");

  const modalOverlay = document.getElementById("modal-overlay");
  const modalCancel = document.getElementById("modal-cancel-btn");
  const modalAddBtn = document.getElementById("modal-add-btn");
  const modalInput = document.getElementById("modal-input");

  addBtn.addEventListener("click", () => showModal(modalOverlay));

  modalCancel.addEventListener("click", () => closeModal(modalOverlay));

  modalAddBtn.addEventListener("click", () => {
    const text = modalInput.value.trim();

    if (text !== "") {
      saveCurrentState(itemList);
      addItem(text, itemList);
      modalInput.value = "";
      closeModal(modalOverlay);
    } else {
      alert("Please enter some text.");
    }
  });

  deleteBtn.addEventListener("click", () => {
    saveCurrentState(itemList);
    deleteSelectedItems(itemList);
  });

  undoBtn.addEventListener("click", () => restorePreviousState(itemList));

  itemList.addEventListener("click", handleSelection);

  itemList.addEventListener("dblclick", (event) => {
    saveCurrentState(itemList);
    handleDoubleClick(event, itemList);
  });
});