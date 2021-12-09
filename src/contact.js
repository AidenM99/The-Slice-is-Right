import locationImage from "./location.png";

export default function loadContact() {
  const main = document.querySelector("main");
  main.classList.add("contact");

  const contactHeading = document.createElement("h2");
  contactHeading.classList.add("contact-heading");
  contactHeading.textContent = "Contact Us";

  const phoneInfo = document.createElement("p");
  phoneInfo.innerHTML = "<i class='fas fa-phone contact-icon'></i> 123 456 789";

  const locationInfo = document.createElement("p");
  locationInfo.innerHTML = "<i class='fas fa-utensils contact-icon'></i> 123 Imaginary St.";

  const map = new Image();
  map.src = locationImage;
  map.classList.add("location-image");

  main.appendChild(contactHeading);
  main.appendChild(phoneInfo);
  main.appendChild(locationInfo);
  main.appendChild(map);
}
