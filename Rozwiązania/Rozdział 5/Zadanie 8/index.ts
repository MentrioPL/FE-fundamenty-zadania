// Zadanie 1
const shipmentsCounterElement = document.querySelector(
  "#shipmentsCounter"
) as HTMLElement
console.log(shipmentsCounterElement.innerText)

// Zadanie 2
const bannerTextElement = document.querySelector(
  "#infoBanner .banner__text"
) as HTMLElement
bannerTextElement.innerText =
  "System działa poprawnie. Dziękujemy za cierpliwość."

// Zadanie 3
const ctaBtn = document.querySelector("#ctaBtn") as HTMLElement
ctaBtn.setAttribute("title", "Nadaj nową przesyłkę")

// Zadanie 4
const firstServiceCard = document.querySelector(".service-card") as HTMLElement
console.log(firstServiceCard.dataset.service)

// Zadanie 5
const servicesGrid = document.querySelector("#servicesGrid") as HTMLElement
console.log("parent:", servicesGrid.parentElement)
console.log("children:", servicesGrid.children)
console.log("nextElementSibling:", servicesGrid.nextElementSibling)

// Zadanie 6
const newService = document.createElement("div")
newService.classList.add("service-card")
newService.dataset.service = "insurance"

newService.innerHTML = `
  <h3>Ubezpieczenie</h3>
  <p>Dodatkowa ochrona przesyłek na terenie całej Europy.</p>
`

servicesGrid.appendChild(newService)

// Zadanie 7
const heroStats = document.querySelector(".hero__stats") as HTMLElement
heroStats.style.gap = "50px"
heroStats.style.justifyContent = "flex-start"

// Zadanie 8
const firstNewsTitle = document.querySelector(".news-title") as HTMLElement
firstNewsTitle.classList.add("highlight")
