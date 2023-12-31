import knight from "./images/knight.png";

export function home() {
  const content = document.getElementById("content");
  const headingContainer = document.createElement("div");
  const heading = document.createElement("div");
  const homeTitle = document.createElement("h1");
  const decoration1 = document.createElement("img");
  const decoration2 = document.createElement("img");
  const reviewOuterContainer = document.createElement("div");
  const reviewInnerContainer = document.createElement("div");
  const review = document.createElement("div");
  const customer = document.createElement("div");
  const hoursOuterContainer = document.createElement("div");
  const hoursInnerContainer = document.createElement("div");
  const hours = document.createElement("h3");
  const monday = document.createElement("div");
  const tuesday = document.createElement("div");
  const wednesday = document.createElement("div");
  const thursday = document.createElement("div");
  const friday = document.createElement("div");
  const saturday = document.createElement("div");
  const sunday = document.createElement("div");
  const locationOuterContainer = document.createElement("div");
  const locationInnerContainer = document.createElement("div");
  const locationTitle = document.createElement("h3");
  const address = document.createElement("div");

  homeTitle.textContent = "RPG Café";
  decoration1.src = knight;
  decoration1.alt = "knight";
  decoration2.src = knight;
  decoration2.alt = "knight";
  review.textContent =
    "RPG Café is the best role-playing café around! Not only is their food and service great, but also the staff are committed to playing their roles. Definitely a place I will come back to!";
  customer.textContent = "Frodo";
  hours.textContent = "Hours";
  monday.textContent = "Monday: 10am - 9pm";
  tuesday.textContent = "Tuesday 10am - 9pm";
  wednesday.textContent = "Wednesday 10am - 9pm";
  thursday.textContent = "Thursday 10am - 9pm";
  friday.textContent = "Friday 10am - 11pm";
  saturday.textContent = "Saturday 10am - 11pm";
  sunday.textContent = "Sunday 10am - 9pm";
  locationTitle.textContent = "Location";
  address.textContent = "222 Sorcerer Drive, Lothric, California";

  headingContainer.classList.add("outer");
  heading.classList.add("inner");
  heading.classList.add("header");
  decoration1.classList.add("d1");
  decoration2.classList.add("d2");
  reviewOuterContainer.classList.add("outer");
  reviewInnerContainer.classList.add("inner");
  customer.id = "customer";
  hoursOuterContainer.classList.add("outer");
  hoursInnerContainer.classList.add("inner");
  locationOuterContainer.classList.add("outer");
  locationInnerContainer.classList.add("inner");

  heading.appendChild(decoration1);
  heading.appendChild(homeTitle);
  heading.appendChild(decoration2);
  headingContainer.appendChild(heading);
  reviewInnerContainer.appendChild(review);
  reviewInnerContainer.appendChild(customer);
  reviewOuterContainer.appendChild(reviewInnerContainer);
  hoursInnerContainer.appendChild(hours);
  hoursInnerContainer.appendChild(monday);
  hoursInnerContainer.appendChild(tuesday);
  hoursInnerContainer.appendChild(wednesday);
  hoursInnerContainer.appendChild(thursday);
  hoursInnerContainer.appendChild(friday);
  hoursInnerContainer.appendChild(saturday);
  hoursInnerContainer.appendChild(sunday);
  hoursOuterContainer.appendChild(hoursInnerContainer);
  locationInnerContainer.appendChild(locationTitle);
  locationInnerContainer.appendChild(address);
  locationOuterContainer.appendChild(locationInnerContainer);
  content.appendChild(headingContainer);
  content.appendChild(reviewOuterContainer);
  content.appendChild(hoursOuterContainer);
  content.appendChild(locationOuterContainer);
}
