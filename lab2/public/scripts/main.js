import { updateCartAmt } from "./lib.js";

const categoryPara = document
  .getElementById("current-category")
  .querySelector("p");

const productsPanel = document.getElementById("products");

let currentCategory;

async function selectCategory(catId) {
  let res = await fetch(`/home/getCategories/${catId}`);
  let cat = await res.json();

  let greetImage = document.getElementById("greet-image");
  greetImage.src = `images/${cat.image}`;

  const deselectedElement = document.getElementById(
    `category-${currentCategory}`,
  );
  deselectedElement.classList.remove("selected");

  const selectedElement = document.getElementById(`category-${catId}`);
  selectedElement.classList.add("selected");

  currentCategory = catId;

  categoryPara.innerText = cat.name;

  productsPanel.innerHTML = "";

  for (const product of cat.products) {
    insertProduct(product);
  }
}

async function insertProduct(product) {
  const productDiv = document.createElement("div");
  productDiv.id = `product-${product.id}`;
  productDiv.className = "product";

  const img = document.createElement("img");
  img.src = `images/${product.image}`;
  img.alt = product.name;
  img.id = `${productDiv.id}-image`;
  img.className = "product-image";

  const cartImg = document.createElement("img");
  cartImg.src = "images/cart.png";
  cartImg.alt = "cart";
  cartImg.id = `${productDiv.id}-cart-image`;
  cartImg.className = "product-cart-image";
  cartImg.height = 32;

  const amtInCart = document.createElement("div");
  amtInCart.id = `${productDiv.id}-amt`;
  amtInCart.className = "product-amt";

  let res = await fetch(`/cart/get/${product.id}`);
  let amt = (await res.json()).amount;

  amtInCart.textContent = amt;

  if (parseInt(amt) > 0) {
    amtInCart.style.display = "inline";
  }

  productDiv.appendChild(img);
  productDiv.appendChild(document.createTextNode(product.name));
  productDiv.appendChild(cartImg);
  productDiv.appendChild(amtInCart);

  productDiv.addEventListener("mouseenter", () => {
    cartImg.style.display = "inline";
  });

  productDiv.addEventListener("mouseleave", () => {
    cartImg.style.display = "none";
  });

  productDiv.addEventListener("click", async () => {
    let res = await fetch(`/cart/add/${product.id}`, { method: "POST" });
    if (res.status === 500) {
      window.location.replace("/sessionExpired");
    }

    res = await fetch(`cart/get/${product.id}`);
    let amt = parseInt((await res.json()).amount);

    amtInCart.textContent = String(amt);
    amtInCart.style.display = "inline";

    updateCartAmt();
  });

  productsPanel.appendChild(productDiv);
}

async function main() {
  let res = await fetch("/home/getCategories");

  for (const cat of await res.json()) {
    const li = document.getElementById(`category-${cat.id}`);
    li.addEventListener("click", () => {
      selectCategory(cat.id);
    });
  }
  updateCartAmt();
  currentCategory = 0;
  selectCategory(currentCategory);
}

main();
