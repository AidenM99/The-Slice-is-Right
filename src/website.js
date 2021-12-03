export default function createHeader() {
  const header = document.createElement("header");

  const content = document.getElementById("content");
  content.appendChild(header);

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "The Slice is Right";
  mainHeading.classList.add("main-heading");

  header.appendChild(mainHeading);
  header.appendChild(createNav());
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const navElements = document.createElement("ul");
  navElements.classList.add("nav-elements");

  const hamburger = document.createElement("button");
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = "<i class='fas fa-bars'></i>";

  const links = ["Home", "Menu", "About"];

  for (let i = 0; i < 3; i++) {
    const navLink = document.createElement("li");
    navLink.innerHTML = "<a class='link' href='#'>" + links[i] + "</a>";
    navElements.appendChild(navLink);
  }

  navElements.appendChild(hamburger);
  nav.appendChild(navElements);

  return nav;
}
