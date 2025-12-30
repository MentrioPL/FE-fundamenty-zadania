"use strict";
// Zadanie 1
const shipmentsCounterElement = document.querySelector("#shipmentsCounter");
console.log(shipmentsCounterElement.innerText);
// Zadanie 2
const bannerTextElement = document.querySelector("#infoBanner .banner__text");
bannerTextElement.innerText =
    "System działa poprawnie. Dziękujemy za cierpliwość.";
// Zadanie 3
const ctaBtn = document.querySelector("#ctaBtn");
ctaBtn.setAttribute("title", "Nadaj nową przesyłkę");
// Zadanie 4
const firstServiceCard = document.querySelector(".service-card");
console.log(firstServiceCard.dataset.service);
// Zadanie 5
const servicesGrid = document.querySelector("#servicesGrid");
console.log("parent:", servicesGrid.parentElement);
console.log("children:", servicesGrid.children);
console.log("nextElementSibling:", servicesGrid.nextElementSibling);
// Zadanie 6
const newService = document.createElement("div");
newService.classList.add("service-card");
newService.dataset.service = "insurance";
newService.innerHTML = `
  <h3>Ubezpieczenie</h3>
  <p>Dodatkowa ochrona przesyłek na terenie całej Europy.</p>
`;
servicesGrid.appendChild(newService);
// Zadanie 7
const heroStats = document.querySelector(".hero__stats");
heroStats.style.gap = "50px";
heroStats.style.justifyContent = "flex-start";
// Zadanie 8
const firstNewsTitle = document.querySelector(".news-title");
firstNewsTitle.classList.add("highlight");
