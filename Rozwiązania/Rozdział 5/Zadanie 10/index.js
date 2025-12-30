"use strict";
/* ─────────────────────
   ZADANIE 1 – setTimeout + callback
   ───────────────────── */
function simulateDataLoad(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}
const originalCompanyInfo = `FastShip to wiodący dostawca usług kurierskich, oferujący szybkie i niezawodne przesyłki na terenie całej Europy. Nasza misja to dostarczanie paczek z najwyższą starannością i dbałością o klienta.`;
const loadInfoBtn = document.querySelector("#loadInfoBtn");
const companyInfo = document.querySelector("#companyInfo");
loadInfoBtn.addEventListener("click", () => {
    companyInfo.innerText = "Ładowanie danych…";
    simulateDataLoad(() => {
        companyInfo.innerText = originalCompanyInfo;
        loadInfoBtn.remove();
    });
});
/* ─────────────────────
   ZADANIE 2 – Mock backend, Promise + .then
   ───────────────────── */
function mockSendPackage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const id = Math.floor(Math.random() * 90000 + 10000);
            resolve({ status: "OK", trackingId: `FS-${id}` });
        }, 1500);
    });
}
const ctaButton = document.querySelector("#ctaBtn");
const trackingOutput = document.querySelector("#tracking-output");
ctaButton.addEventListener("click", () => {
    trackingOutput.innerText = "Wysyłanie przesyłki…";
    mockSendPackage().then((response) => {
        trackingOutput.innerText = `Nadano! Numer śledzenia: ${response.trackingId}`;
    });
});
async function mockFetchReviews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { user: "Anna", rating: 5, comment: "Błyskawiczna dostawa!" },
                { user: "Marek", rating: 3, comment: "Średnie doświadczenie." },
                { user: "Sara", rating: 4, comment: "Wszystko ok." },
                { user: "Tomasz", rating: 2, comment: "Paczka dotarła uszkodzona." },
                { user: "Julia", rating: 5, comment: "Super usługa!" }
            ]);
        }, 1200);
    });
}
const loadReviewsBtn = document.querySelector("#load-reviews-btn");
const reviewsList = document.querySelector("#reviews-list");
loadReviewsBtn.addEventListener("click", async () => {
    reviewsList.innerText = "Ładowanie opinii…";
    const reviews = await mockFetchReviews();
    const filtered = reviews
        .filter((review) => review.rating >= 4)
        .sort((a, b) => a.rating - b.rating);
    reviewsList.innerHTML = "";
    filtered.forEach((review) => {
        const li = document.createElement("li");
        li.innerHTML = `
    <span class="review-user">${review.user}</span>
    <span class="review-rating">${review.rating}/5</span>
    <p class="review-comment">${review.comment}</p>
    `;
        reviewsList.appendChild(li);
    });
    loadReviewsBtn.remove();
});
