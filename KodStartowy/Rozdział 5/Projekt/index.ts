// KOD STARTOWY - NIE MODYFIKOWAĆ ------------------
interface Review {
  user: string
  rating: number
  comment: string
}

const userReviews: Review[] = [
  { user: "Anna", rating: 5, comment: "Błyskawiczna dostawa!" },
  { user: "Sara", rating: 4, comment: "Wszystko ok." },
  { user: "Julia", rating: 5, comment: "Super usługa!" }
]

const reviewsListElement = document.querySelector(
  "#reviews-list"
) as HTMLElement

userReviews.forEach((review) => {
  const li = document.createElement("li")
  li.innerHTML = `
    <span class="review-user">${review.user}</span>
    <span class="review-rating">${review.rating}/5</span>
    <p class="review-comment">${review.comment}</p>
    `
  reviewsListElement.appendChild(li)
})
// ------------------------------------------------

// FUNKCJONALNOSĆ SLIDERA ----------------------------
/*
1. Dodaj do tablicy sliderImages cztery obiekty reprezentujące obrazy do slidera.
2. Wybierz z DOM 4 elementy, kontener karuzeli, przyciski nawigacyjne oraz kontener kropek.
3. Zaimplementuj funkcję renderImages(), dla każdego obrazu w tablicy sliderImages tworzy element <img>, ustawia jego atrybuty i dodaje go do kontenera karuzeli.
4. Zaimplementuj funkcję renderDots(), która:
    - Czyści istniejący HTML w kontenerze.
    - Dla każdego obrazu tworzy przycisk reprezentujący kropkę.
    - Dodaje klasę "active" do kropki odpowiadającej bieżącemu obrazowi.
    - Dodaje obsługę zdarzenia kliknięcia, która aktualizuje bieżący indeks i wywołuje updateCarousel().
    - Dodaje element kropki do kontenera.
    HINT: Metoda .forEach() jako drugi parametr przyjmuje indeks elementu w tablicy.
5. Zaimplementuj funkcję updateCarousel(), która:
    - Przesuwa kontener karuzeli w poziomie, aby pokazać bieżący obraz.
    HINT: Uzyj stylu transform: translateX(${index * -100}%), aby przesunąć karuzelę w lewo o wielokrtoność szerokości obrazu.
    - Aktualizuje klasy "active" na kropkach, aby tylko kropka z indexu obecnie wyświetlanego obrazu miała tę klasę.
6. Zaimplementuj funkcje nextSlide() i prevSlide(), które zmieniają bieżący indeks obrazu i wywołują updateCarousel().
    PAMIĘTAJ: Obsłuż przejście z ostatniego obrazu na pierwszy i odwrotnie.
7. Dodaj nasłuchiwanie zdarzeń kliknięcia na przyciski nawigacyjne, aby wywołać odpowiednie funkcje zmieniające slajdy.
*/
interface SliderImage {
  src: string
  alt: string
}

const sliderImages: SliderImage[] = []
let currentIndex = 0 // Indeks bieżącego obrazu w sliderze

function renderImages() {}

function renderDots() {}

function updateCarousel() {}

function nextSlide() {}

function prevSlide() {}

// --- Inicjalizacja slidera ---
renderImages()
renderDots()
updateCarousel()

// ------------------------------------------------

// FUNKCJONALNOŚĆ MODALA -----------------------
/*
1. Wybierz z DOM elementy: przycisk otwierający modal, sam modal, pola formularza, przyciski potwierdzenia i anulowania oraz kontener na karty usług.
2. Dodaj nasłuchiwanie zdarzenia kliknięcia na przycisk otwierający modal, które usuwa klasę "hidden" z modala, aby go pokazać.
3. Dodaj nasłuchiwanie zdarzenia kliknięcia na przycisk anulowania, które dodaje klasę "hidden" do modala i wywołuje funkcję czyszczącą formularz.
4. Dodaj nasłuchiwanie zdarzenia kliknięcia na przycisk potwierdzenia, które:
    - Pobiera wartości z pól formularza (pole 'value') i usuwa zbędne białe znaki przy uzyciu odpowiedniej metody na stringu.
    - Sprawdza, czy oba pola są wypełnione; jeśli nie, kończy działanie funkcji.
    - Tworzy nową kartę usługi za pomocą funkcji createServiceCardElement().
    - Dodaje nową kartę do kontenera usług.
    - Ukrywa modal i czyści formularz.
5. Wyciągnij logikę dodawania klasy "hidden" i wywołania czyszczenia formularza do osobnej funkcji (uzyta w dwoch miejscach).
6. Zaimplementuj funkcję createServiceCardElement(), która przyjmuje tytuł i opis jako argumenty, tworzy element HTML reprezentujący kartę usługi 
    nadaje mu odpowiednią klasę i HTML, a następnie zwraca go.
7. Zaimplementuj funkcję clearForm(), która czyści wartości pól formularza.
*/

function createServiceCardElement(title: string, desc: string): HTMLElement {}

function clearForm() {}
// ------------------------------------------------
