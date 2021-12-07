import loadHome from "./home.js";
import loadMenu from "./menu.js";

export default function initialiseWebsite() {
  const content = document.getElementById("content");

  const mainSection = document.createElement("main");

  content.appendChild(mainSection);
  content.appendChild(createHeader());
  content.appendChild(loadHome());
}

function createHeader() {
  const header = document.createElement("header");

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "The Slice is Right";
  mainHeading.classList.add("main-heading");

  header.appendChild(mainHeading);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const navElements = document.createElement("ul");
  navElements.classList.add("nav-elements");

  const hamburger = document.createElement("button");
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = "<i class='fas fa-bars'></i>";

  const links = ["Home", "Menu", "Contact"];

  for (let i = 0; i < 3; i++) {
    var navLink = document.createElement("li");
    navLink.innerHTML = "<a class='link' href='#'>" + links[i] + "</a>";

    navLink.addEventListener("click", (e) => {
      const target = e.target.textContent;
      changeSection();
      if (target === "Home") {
        loadHome();
      } else if (target === "Menu") {
        loadMenu();
      } else {
        loadContact();
      }
    });

    navElements.appendChild(navLink);
  }

  navElements.appendChild(hamburger);
  nav.appendChild(navElements);

  return nav;
}

function changeSection() {
  const main = document.querySelector("main");

  main.classList.remove("about", "menu");
  main.innerHTML = "";
}
