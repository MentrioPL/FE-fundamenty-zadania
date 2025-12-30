/*
Dział Produktu FastShip chce ulepszyć stronę główną. Kilka sekcji strony
powinno reagować na działania użytkowników, aby poprawić UX oraz
umożliwić dynamiczne zarządzanie treściami. Twoim zadaniem jest
zaimplementować obsługę zdarzeń oraz przepływu eventów.
*/

// ---------------------------------------------------------------
// Zadanie 1
/*
Po kliknięciu przycisku #ctaBtn wypisz w konsoli:
"Użytkownik chce nadać przesyłkę".
Dodaj odpowiedni event listener.
*/

// ---------------------------------------------------------------
// Zadanie 2
/*
Po najechaniu myszką na którąkolwiek z kart .service-card
zmień jej kolor tła na rgb(156, 190, 227), a po zjechaniu usuń styl.
Dodaj odpowiednie event listenery do kazdego elementu!
*/

// ---------------------------------------------------------------
// Zadanie 3
/*
Kliknięcie w dowolną kartę usługi (.service-card) powinno wypisać:
"Kliknięto usługę: NAZWA_USŁUGI"
Wykorzystaj przekazywanie eventów w górę drzewa, nasłuch ustaw na rodzicu,
a nazwę usługi pobierz z dataset, dostęp do elementu masz przez właściwośc obiektu event, która przechowuje element wywołujący.
*/

// ---------------------------------------------------------------
// Zadanie 4
/*
Po kliknięciu w element .news-item wypisz:
"Kliknięto artykuł: TYTUŁ"
Użyj przechowywanego w elemencie tytułu (klasa .news-title).
*/

// ---------------------------------------------------------------
// Zadanie 5 – tworzenie listenera do usunięcia
/*
Przycisk #addServiceBtn po kliknięciu wypisuje w konsoli:
"Dodawanie nowej usługi wkrótce dostępne".

Utwórz drugi przycisk za pomocą elementu button z tekstem: "Wyłącz funkcję ‘Dodawanie usługi’".,
nadaj mu klasę .add-btn i zmień styl tła na #c62828 oraz kolor tekstu na biały.
Dodaj go do DOM na końcu sekcji services.

Następnie dodaj event listener, który po kliknięciu:
- odłączy event listener z #addServiceBtn
- usunie ten przycisk z DOM
- wypisze w konsoli, ze wykonano dezaktywację funkcji
*/
// ---------------------------------------------------------------

// ---------------------------
// Kod startowy (zmienne)
const ctaBtn = document.querySelector("#ctaBtn") as HTMLButtonElement
const serviceCards = document.querySelectorAll(
  ".service-card"
) as NodeListOf<HTMLElement>
const servicesGrid = document.querySelector("#servicesGrid") as HTMLElement
const newsItems = document.querySelectorAll(
  ".news-item"
) as NodeListOf<HTMLElement>
const addServiceBtn = document.querySelector(
  "#addServiceBtn"
) as HTMLButtonElement

// Listener tymczasowy do zadania 5
const tempFeatureListener = () => {
  console.log("Dodawanie nowej usługi wkrótce dostępne")
}

addServiceBtn.addEventListener("click", tempFeatureListener)
