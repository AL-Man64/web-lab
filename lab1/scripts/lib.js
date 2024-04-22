// Any code shared between the two pages

/** @type {HTMLElement} */
const indicator = document.getElementById("total-amt");

export function updateCartAmt() {
  let amt = 0;
  for (let i = 0; sessionStorage.key(i) !== null; i++) {
    amt += parseInt(sessionStorage.getItem(sessionStorage.key(i)));
  }

  if (amt > 0) {
    indicator.textContent = amt;
    indicator.style.display = "inline";
  } else {
    indicator.style.display = "none";
  }
}
