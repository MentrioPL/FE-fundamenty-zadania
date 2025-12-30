/**
 * Firma "GreenParcel" zajmuje się logistyką i przewozem paczek. Jako początkujący
 * programista zostałeś poproszony o przygotowanie prostych obliczeń i logiki,
 * które będą w przyszłości częścią większego systemu.
 */

// ==========================
// 1–3: Operacje matematyczne
// ==========================
const kosztBazowy: number = 10.5;
const doplata: number = 2.75;
const liczbaPaczek: number = 57;
const liczbaKierowcow: number = 5;
const wagaPaczki1: number = 4.2;
const wagaPaczki2: number = 3.8;
const wagaPaczki3: number = 9.6;
const wagaPaczki4: number = 0.2;


// Zadanie 1: Oblicz całkowity koszt wysyłki (suma dwóch zmiennych: koszt bazowy i dopłata).
const calkowityKosztWysylki: number;
console.log("Całkowity koszt wysyłki: ", calkowityKosztWysylki);

// Zadanie 2: Oblicz resztę z dzielenia liczby paczek przez liczbę kierowców.
const resztaZDzielenia: number;
console.log("Reszta z dzielenia paczek przez kierowców: ", resztaZDzielenia);

// Zadanie 3: Wylicz średnią wagę paczek.
const sredniaWagaPaczki: number;
console.log("Średnia waga paczki: ", sredniaWagaPaczki);

// ==========================
// 4–6: Operacje na stringach
// ==========================
const imieKlienta: string = "Jan Kowalski";
const nazwaPaczki: string = "EkoPaczka";

// Zadanie 4: Połącz dwa stringi: imię klienta oraz nazwę paczki, pamiętaj o odstępach.
const pelnaNazwaPaczki: string;
console.log(pelnaNazwaPaczki);

// Zadanie 5: Stwórz string z użyciem template literal, który wyświetli "Klient: Jan Kowalski, Suma wag paczek: xxx".
// Pod xxx podstaw sumę wag wszystkich czterech paczek, litrały obsługują zmienne, ale takze operacje wewnatrz ${}.
const podsumowanieKlienta: string;
console.log(podsumowanieKlienta);

// Zadanie 6: Utwórz wieloliniowy tekst używając znaków nowej linii oraz tabulatora.
const listaPaczek: string;
console.log(listaPaczek);

// ==========================
// 7–11: Logika biznesowa
// ==========================
const czyUzytkownikPremium: boolean = true;
const posiadaRabat: boolean = false;
const wartoscKoszyka: number = 250;
/**
 * 7. Ustal, czy użytkownik może otrzymać darmową dostawę. 
 * Użytkownik otrzymuje darmową dostawę, jeśli:
 * ma konto premium ORAZ wartość koszyka > 200,
 * lub jeśli posiada kod rabatowy.
 * 
 * Utwórz zmienną wynikową darmowaWysylka (typ boolean).
 * Testuj różne wartości zmiennych czyUzytkownikPremium, posiadaRabat oraz wartoscKoszyka, aby sprawdzić różne scenariusze.
 */
const darmowaWysylka: boolean;
console.log("darmowaWysylka:", darmowaWysylka);

/**
 * 8. Ustal, czy użytkownik otrzymuje dodatkowy rabat. Warunek:
 * Jest czarny piątek i uzytkownik ma darmową wysyłkę
 * LUB ma co najmniej 500 punktów lojalnościowych.
 * 
 * Utwórz zmienne czarnyPiatek, punktyLojalnsciowe, dodatkowyRabat z odpowiednimi typami.
 */

console.log("dodatkowyRabat:", dodatkowyRabat);

/**
 * 9. Ustal, czy użytkownik kwalifikuje się do pakietu benefitów. Aby kwalifikować się musi:
 * W sezonie urlopowym mieć dodatkowy rabat i więcej niż 3 przedmioty w koszyku.
 * Poza sezonem urlopowym nie mieć dodatkowego rabatu i posiadać więcej niż 10 przedmiotów w koszyku.
 * 
 * Utwórz zmienne przedmiotyWKoszyku, sezonUrlopowy oraz czyPakietBenefitow z odpowiednimi typami.
 */
console.log("czyPakietBenefitow:", czyPakietBenefitow);

/**
 * 10. Ustal, czy użytkownik kwalifikuje się do statusu VIP. Warunki:
 * Jest klientem od co najmniej 3 lat i jest zapisany na newsletter
 * LUB jest klientem od co najmniej 2 lat i złożył co najmniej 5 zamówień
 * LUB złożył więcej niż 10 zamówień i jest zapisany na newsletter
 * LUB jest klientem od ponad 5 lat.
 * 
 * Manipuluj zmiennymi lataJakoKlient, iloscZamowien, czyZapisanyNaNewsletter, aby przetestować różne scenariusze.
 */

const lataJakoKlient: number = 0;
const iloscZamowien: number = 0;
const czyZapisanyNaNewsletter: boolean = false;

const statusVIP: boolean;
console.log("statusVIP:", statusVIP);
/**
 * 11. Ustal, czy użytkownik kwalifikuje się do statusu Platinum. Warunki:
 * Jeśli jest VIP-em ORAZ:
 *  - Średnie miesięczne wydatki powyżej 1000 i metoda płatności Blikiem
 *  - LUB średnie miesięczne wydatki powyżej 700 i metoda płatności kartą
 * LUB jeśli nie jest VIP-em i średnie miesięczne wydatki powyżej 2000 oraz metoda płatności nie jest przelewem.
 * 
 * Manipuluj zmiennymi sredniaMiesiecznychWydatkow oraz metodaPlatnosci, aby przetestować różne scenariusze.
 */
const sredniaMiesiecznychWydatkow: number = 1200;
const metodaPlatnosci: "card" | "transfer" | "blik" | undefined = undefined;

const platinumStatus: boolean;
console.log("platinumStatus:", platinumStatus);
