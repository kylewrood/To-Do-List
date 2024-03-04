//select all elements
const form = document.querySelector("#item-form");
const input = document.querySelector("#input-item");
const list = document.querySelector("#todoList");

//change the default setting of the button
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //create items
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("input-item");

  //add item to the list
  list.appendChild(item);

  //clear input box when the button is clicked
  input.value = "";

  // delete items from list when selected
  item.addEventListener("click", (e) => {
    item.remove();
  });
});
