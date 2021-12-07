export default function loadHome() {
  const main = document.querySelector("main");
  main.classList.add("about")

  const subHeading = document.createElement("h2");
  subHeading.classList.add("sub-heading");
  subHeading.textContent = "About Us";

  const aboutUs = document.createElement("p");
  aboutUs.classList.add("about-us");
  aboutUs.textContent =
    "The key to progress is much similar to the key to improving a pizza - the more you put into it, the more you receive in return. return \n...";
  aboutUs.textContent +=
    "Our pizza family is as eager for flawlessness today as we were the point at which we originally opened our entryways over 40 years back.";

  main.appendChild(subHeading);
  main.appendChild(aboutUs);

  return main;
}
