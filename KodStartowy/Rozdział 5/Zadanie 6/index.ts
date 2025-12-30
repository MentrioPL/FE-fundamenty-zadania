/* 
  🚚 FASTSHIP – SYSTEM SORTOWANIA I ANALIZY PACZEK
  --------------------------------------------------------------
  Jesteś nowym programistą w firmie FastShip. Trafiasz na istniejący juz kod,
  który działa… ale tylko „jako tako”. Twoim zadaniem jest naprawienie
  błędów i dopisanie funkcjonalności związanych z tablicami.

  0. ***Bug do naprawy***  
   W kodzie poniżej `driverNamesCopy` ma być kopią tablicy `driverNames`,
   ale coś poszło nie tak. Popraw błąd tak, aby zmiana w jednej tablicy
   nie wpływała na drugą, w innym przypadku nie wykonasz poprawnie pozostałych zadań.

  1. Do listy numerów paczek `packageIds` dopisz jedną nową paczkę (wymyślone ID) na początek tablicy,
     a następnie usuń ostatni element i zapisz usuwany element do zmiennej.

  2. W tablicy `driverNames` połącz wszystkie imiona w jeden string z separatorem „, ”.

  3. Z tablic `todayShipments` i `delayedShipments` utwórz jedną spójną tablicę
     i zapisz ją do zmiennej `allShipments`.

  4. W tablicy `driverNames` znajdź kierowcę o imieniu "Magda".

  5. Sprawdź czy w tablicy `packageIds` istnieje paczka o numerze 107.

  6. Znajdź indeks kierowcy "Kamil" w tablicy `driverNames`.

  7. Odfiltruj z `allShipments` paczki o wadze większej niż 10 kg
     i przypisz wynik do zmiennej `heavyShipments`.

  8. Za pomocą map stwórz nową tablicę `shipmentLabels`, gdzie każdy element
     będzie zdaniem: "Paczka o ID X waży Y kg".

  9. Utwórz tablicę 2-wymiarową (2D) `warehouseMap2D` zawierającą 4 regały po 3 paczki (regaly → paczki)
      i pobierz z niej konkretną paczkę (np. warehouseMap[1][1])
      zapisując w zmiennej. Odpowiednio otypuj tablicę 2D!
      Jako paczki przechowuj zwykłe liczby reprezentujące ID paczki.

  10. Na podstawie tablicy `allShipments`:
      - odfiltruj tylko paczki z priorytetem "express"
      - posortuj je rosnąco po wadze (użyj własnej funkcji sortującej, najlepiej zadeklarowanej osobno)
      i zapisz wynik do `sortedExpress`.
      Przekazywane do funkcji sortującej obiekty mają być odpowiednio otypowane (wykorzystaj interfejs).
*/

// ------------------------------------------------------
// ✔️ Kod bazowy firmy FastShip – NIE USUWAJ, JEDYNIE NAPRAW BUGA!
// ------------------------------------------------------

const packageIds: number[] = [101, 102, 103, 107]
const driverNames: string[] = ["Kamil", "Ola", "Magda", "Robert"]
const driverNamesCopy = driverNames

for (let i = 0; i < 4; i++) {
  driverNamesCopy.pop()
}

const todayShipments = [
  { id: 201, weight: 12, priority: "standard" },
  { id: 202, weight: 5, priority: "express" },
  { id: 203, weight: 8, priority: "standard" },
  { id: 204, weight: 22, priority: "express" },
  { id: 205, weight: 4, priority: "standard" },
  { id: 206, weight: 11, priority: "express" }
]

const delayedShipments = [
  { id: 301, weight: 18, priority: "express" },
  { id: 302, weight: 3, priority: "standard" },
  { id: 303, weight: 7, priority: "express" },
  { id: 304, weight: 15, priority: "standard" },
  { id: 305, weight: 2, priority: "express" },
  { id: 306, weight: 20, priority: "standard" }
]

// -----------------------------------------
// 🔽 Miejsce na Twoje rozwiązania 🔽
// -----------------------------------------

// Zadanie 1

// Zadanie 2

// Zadanie 3

// Zadanie 4

// Zadanie 5

// Zadanie 6

// Zadanie 7

// Zadanie 8

// Zadanie 9

// Zadanie 10
