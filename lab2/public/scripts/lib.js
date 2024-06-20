// Any code shared between the two pages

const indicator = document.getElementById("total-amt");

export async function updateCartAmt() {
  let res = await fetch("/cart/getAll");
  let amt = 0;
  for (const prod of await res.json()) {
    amt += parseInt(prod.amount);
  }
  if (amt > 0) {
    indicator.textContent = String(amt);
    indicator.style.display = "inline";
  } else {
    indicator.style.display = "none";
  }
}
