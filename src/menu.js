import menuImage from "./pizza.png";

export default function loadMenu() {
  const menuItems = [
    "Margherita",
    "Marinara",
    "Carbonara",
    "Diavola",
    "Crudo",
    "Caprese",
    "Mediterranea",
    "Parmigiana",
    "Calzone",
    "Frutti di Mare",
  ];

  const main = document.querySelector("main");
  main.classList.add("menu");
  
  for (let i = 0; i < 10; i++) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemTitle = document.createElement("h3");
    itemTitle.textContent = menuItems[i];
    itemTitle.classList.add("item-heading");

    const itemImage = new Image();
    itemImage.src = menuImage;
    itemImage.classList.add("menu-image");

    const itemDesc = document.createElement("p");
    itemDesc.textContent = "Yum!";
    itemDesc.classList.add("item-desc");

    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemTitle);
    menuItem.appendChild(itemDesc);
    main.appendChild(menuItem);
  }
}
