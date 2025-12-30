"use strict";
/**
 * Firma "GreenParcel" zajmuje się logistyką i przewozem paczek. Jako początkujący
 * programista zostałeś poproszony o przygotowanie prostych obliczeń i logiki,
 * które będą w przyszłości częścią większego systemu.
 */
// ==========================
// 1–3: Operacje matematyczne
// ==========================
const kosztBazowy = 10.5;
const doplata = 2.75;
const liczbaPaczek = 57;
const liczbaKierowcow = 5;
const wagaPaczki1 = 4.2;
const wagaPaczki2 = 3.8;
const wagaPaczki3 = 9.6;
const wagaPaczki4 = 0.2;
// Zadanie 1: Oblicz całkowity koszt wysyłki (suma dwóch zmiennych: koszt bazowy i dopłata).
const calkowityKosztWysylki = kosztBazowy + doplata;
console.log("Całkowity koszt wysyłki: ", calkowityKosztWysylki);
// Zadanie 2: Oblicz resztę z dzielenia liczby paczek przez liczbę kierowców.
const resztaZDzielenia = liczbaPaczek % liczbaKierowcow;
console.log("Reszta z dzielenia paczek przez kierowców: ", resztaZDzielenia);
// Zadanie 3: Wylicz średnią wagę paczek.
const sredniaWagaPaczki = (wagaPaczki1 + wagaPaczki2 + wagaPaczki3 + wagaPaczki4) / 4;
console.log("Średnia waga paczki: ", sredniaWagaPaczki);
// ==========================
// 4–6: Operacje na stringach
// ==========================
const imieKlienta = "Jan Kowalski";
const nazwaPaczki = "EkoPaczka";
// Zadanie 4: Połącz dwa stringi: imię klienta oraz nazwę paczki, pamiętaj o odstępach.
const pelnaNazwaPaczki = imieKlienta + " " + nazwaPaczki;
console.log(pelnaNazwaPaczki);
// Zadanie 5: Stwórz string z użyciem template literal, który wyświetli "Klient: Jan Kowalski, Suma wag paczek: xxx".
// Pod xxx podstaw sumę wag wszystkich czterech paczek, litrały obsługują zmienne, ale takze operacje wewnatrz ${}.
const sumaWagPaczki = wagaPaczki1 + wagaPaczki2 + wagaPaczki3 + wagaPaczki4;
const podsumowanieKlienta = `Klient: ${imieKlienta}, Suma wag paczek: ${sumaWagPaczki}`;
console.log(podsumowanieKlienta);
// Zadanie 6: Utwórz wieloliniowy tekst używając znaków nowej linii oraz tabulatora.
const listaPaczek = `Lista paczek:\n\t1. ${nazwaPaczki} 1\n\t2. ${nazwaPaczki} 2\n\t3. ${nazwaPaczki} 3\n\t4. ${nazwaPaczki} 4`;
console.log(listaPaczek);
// ==========================
// 7–11: Logika biznesowa z użyciem && oraz || (bez if)
// ==========================
const czyUzytkownikPremium = true;
const posiadaRabat = false;
const wartoscKoszyka = 250;
// Zadanie 7.
const darmowaWysylka = (czyUzytkownikPremium && wartoscKoszyka > 200) || posiadaRabat;
console.log("darmowaWysylka:", darmowaWysylka);
// Zadanie 8.
const czarnyPiatek = true;
const punktyLojalnosciowe = 200;
const dodatkowyRabat = (czarnyPiatek && darmowaWysylka) || punktyLojalnosciowe > 500;
console.log("dodatkowyRabat:", dodatkowyRabat);
// Zadanie 9.
const przedmiotyWKoszyku = 4;
const sezonUrlopowy = true;
const czyPakietBenefitow = (dodatkowyRabat && przedmiotyWKoszyku > 3 && sezonUrlopowy) ||
    (!dodatkowyRabat && przedmiotyWKoszyku > 10);
console.log("czyPakietBenefitow:", czyPakietBenefitow);
// Zadanie 10.
const lataJakoKlient = 2;
const iloscZamowien = 6;
const czyZapisanyNaNewsletter = false;
const statusVIP = (lataJakoKlient >= 3 && czyZapisanyNaNewsletter) ||
    (lataJakoKlient >= 2 && iloscZamowien >= 5) ||
    (iloscZamowien > 10 && czyZapisanyNaNewsletter) ||
    lataJakoKlient > 5;
console.log("statusVIP:", statusVIP);
// Zadanie 11.
const sredniaMiesiecznychWydatkow = 1200;
const metodaPlatnosci = undefined;
const platinumStatus = (statusVIP &&
    ((sredniaMiesiecznychWydatkow > 1000 && metodaPlatnosci === "blik") ||
        (sredniaMiesiecznychWydatkow > 700 && metodaPlatnosci === "card"))) ||
    (!statusVIP &&
        sredniaMiesiecznychWydatkow > 2000 &&
        metodaPlatnosci !== "transfer");
console.log("platinumStatus:", platinumStatus);
