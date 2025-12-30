"use strict";
console.log("====================ZADANIE 1======================");
let liczba = 1;
while (liczba <= 100) {
    if (liczba % 2 !== 0) {
        console.log(liczba);
    }
    liczba++;
}
const liczbaWierszyResult = document.getElementById("userNumber");
const przyciskResult = document.getElementById("submitBtn");
przyciskResult.addEventListener("click", () => {
    console.log("====================ZADANIE 2======================");
    const wiersze = Number(liczbaWierszyResult.value);
    let licznik = 1;
    for (let wiersz = 1; wiersz <= wiersze; wiersz++) {
        let wierszTekst = "";
        for (let kolumna = 1; kolumna <= wiersz; kolumna++) {
            wierszTekst += licznik + " ";
            licznik++;
        }
        console.log(wierszTekst);
    }
});
console.log("====================ZADANIE 3======================");
let trafionaSzostka;
do {
    trafionaSzostka = Math.floor(Math.random() * 6) + 1;
    console.log("Wylosowana liczba: " + trafionaSzostka);
} while (trafionaSzostka !== 6);
