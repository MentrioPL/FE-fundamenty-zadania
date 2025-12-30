/**
 * Pracujesz w firmie „FastShip”, która zajmuje się automatyzacją logistyki paczek.
 * Twój zespół tworzy moduł odpowiedzialny za obliczenia dotyczące wysyłek.
 * Twoim zadaniem jest napisać zestaw funkcji, które firma później wykorzysta w systemie.
 *
 * 1. Napisz zwykłą funkcję (z użyciem `function`) o nazwie `calculateShippingCost`,
 *    która przyjmie wagę paczki (number) i zwróci koszt wysyłki (np. weight * 2).
 *
 * 2. Napisz funkcję strzałkową `formatPackageLabel`,
 *    która przyjmie nazwę klienta (string) i zwróci tekst w stylu:
 *    "Etykieta dla klienta: ...".
 *
 * 3. Napisz funkcję `getDriverName`, która zwraca string z imieniem kierowcy.
 *
 * 4. W kodzie poniżej znajdziesz fragment powtórzony w 3 miejscach.
 *    Zrefaktoruj go – przenieś powtarzające się linie do funkcji
 *    o nazwie `logPackageStatus(status: string)`.
 *
 * 5. Napisz funkcję `scheduleDelivery`,
 *    która ma parametr obowiązkowy: `day: string`
 *    oraz parametr opcjonalny `urgent: boolean`.
 *    Niech zwraca komunikat string, w dwoch wersjach w zaleznosci od tego czy urgent jest truthy czy nie.
 *
 * 6. Napisz funkcję `assignPackage`,
 *    która ma parametr `driver: string`
 *    oraz drugi parametr `packageId: string`, który domyślnie przyjmuje wartość "UNKNOWN".
 *    Funkcja ma wyświetlać tekst informujący: 'Paczka o ID xxx została przydzielona do kierowcy xxx'.
 *
 * 7. Przetestuj utworzone funkcje wyświetlając ich dane w konsoli.
 */

// Kod startowy
let statusPaczki = "GOTOWA DO WYSYŁKI"
console.log("Paczka odebrana z magazynu")
console.log(`Status: ${statusPaczki}`)

let statusPaczki2 = "ODEBRANO OD NADAWCY"
console.log("Paczka odebrana z magazynu")
console.log(`Status: ${statusPaczki2}`)

let statusPaczki3 = "DOSTARCZONO"
console.log("Paczka odebrana z magazynu")
console.log(`Status: ${statusPaczki3}`)
