/* 
==========================
 FASTSHIP: PROGRAMOWANIE ASYNCHRONICZNE
==========================

FastShip rozwija swoją stronę główną i zespół Frontend chce dodać funkcje,
które poprawią UX i umożliwią komunikację z backendem (nawet jeśli backend 
jeszcze nie istnieje to firma przygotowała nam odpowiednie mocki - czyli prototyp działania backendu).

Twoim zadaniem jest zaimplementować trzy funkcjonalności.

────────────────────────────
 ZADANIE 1
────────────────────────────
Kontekst biznesowy:
FastShip chce dodać drobny efekt UX: po kliknięciu w sekcji „O firmie”
ma pojawić się na 2 sekundy komunikat „Ładowanie danych...”, a potem 
faktyczna treść (zasymulowana).

Co masz zrobić:
1. Utwórz funkcję `simulateDataLoad(callback)` która:
   – przyjmuje funkcję callback jako argument,
   – ustawia setTimeout i po 2000 ms wykonuje callback.

2. Pod sekcją „O firmie” znajduje się przycisk o id: "loadInfoBtn".
   Po jego kliknięciu:
   – zmień tekst elementu o id "companyInfo" na „Ładowanie danych…”
   – wywołaj `simulateDataLoad()`, a w przekazywanej funkcji ustaw opis na wartość zmiennej originalCompanyInfo i usuń z DOM przycisk loadInfoBtn.

────────────────────────────
 ZADANIE 2
────────────────────────────
Kontekst biznesowy:
Przycisk „Nadaj przesyłkę” ma teraz symulować wysyłkę danych do backendu.
Przygotowany został dla Ciebie mock funkcji `mockSendPackage()`, który po 1.5 sekundy zwraca obiekt z numerem śledzenia.

Po kliknięciu przycisku:
   - zmień tekst w elemencie o id: "tracking-output" na „Wysyłanie przesyłki…”
   – wywołaj mock i zapnij się na nasłuchiwany wynik odpowiednią metodą,
   – po odebraniu wyniku wyświetl komunikat w elemencie o id: "tracking-output":
      „Nadano! Numer śledzenia: [otrzymane tracking ID]”

────────────────────────────
 ZADANIE 3
────────────────────────────
Kontekst biznesowy:
FastShip chce sekcję „Opinie klientów” ładować dynamicznie.
Backend będzie zwracał listę opinii.

Co masz zrobić:
Po kliknięciu przycisku z id "load-reviews-btn":
   - ustaw tekst w elemencie o id "reviews-list" na „Ładowanie opinii…”
   – pobierz listę opinii za pomocą funkcji mockFetchReviews(),
   – odfiltruj tylko te, gdzie rating >= 4,
   – posortuj rosnąco po rating,
   - ustaw innerHTML elementu o id "reviews-list" na pusty string,
   – dla każdej (odpowiednia pętla) przefiltrowanej opinii stwórz element 'li' z innerHTML w formacie:
          <span class="review-user">POBRANA NAZWA UZYTKOWNIKA</span>
          <span class="review-rating">POBRANA OCENA/5</span>
          <p class="review-comment">POBRANY KOMENTARZ</p>
      i dodaj go do elementu o id "reviews-list".
   - usuń przycisk "load-reviews-btn" z DOM.

────────────────────────────
UWAGA:
W zadaniu 3 zachęcam do wykorzystania async/await, ale możesz użyć dowolnej metody (Promise lub async/await).
────────────────────────────
*/

// Opis do zadania 1
const originalCompanyInfo = `FastShip to wiodący dostawca usług kurierskich, oferujący szybkie i niezawodne przesyłki na terenie całej Europy. Nasza misja to dostarczanie paczek z najwyższą starannością i dbałością o klienta.`

// Mock do zadania 2
function mockSendPackage(): Promise<{ status: string; trackingId: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = Math.floor(Math.random() * 90000 + 10000)
      resolve({ status: "OK", trackingId: `FS-${id}` })
    }, 1500)
  })
}

// Mock do zadania 3
interface Review {
  user: string
  rating: number
  comment: string
}

async function mockFetchReviews(): Promise<Review[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { user: "Anna", rating: 5, comment: "Błyskawiczna dostawa!" },
        { user: "Marek", rating: 3, comment: "Średnie doświadczenie." },
        { user: "Sara", rating: 4, comment: "Wszystko ok." },
        { user: "Tomasz", rating: 2, comment: "Paczka dotarła uszkodzona." },
        { user: "Julia", rating: 5, comment: "Super usługa!" }
      ])
    }, 1200)
  })
}
