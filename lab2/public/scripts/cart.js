import { updateCartAmt } from "./lib.js";

const itemsDiv = document.getElementById("items");

async function main() {
  let res = await fetch("/cart/getAll");
  let items = await res.json();

  for (const item of items) {
    let decrement = document.getElementById(`item-${item.id}-decrement`);
    let increment = document.getElementById(`item-${item.id}-increment`);

    decrement.addEventListener("click", async () => {
      let res = await fetch(`/cart/remove/${item.id}`, { method: "POST" });
      let amt = parseInt((await res.json()).amount);

      if (amt === 0) {
        let itemDiv = document.getElementById(`item-${item.id}`);
        itemsDiv.removeChild(itemDiv);
      } else {
        let amount = document.getElementById(`item-${item.id}-amount`);
        amount.textContent = String(amt);
      }

      updateCartAmt();
    });

    increment.addEventListener("click", async () => {
      let res = await fetch(`/cart/add/${item.id}`, { method: "POST" });
      let amt = parseInt((await res.json()).amount);

      let amount = document.getElementById(`item-${item.id}-amount`);
      amount.textContent = String(amt);

      updateCartAmt();
    });
  }

  updateCartAmt();
}

main();
