import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import changeSection from "./index.js";

export default function initialiseWebsite() {
  const content = document.getElementById("content");

  const mainSection = document.createElement("main");

  content.appendChild(mainSection);
  content.appendChild(loadHeader());
  content.appendChild(loadHome());
  content.appendChild(loadFooter());
}

function loadHeader() {
  const header = document.createElement("header");

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "The Slice is Right";
  mainHeading.classList.add("main-heading");

  header.appendChild(mainHeading);
  header.appendChild(loadNav());

  return header;
}

function loadNav() {
  const nav = document.createElement("nav");
  nav.classList.add("navbar");

  const navElements = document.createElement("ul");
  navElements.classList.add("nav-elements");

  const links = ["Home", "Menu", "Contact"];

  for (let i = 0; i < 3; i++) {
    const navLink = document.createElement("li");
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

  nav.appendChild(navElements);

  return nav;
}

function loadFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerIcons = document.createElement("div");
  footerIcons.classList.add("footer-icons");
  footerIcons.innerHTML =
    "<i class='fab fa-facebook-square fa-lg'></i><i class='fab fa-twitter-square fa-lg'></i><i class='fab fa-instagram-square fa-lg'></i>";

  const followUs = document.createElement("h3");
  followUs.classList.add("follow-us");
  followUs.textContent = "Follow Us:";

  footer.appendChild(followUs);
  footer.appendChild(footerIcons);

  return footer;
}
