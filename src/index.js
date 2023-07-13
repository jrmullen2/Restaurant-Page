import { home } from "./Home";
import { menu } from "./menu";
import { contact } from "./contact";
import "./style.css";

const content = document.getElementById("content");
const hContainer = document.getElementById("hContainer");
const mContainer = document.getElementById("mContainer");
const cContainer = document.getElementById("cContainer");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

//default page behavior
home();
activeColor(hContainer);

homeButton.addEventListener("click", () => {
  removeChildren(content);
  home();
  colorDefault(mContainer);
  colorDefault(cContainer);
  activeColor(hContainer);
});
menuButton.addEventListener("click", () => {
  removeChildren(content);
  menu();
  colorDefault(hContainer);
  colorDefault(cContainer);
  activeColor(mContainer);
});
contactButton.addEventListener("click", () => {
  removeChildren(content);
  contact();
  colorDefault(hContainer);
  colorDefault(mContainer);
  activeColor(cContainer);
});

function removeChildren(parent) {
  while (parent.firstElementChild) {
    parent.removeChild(parent.firstElementChild);
  }
}
//sets other buttons back to original color
function colorDefault(container) {
  container.style.backgroundColor = "lavender";
  container.style.color = "black";
}
//changes active button
function activeColor(container) {
  container.style.backgroundColor = "crimson";
  container.style.color = "white";
}
