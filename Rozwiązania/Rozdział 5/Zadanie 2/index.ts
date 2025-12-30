/**
 * Firma "GreenParcel" zajmuje się logistyką i przewozem paczek. Jako początkujący
 * programista zostałeś poproszony o przygotowanie prostych obliczeń i logiki,
 * które będą w przyszłości częścią większego systemu.
 */

// ==========================
// 1–3: Operacje matematyczne
// ==========================
const kosztBazowy: number = 10.5
const doplata: number = 2.75
const liczbaPaczek: number = 57
const liczbaKierowcow: number = 5
const wagaPaczki1: number = 4.2
const wagaPaczki2: number = 3.8
const wagaPaczki3: number = 9.6
const wagaPaczki4: number = 0.2

// Zadanie 1: Oblicz całkowity koszt wysyłki (suma dwóch zmiennych: koszt bazowy i dopłata).
const calkowityKosztWysylki: number = kosztBazowy + doplata
console.log("Całkowity koszt wysyłki: ", calkowityKosztWysylki)

// Zadanie 2: Oblicz resztę z dzielenia liczby paczek przez liczbę kierowców.
const resztaZDzielenia: number = liczbaPaczek % liczbaKierowcow
console.log("Reszta z dzielenia paczek przez kierowców: ", resztaZDzielenia)

// Zadanie 3: Wylicz średnią wagę paczek.
const sredniaWagaPaczki: number =
  (wagaPaczki1 + wagaPaczki2 + wagaPaczki3 + wagaPaczki4) / 4
console.log("Średnia waga paczki: ", sredniaWagaPaczki)

// ==========================
// 4–6: Operacje na stringach
// ==========================
const imieKlienta: string = "Jan Kowalski"
const nazwaPaczki: string = "EkoPaczka"

// Zadanie 4: Połącz dwa stringi: imię klienta oraz nazwę paczki, pamiętaj o odstępach.
const pelnaNazwaPaczki: string = imieKlienta + " " + nazwaPaczki
console.log(pelnaNazwaPaczki)

// Zadanie 5: Stwórz string z użyciem template literal, który wyświetli "Klient: Jan Kowalski, Suma wag paczek: xxx".
// Pod xxx podstaw sumę wag wszystkich czterech paczek, litrały obsługują zmienne, ale takze operacje wewnatrz ${}.
const sumaWagPaczki: number =
  wagaPaczki1 + wagaPaczki2 + wagaPaczki3 + wagaPaczki4
const podsumowanieKlienta: string = `Klient: ${imieKlienta}, Suma wag paczek: ${sumaWagPaczki}`
console.log(podsumowanieKlienta)

// Zadanie 6: Utwórz wieloliniowy tekst używając znaków nowej linii oraz tabulatora.
const listaPaczek: string = `Lista paczek:\n\t1. ${nazwaPaczki} 1\n\t2. ${nazwaPaczki} 2\n\t3. ${nazwaPaczki} 3\n\t4. ${nazwaPaczki} 4`
console.log(listaPaczek)

// ==========================
// 7–11: Logika biznesowa z użyciem && oraz || (bez if)
// ==========================
const czyUzytkownikPremium: boolean = true
const posiadaRabat: boolean = false
const wartoscKoszyka: number = 250
// Zadanie 7.
const darmowaWysylka: boolean =
  (czyUzytkownikPremium && wartoscKoszyka > 200) || posiadaRabat

console.log("darmowaWysylka:", darmowaWysylka)

// Zadanie 8.
const czarnyPiatek: boolean = true
const punktyLojalnosciowe: number = 200

const dodatkowyRabat: boolean =
  (czarnyPiatek && darmowaWysylka) || punktyLojalnosciowe > 500
console.log("dodatkowyRabat:", dodatkowyRabat)

// Zadanie 9.
const przedmiotyWKoszyku: number = 4
const sezonUrlopowy: boolean = true

const czyPakietBenefitow: boolean =
  (dodatkowyRabat && przedmiotyWKoszyku > 3 && sezonUrlopowy) ||
  (!dodatkowyRabat && przedmiotyWKoszyku > 10)
console.log("czyPakietBenefitow:", czyPakietBenefitow)

// Zadanie 10.
const lataJakoKlient: number = 2
const iloscZamowien: number = 6
const czyZapisanyNaNewsletter: boolean = false

const statusVIP: boolean =
  (lataJakoKlient >= 3 && czyZapisanyNaNewsletter) ||
  (lataJakoKlient >= 2 && iloscZamowien >= 5) ||
  (iloscZamowien > 10 && czyZapisanyNaNewsletter) ||
  lataJakoKlient > 5
console.log("statusVIP:", statusVIP)

// Zadanie 11.
const sredniaMiesiecznychWydatkow: number = 1200
const metodaPlatnosci: "card" | "transfer" | "blik" | undefined = undefined

const platinumStatus: boolean =
  (statusVIP &&
    ((sredniaMiesiecznychWydatkow > 1000 && metodaPlatnosci === "blik") ||
      (sredniaMiesiecznychWydatkow > 700 && metodaPlatnosci === "card"))) ||
  (!statusVIP &&
    sredniaMiesiecznychWydatkow > 2000 &&
    metodaPlatnosci !== "transfer")

console.log("platinumStatus:", platinumStatus)
