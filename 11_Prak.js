let itemsArray = [
  { name: "Материнская плата", quantity: 1, price: 100 },
  { name: "Процессор", quantity: 1, price: 200 },
  { name: "Видеокарта", quantity: 1, price: 300 },
  { name: "Оперативная память", quantity: 1, price: 50 },
];

function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  const itemSelect = document.getElementById("item-select");

  cartItemsElement.innerHTML = "";
  itemSelect.innerHTML = "";

  itemsArray.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} (Количество: ${
      item.quantity
    }, Стоимость: ${(item.quantity * item.price).toFixed(2)} руб.)`;
    cartItemsElement.appendChild(listItem);

    const option = document.createElement("option");
    option.value = index;
    option.textContent = item.name;
    itemSelect.appendChild(option);
  });
}

function changeItem() {
  const itemSelect = document.getElementById("item-select");
  const newValueInput = document.getElementById("new-value");
  const quantityInput = document.getElementById("quantity");

  const selectedIndex = itemSelect.value;
  const newValue = newValueInput.value;
  const newQuantity = parseInt(quantityInput.value);

  if (
    selectedIndex !== "" &&
    newValue !== "" &&
    !isNaN(newQuantity) &&
    newQuantity > 0
  ) {
    itemsArray[selectedIndex].name = newValue;
    itemsArray[selectedIndex].quantity = newQuantity;
    updateCart();
  }
}

function deleteItem() {
  const itemSelect = document.getElementById("item-select");
  const selectedIndex = itemSelect.value;

  if (selectedIndex !== "") {
    itemsArray.splice(selectedIndex, 1);
    updateCart();
  }
}

function clearCart() {
  itemsArray = [];
  updateCart();
}

function addItem() {
  const newItemInput = document.getElementById("add-new-item");
  const newQuantityInput = document.getElementById("new-item-quantity");
  const newPriceInput = document.getElementById("new-item-price");

  const newItemValue = newItemInput.value;
  const newQuantity = parseInt(newQuantityInput.value);
  const newPrice = parseFloat(newPriceInput.value);

  if (
    newItemValue !== "" &&
    !isNaN(newQuantity) &&
    newQuantity > 0 &&
    !isNaN(newPrice) &&
    newPrice >= 0
  ) {
    itemsArray.push({
      name: newItemValue,
      quantity: newQuantity,
      price: newPrice,
    });
    newItemInput.value = "";
    newQuantityInput.value = "1";
    newPriceInput.value = "0.00";
    updateCart();
  }
}

function sortAscending() {
  itemsArray.sort((a, b) => a.price * a.quantity - b.price * b.quantity);
  updateCart();
}

function sortDescending() {
  itemsArray.sort((a, b) => b.price * b.quantity - a.price * a.quantity);
  updateCart();
}

updateCart();
