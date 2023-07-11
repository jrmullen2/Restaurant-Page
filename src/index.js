import { home } from "./Home";
import { menu } from "./menu";
import { contact } from "./contact";
import "./style.css";

const content = document.getElementById("content");
const top = document.createElement("div");
top.id = "top";
const homeButton = document.createElement("button");
const menuButton = document.createElement("button");
const contactButton = document.createElement("button");

homeButton.textContent = "Home";
menuButton.textContent = "Menu";
contactButton.textContent = "Contact";

home();
homeButton.addEventListener("click", () => {
  removeChildren(content);
  home();
});
menuButton.addEventListener("click", () => {
  removeChildren(content);
  menu();
});
contactButton.addEventListener("click", () => {
  removeChildren(content);
  contact();
});

top.appendChild(homeButton);
top.appendChild(menuButton);
top.appendChild(contactButton);
document.body.insertAdjacentElement("afterbegin", top);

function removeChildren(parent) {
  while (parent.firstElementChild) {
    parent.removeChild(parent.firstElementChild);
  }
}
//Make home the default display for content and make sure top is on top of content
