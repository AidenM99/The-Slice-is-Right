export default function loadContact() {
  const main = document.querySelector("main");
  main.classList.add("contact");

  const contactHeading = document.createElement("h2");
  contactHeading.classList.add("contact-heading");
  contactHeading.textContent = "Contact Us";

  main.appendChild(contactHeading);
}
