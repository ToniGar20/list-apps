let previousState = [];

export function saveCurrentState(itemList) {
  const items = itemList.querySelectorAll("li");
  previousState = Array.from(items).map(item => item.textContent);
}

export function restorePreviousState(itemList) {
  itemList.innerHTML = "";
  previousState.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    itemList.appendChild(li);
  });
}

export function addItem(text, itemList) {
  const li = document.createElement("li");
  li.textContent = text;
  itemList.appendChild(li);
}

export function deleteSelectedItems(itemList) {
  const selectedItems = itemList.querySelectorAll("li.selected");

  if (selectedItems.length === 0) {
    alert("Select an item to delete.");
    return;
  }

  selectedItems.forEach(item => item.remove());
}

export function handleSelection(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("selected");
  }
}

export function handleDoubleClick(event, itemList) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
}