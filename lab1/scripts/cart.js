import { updateCartAmt } from "./lib.js";

const items = document.getElementById("items");

function insertItem(name, amt) {
  const item = document.createElement("div");
  item.id = name;
  item.className = "item";

  const itemName = document.createElement("p");
  itemName.className = "item-name";
  itemName.textContent = name;

  const buttons = document.createElement("div");
  buttons.id = `${name} buttons`;
  buttons.className = "item-buttons";

  const amount = document.createElement("span");
  amount.id = `${name} amount`;
  amount.className = "amount";
  amount.textContent = amt;

  const decrement = document.createElement("button");
  decrement.id = `${name} decrement`;
  decrement.className = "item-button";
  decrement.type = "button";
  decrement.textContent = "-";

  decrement.addEventListener("click", () => {
    const amt = parseInt(sessionStorage.getItem(name));
    if (amt === null || amt <= 1) {
      sessionStorage.setItem(name, 0);
      items.removeChild(item);
    } else {
      sessionStorage.setItem(name, amt - 1);
      amount.textContent = amt - 1;
    }

    updateCartAmt();
  });

  /** @type {HTMLButtonElement} */
  const increment = document.createElement("button");
  increment.id = `${name} increment`;
  increment.className = "item-button";
  increment.type = "button";
  increment.textContent = "+";

  increment.addEventListener("click", () => {
    const amt = parseInt(sessionStorage.getItem(name));
    if (amt === null) {
      items.removeChild(item);
    } else {
      sessionStorage.setItem(name, amt + 1);
      amount.textContent = amt + 1;
    }
  });

  buttons.appendChild(decrement);
  buttons.appendChild(amount);
  buttons.appendChild(increment);

  item.appendChild(itemName);
  item.appendChild(buttons);

  items.appendChild(item);
}

function main() {
  for (let i = 0; sessionStorage.key(i) !== null; i++) {
    const itemName = sessionStorage.key(i);
    const amt = sessionStorage.getItem(itemName);
    if (amt > 0) {
      insertItem(itemName, amt);
    }
  }

  updateCartAmt();
}

main();
