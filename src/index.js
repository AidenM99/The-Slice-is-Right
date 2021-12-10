import "./style.css";
import initialiseWebsite from "./website.js";

export default function changeSection() {
  const main = document.querySelector("main");

  main.classList.remove("home", "menu", "contact");
  main.innerHTML = "";
}

initialiseWebsite();
