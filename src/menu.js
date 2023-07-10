const content = document.getElementById("content");
const menuTitle = document.createElement("div");

const beverages = document.createElement("div");
const beverageTitle = document.createElement("h2");
const beverage1 = document.createElement("div");
const b1Name = document.createElement("h3");
const b1Descrip = document.createElement("p");
const b1Price = document.createElement("p");
const b1Image = document.createElement("img");
const beverage2 = document.createElement("div");
const b2Name = document.createElement("h3");
const b2Descrip = document.createElement("p");
const b2Price = document.createElement("p");
const b2Image = document.createElement("img");

const sides = document.createElement("div");
const sideTitle = document.createElement("h2");
const side1 = document.createElement("div");
const s1Name = document.createElement("h3");
const s1Descrip = document.createElement("p");
const s1Price = document.createElement("p");
const s1Image = document.createElement("img");
const side2 = document.createElement("div");
const s2Name = document.createElement("h3");
const s2Descrip = document.createElement("p");
const s2Price = document.createElement("p");
const s2Image = document.createElement("img");

const entrées = document.createElement("div");
const entréeTitle = document.createElement("h2");
const entrée1 = document.createElement("div");
const e1Name = document.createElement("h3");
const e1Descrip = document.createElement("p");
const e1Price = document.createElement("p");
const e1Image = document.createElement("img");
const entrée2 = document.createElement("div");
const e2Name = document.createElement("h3");
const e2Descrip = document.createElement("p");
const e2Price = document.createElement("p");
const e2Image = document.createElement("img");
const entrée3 = document.createElement("div");
const e3Name = document.createElement("h3");
const e3Descrip = document.createElement("p");
const e3Price = document.createElement("p");
const e3Image = document.createElement("img");
const entrée4 = document.createElement("div");
const e4Name = document.createElement("h3");
const e4Descrip = document.createElement("p");
const e4Price = document.createElement("p");
const e4Image = document.createElement("img");
const entrée5 = document.createElement("div");
const e5Name = document.createElement("h3");
const e5Descrip = document.createElement("p");
const e5Price = document.createElement("p");
const e5Image = document.createElement("img");
const entrée6 = document.createElement("div");
const e6Name = document.createElement("h3");
const e6Descrip = document.createElement("p");
const e6Price = document.createElement("p");
const e6Image = document.createElement("img");
const entrée7 = document.createElement("div");
const e7Name = document.createElement("h3");
const e7Descrip = document.createElement("p");
const e7Price = document.createElement("p");
const e7Image = document.createElement("img");
const entrée8 = document.createElement("div");
const e8Name = document.createElement("h3");
const e8Descrip = document.createElement("p");
const e8Price = document.createElement("p");
const e8Image = document.createElement("img");

b1Name.textContent = "Potion Madness";
b1Descrip.textContent =
  "A delectable, warm drink said to be made by wizards. It is said that one sip pf this potion will bring a smile to your face.";
b1Price.textContent = "$3.99";
b1Image.src = "images/cape.jpg";
b1Image.alt = "Potion Madness";
b2Name.textContent = "Goblins' Goblet";
b2Descrip.textContent =
  "A small goblet filled with a refreshing, fruity drink that is usually a delicacy among goblins.";
b2Price.textContent = "$4.29";
b2Image.src = "images/goblet.jpg";
b2Image.alt = "Goblins' Goblet";
s1Name.textContent = "Peasant Bread";
s1Descrip.textContent =
  "Bread that is made by peasants, but so delicious that is considered food for the gods.";
s1Price.textContent = "$1.99";
s1Image.src = "images/bread.jpg";
s1Image.alt = "Peasant Bread";
s2Name.textContent = "Priviledged Oats";
s2Descrip.textContent =
  "Oats typically eaten by nobles, but through a little magic is now available to all!";
s2Price.textContent = "$1.99";
s2Image.src = "images/oats.jpg";
s2Image.alt = "Privileged Oats";
e1Name.textContent = "Elfen Croissant";
e1Descrip.textContent =
  "Two sweet, warm croissant filled with cream cheese and top with powdered sugar. Served with a drink of your choice.";
e1Price.textContent = "$8.99";
e1Image.src = "images/croissant.jpg";
e1Image.alt = "Elfen Croissant";
e2Name.textContent = "Orcs' Platter";
e2Descrip.textContent =
  "Eggs, 3 sausage, 3 slices of bacon, and 3 pancakes. This dish is common breakfast for orcs.";
e2Price.textContent = "$13.99";
e2Image.src = "images/platter.jpg";
e2Image.alt = "Orcs' Platter";
e3Name.textContent = "Demon Scorchin Skillet";
e3Descrip.textContent =
  "Eggs, spinach, scorching demon sauce, and mushrooms all in one sizzling hot skillet! *Ingredients can be added for additional charge. Please talk to your server";
e3Price.textContent = "$12.99";
e3Image.src = "images/skillet";
e3Image.alt = "Demon Scorchin Skillet";
e4Name.textContent = "Roasted Falcon Sandwhich";
e4Descrip.textContent =
  "Fried chicken, with lettuce, pickles, and cheese. Comes with a side of fries.";
e4Price.textContent = "$11.99";
e4Image.src = "images/chicken.jpg";
e4Image.alt = "Roasted Falcon Sandwhich";
e5Name.textContent = "Knights' Breakfast Bowl";
e5Descrip.textContent =
  "Strawberrries, blueberries, oats, yogurt, and chia seeds all come together to make a delicious, fresh breakfast. Knights eat this bowl to replenish their strength.";
e5Price.textContent = "$10.99";
e5Image.src = "images/bowl.jpg";
e5Image.alt = "Knights' Breakfast Bowl";
e6Name.textContent = "Clerics Biscuits And Gravy";
e6Descrip.textContent =
  "A stack of freshly made biscuite that comes with side of our signature gravy and bacon.";
e6Price.textContent = "$8.99";
e6Image.src = "images/biscuit.jpg";
e6Image.alt = "Clerics Biscuits and Gravy";
e7Name.textContent = "Thiefs' Pancakes";
e7Descrip.textContent =
  "Unlimited pancakes with creamy buttery and sweet syrup. These pancakes are so good you'll want to steal them!";
e7Price.textContent = "$8.99";
e7Image.src = "images/pancakes.jpg";
e7Image.alt = "Thiefs' Pancakes";
e8Name.textContent = "Maiden Soufflé";
e8Descrip.textContent =
  "A simple, elegant soufflé that is made by only the kindest of maidens. Served with a side of your choice.";
e8Price.textContent = "$7.99";
e8Image.src = "images/souffle.jpg";
e8Image.alt = "Maiden Soufflé";

b1Name.classList.add("nItem");
b2Name.classList.add("nItem");
s1Name.classList.add("nItem");
s2Name.classList.add("nItem");
e1Name.classList.add("nItem");
e2Name.classList.add("nItem");
e3Name.classList.add("nItem");
e4Name.classList.add("nItem");
e5Name.classList.add("nItem");
e6Name.classList.add("nItem");
e7Name.classList.add("nItem");
e8Name.classList.add("nItem");

b1Descrip.classList.add("dItem");
b2Descrip.classList.add("dItem");
s1Descrip.classList.add("dItem");
s2Descrip.classList.add("dItem");
e1Descrip.classList.add("dItem");
e2Descrip.classList.add("dItem");
e3Descrip.classList.add("dItem");
e4Descrip.classList.add("dItem");
e5Descrip.classList.add("dItem");
e6Descrip.classList.add("dItem");
e7Descrip.classList.add("dItem");
e8Descrip.classList.add("dItem");

b1Price.classList.add("pItem");
b2Price.classList.add("pItem");
s1Price.classList.add("pItem");
s2Price.classList.add("pItem");
e1Price.classList.add("pItem");
e2Price.classList.add("pItem");
e3Price.classList.add("pItem");
e4Price.classList.add("pItem");
e5Price.classList.add("pItem");
e6Price.classList.add("pItem");
e7Price.classList.add("pItem");
e8Price.classList.add("pItem");

b1Image.classList.add("imgItem");
b2Image.classList.add("imgItem");
s1Image.classList.add("imgItem");
s2Image.classList.add("imgItem");
e1Image.classList.add("imgItem");
e2Image.classList.add("imgItem");
e3Image.classList.add("imgItem");
e4Image.classList.add("imgItem");
e5Image.classList.add("imgItem");
e6Image.classList.add("imgItem");
e7Image.classList.add("imgItem");
e8Image.classList.add("imgItem");

beverages.appendChild(beverageTitle);
beverage1.appendChild(b1Name);
beverage1.appendChild(b1Descrip);
beverage1.appendChild(b1Price);
beverage1.appendChild(b1Image);
beverage2.appendChild(b2Name);
beverage2.appendChild(b2Descrip);
beverage2.appendChild(b2Price);
beverage2.appendChild(b2Image);
beverages.appendChild(beverage1);
beverages.appendChild(beverage2);

sides.appendChild(sideTitle);
side1.appendChild(s1Name);
side1.appendChild(s1Descrip);
side1.appendChild(s1Price);
side1.appendChild(s1Image);
side2.appendChild(s2Name);
side2.appendChild(s2Descrip);
side2.appendChild(s2Price);
side2.appendChild(s2Image);
sides.appendChild(side1);
sides.appendChild(side2);

entrées.appendChild(entréeTitle);
entrée1.appendChild(e1Name);
entrée1.appendChild(e1Descrip);
entrée1.appendChild(e1Price);
entrée1.appendChild(e1Image);
entrée2.appendChild(e2Name);
entrée2.appendChild(e2Descrip);
entrée2.appendChild(e2Price);
entrée2.appendChild(e2Image);
entrée3.appendChild(e3Name);
entrée3.appendChild(e3Descrip);
entrée3.appendChild(e3Price);
entrée3.appendChild(e3Image);
entrée4.appendChild(e4Name);
entrée4.appendChild(e4Descrip);
entrée4.appendChild(e4Price);
entrée4.appendChild(e4Image);
entrée5.appendChild(e5Name);
entrée5.appendChild(e5Descrip);
entrée5.appendChild(e5Price);
entrée5.appendChild(e5Image);
entrée6.appendChild(e6Name);
entrée6.appendChild(e6Descrip);
entrée6.appendChild(e6Price);
entrée6.appendChild(e6Image);
entrée7.appendChild(e7Name);
entrée7.appendChild(e7Descrip);
entrée7.appendChild(e7Price);
entrée7.appendChild(e7Image);
entrée8.appendChild(e8Name);
entrée8.appendChild(e8Descrip);
entrée8.appendChild(e8Price);
entrée8.appendChild(e8Image);

entrées.appendChild(entrée1);
entrées.appendChild(entrée2);
entrées.appendChild(entrée3);
entrées.appendChild(entrée4);
entrées.appendChild(entrée5);
entrées.appendChild(entrée6);
entrées.appendChild(entrée7);
entrées.appendChild(entrée8);
content.appendChild(menuTitle);
content.appendChild(beverages);
content.appendChild(sides);
content.appendChild(entrées);

// Add elements inside of each specific div like the price description
