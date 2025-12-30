"use strict";
const userReviews = [
    { user: "Anna", rating: 5, comment: "Błyskawiczna dostawa!" },
    { user: "Sara", rating: 4, comment: "Wszystko ok." },
    { user: "Julia", rating: 5, comment: "Super usługa!" }
];
const reviewsListElement = document.querySelector("#reviews-list");
userReviews.forEach((review) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <span class="review-user">${review.user}</span>
    <span class="review-rating">${review.rating}/5</span>
    <p class="review-comment">${review.comment}</p>
    `;
    reviewsListElement.appendChild(li);
});
const sliderImages = [
    {
        src: "../../../assets/slider4.png",
        alt: "Baner firmowy z logo FastShip"
    },
    {
        src: "../../../assets/slider1.jpg",
        alt: "Flota firmy FastShip"
    },
    {
        src: "../../../assets/slider2.jpg",
        alt: "Centrum przeładunkowe FastShip"
    },
    {
        src: "../../../assets/slider3.jpg",
        alt: "Pracownik firmy FastShip przy pakowaniu przesyłki"
    }
];
const track = document.querySelector(".carousel-track");
const btnLeft = document.querySelector(".carousel-btn.left");
const btnRight = document.querySelector(".carousel-btn.right");
const dotsWrapper = document.querySelector(".carousel-dots");
let currentIndex = 0;
function renderImages() {
    sliderImages.forEach((sliderImage) => {
        const img = document.createElement("img");
        img.src = sliderImage.src;
        img.alt = sliderImage.alt;
        track.appendChild(img);
    });
}
function renderDots() {
    dotsWrapper.innerHTML = "";
    sliderImages.forEach((_, idx) => {
        const dot = document.createElement("button");
        if (idx === currentIndex)
            dot.classList.add("active");
        dot.addEventListener("click", () => {
            currentIndex = idx;
            updateCarousel();
        });
        dotsWrapper.appendChild(dot);
    });
}
function updateCarousel() {
    const moveX = currentIndex * -100;
    track.style.transform = `translateX(${moveX}%)`;
    const allDots = dotsWrapper.querySelectorAll("button");
    allDots.forEach((dot) => dot.classList.remove("active"));
    allDots[currentIndex].classList.add("active");
}
function nextSlide() {
    currentIndex++;
    if (currentIndex >= sliderImages.length)
        currentIndex = 0;
    updateCarousel();
}
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0)
        currentIndex = sliderImages.length - 1;
    updateCarousel();
}
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
// --- Inicjalizacja slidera ---
renderImages();
renderDots();
updateCarousel();
// ------------------------------------------------
// FUNKCJONALNOŚĆ MODALA -----------------------
const addServiceButton = document.querySelector("#addServiceBtn");
const modal = document.querySelector("#serviceModal");
const titleInput = document.querySelector("#serviceTitle");
const descInput = document.querySelector("#serviceDescription");
const confirmBtn = document.querySelector("#confirmAddService");
const cancelBtn = document.querySelector("#cancelAddService");
const servicesContainer = document.querySelector("#servicesGrid");
addServiceButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
});
cancelBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    clearForm();
});
confirmBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    if (!title || !description)
        return;
    const card = createServiceCardElement(title, description);
    servicesContainer.appendChild(card);
    modal.classList.add("hidden");
    clearForm();
});
function createServiceCardElement(title, desc) {
    const card = document.createElement("div");
    card.classList.add("service-card");
    card.innerHTML = `
    <h3>${title}</h3>
    <p>${desc}</p>
  `;
    return card;
}
function clearForm() {
    titleInput.value = "";
    descInput.value = "";
}
// ------------------------------------------------
