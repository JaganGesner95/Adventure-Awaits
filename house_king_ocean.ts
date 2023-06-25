import { TravelExperience, TravelAgency } from "./TravelAgency";

// Setup our travel agency
let travels = new TravelAgency("Travel Adventures");

// Setup travel experiences
let serendipity = new TravelExperience(
  "Serendipity",
  "A unique and thrilling experience with a remote tribe on the island of Bali."
);
let alpine = new TravelExperience(
  "Alpine",
  "An overnight trek through the picturesque Swiss Alps."
);
let urban = new TravelExperience(
  "Urban",
  "A weekend getaway to the vibrant and bustling streets of New York City."
);
let romantic = new TravelExperience(
  "Romantic",
  "A three day luxury cruise down the aisle of love on the Mediterranean Sea."
);

// Add experiences to travel agency
travels.addTravelExperience(serendipity);
travels.addTravelExperience(alpine);
travels.addTravelExperience(urban);
travels.addTravelExperience(romantic);

// Display travel experiences
console.log(travels.listTravelExperience());

// Setup website
let website = document.getElementById("website");
let title = document.createElement("h1");
title.innerText = travels.name;
let description = document.createElement("p");
description.innerText =
  "A travel agency that curates unique and exciting travel experiences all over the world.";

website.appendChild(title);
website.appendChild(description);

let experiences = document.createElement("ul");
for (let experience of travels.travelExperiences) {
  let item = document.createElement("li");
  item.innerText = experience.name;
  item.addEventListener("click", () => {
    alert(experience.description);
  });
  experiences.appendChild(item);
}
website.appendChild(experiences);