import loadMenu from "./menu.js";
import changeSection from "./index.js";

export default function loadHome() {
  const main = document.querySelector("main");
  main.classList.add("home");

  const subHeading = document.createElement("h2");
  subHeading.classList.add("sub-heading");
  subHeading.textContent = "Quality Pizza. Affordable Prices.";

  const dateText = document.createElement("p");
  dateText.classList.add("date-text");
  dateText.textContent = "Made with Passion Since 1901.";

  const orderButton = document.createElement("button");
  orderButton.classList.add("order-button");
  orderButton.textContent = "Order Now!";
  orderButton.addEventListener("click", function () {
    changeSection();
    loadMenu();
  });

  main.appendChild(subHeading);
  main.appendChild(dateText);
  main.appendChild(orderButton);

  return main;
}
