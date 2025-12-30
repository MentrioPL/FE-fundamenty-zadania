"use strict";
const ctaBtnNine = document.querySelector("#ctaBtn");
const serviceCards = document.querySelectorAll(".service-card");
const servicesGridNine = document.querySelector("#servicesGrid");
const newsItems = document.querySelectorAll(".news-item");
const addServiceBtn = document.querySelector("#addServiceBtn");
// ---------------------------------------------------------------
// Zadanie 1 – click
ctaBtnNine.addEventListener("click", () => {
    console.log("Użytkownik chce nadać przesyłkę");
});
// ---------------------------------------------------------------
// Zadanie 2 – mouseenter / mouseleave
serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.backgroundColor = "rgb(156, 190, 227)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.backgroundColor = "";
    });
});
// ---------------------------------------------------------------
// Zadanie 3
servicesGridNine.addEventListener("click", (event) => {
    const target = event.target;
    // sprawdzamy czy kliknięto w kartę
    if (target.classList.contains("service-card")) {
        const serviceName = target.dataset.service;
        console.log("Kliknięto usługę:", serviceName);
    }
});
// ---------------------------------------------------------------
// Zadanie 4
newsItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        const current = event.currentTarget;
        const title = current.querySelector(".news-title")?.textContent;
        console.log("Kliknięto artykuł:", title);
    });
});
// ---------------------------------------------------------------
// Zadanie 5 – usuwanie elementu i odpinanie event listenera
const tempFeatureListener = () => {
    console.log("Dodawanie nowej usługi wkrótce dostępne");
};
addServiceBtn.addEventListener("click", tempFeatureListener);
const removeBtn = document.createElement("button");
removeBtn.innerText = "Wyłącz funkcję ‘Dodawanie usługi’";
removeBtn.classList.add("add-btn");
removeBtn.style.background = "#c62828";
removeBtn.style.color = "white";
const servicesSection = document.querySelector(".services");
servicesSection.appendChild(removeBtn);
removeBtn.addEventListener("click", () => {
    addServiceBtn.removeEventListener("click", tempFeatureListener);
    removeBtn.remove();
    console.log("Funkcja dezaktywowana, listener usunięty.");
});
