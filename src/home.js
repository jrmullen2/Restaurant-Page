const content = document.getElementById("content");
const headingContainer = document.createElement("div");
const homeTitle = document.createElement("h1");
const reviewContainer = document.createElement("div");
const review = document.createElement("div");
const customer = document.createElement("div");
const hoursContainer = document.createElement("div");
const hours = document.createElement("h3");
const monday = document.createElement("div");
const tuesday = document.createElement("div");
const wednesday = document.createElement("div");
const thursday = document.createElement("div");
const friday = document.createElement("div");
const saturday = document.createElement("div");
const sunday = document.createElement("div");
const locationContainer = document.createElement("div");
const locationTitle = document.createElement("h3");
const address = document.createElement("div");

headingContainer.appendChild(homeTitle);
review.textContent =
  "RPG Café is the best role-playing café around! Not only is their food and service great, but also the staff are committed to playing their roles. Definitely a place I will come back to!";
customer.textContent = "Frodo";
reviewContainer.appendChild(review);
reviewContainer.appendChild(customer);
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
hoursContainer.appendChild(hours);
hoursContainer.appendChild(monday);
hoursContainer.appendChild(tuesday);
hoursContainer.appendChild(wednesday);
hoursContainer.appendChild(thursday);
hoursContainer.appendChild(friday);
hoursContainer.appendChild(saturday);
hoursContainer.appendChild(sunday);
locationContainer.appendChild(locationTitle);
locationContainer.appendChild(address);

content.appendChild(headingContainer);
content.appendChild(reviewContainer);
content.appendChild(hoursContainer);
content.appendChild(locationContainer);