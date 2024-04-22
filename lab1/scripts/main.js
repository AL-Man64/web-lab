import data from "./data.js";
import { updateCartAmt } from "./lib.js";

const categories = document.getElementById("categories").querySelector("ul");

const categoryPara = document
  .getElementById("current-category")
  .querySelector("p");

const productsPanel = document.getElementById("products");

var category = data.categories[0];

function insertCategory(category) {
  const li = document.createElement("li");
  li.id = `category-${data.categories.indexOf(category)}`;
  li.className = "category";
  li.textContent = category.name;

  li.addEventListener("click", () => {
    selectCategory(category);
  });

  categories.appendChild(li);
}

function selectCategory(newCategory) {
  /** @type {HTMLImageElement} */
  let greetImage = document.getElementById("greet-image");
  greetImage.src = `images/${newCategory.image}`;

  const deselectedElement = document.getElementById(
    `category-${data.categories.indexOf(category)}`,
  );
  console.log(deselectedElement);
  deselectedElement.classList.remove("selected");

  const selectedElement = document.getElementById(
    `category-${data.categories.indexOf(newCategory)}`,
  );
  selectedElement.classList.add("selected");

  category = newCategory;

  categoryPara.innerText = newCategory.name;

  productsPanel.innerHTML = "";

  for (const product of newCategory.products) {
    insertProduct(product);
  }
}

function insertProduct(product) {
  const productDiv = document.createElement("div");
  productDiv.id = `product-${data.categories.indexOf(category)}-${category.products.indexOf(product)}`;
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

  amtInCart.textContent = sessionStorage.getItem(product.name) ?? "";
  if (sessionStorage.getItem(product.name) > 0) {
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

  productDiv.addEventListener("click", () => {
    let amt = sessionStorage.getItem(product.name);
    if (amt === null) {
      amt = 0;
    }
    amt = parseInt(amt) + 1;
    sessionStorage.setItem(product.name, amt);
    amtInCart.textContent = amt;
    amtInCart.style.display = "inline";

    updateCartAmt();
  });

  productsPanel.appendChild(productDiv);
}

function main() {
  for (const category of data.categories) {
    insertCategory(category);
  }
  selectCategory(data.categories[0]);

  updateCartAmt();
}

main();
