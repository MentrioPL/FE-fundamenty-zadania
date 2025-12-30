/* 
  🚚 FASTSHIP – System Zarządzania Paczkami
  --------------------------------------------------------------
  W tym rozdziale będziesz tworzyć obiekty, interfejsy oraz korzystać 
  z Map, Set i Date. Wszystkie zadania kontynuują historię FastShip.

  1. Utwórz obiekt reprezentujący kierowcę FastShip:
     - name (string)
     - age (number)
     - isActive (boolean)
     Zapisz go w zmiennej driver.

  2. Utwórz interfejs Package opisujący paczkę:
     id: number
     weight: number
     destination: string
     priority: "standard" | "express"
     delivered: boolean

     Następnie utwórz obiekt package1 zgodny z interfejsem.

  3. Utwórz interfejs Driver i zastosuj go do obiektu driver
     z zadania 1. Dodaj do interfejsu nowe pole:
     region: string
     (uzupełnij je w obiekcie)

  4. Utwórz kopiowaną wersję obiektu package1 do zmiennej packageCopy
     za pomocą dowolnego sposobu. Następnie zmień weight w oryginalnym obiekcie.
     Sprawdź, czy kopiowany obiekt też się zmienił.
     (przygotuj console.log żeby to zauważyć)

  5. Utwórz obiekt Map o nazwie shipmentMap, gdzie kluczem będzie id paczki,
     a wartością obiekt paczki. Dodaj package1 i jeszcze jedną nową paczkę.
     Utwórz zmienną readPackage i pobierz z mapy jedną z paczek.

  6. Utwórz Set kierowców (stringi) o nazwie driverSet
     i dodaj: "Kamil", "Ola", "Ola", "Robert".
     Pokaż, że Set usuwa duplikaty.

  7. Utwórz obiekt Date reprezentujący aktualny czas.
     Następnie utwórz datę dostarczenia paczki za 3 dni.
     Datę utwórz ręcznie lub sprawdź, jak dodać dni do istniejącej daty, w dokumentacji.
     Zapisz do zmiennych: now, deliveryDate.

  8. Stwórz interfejs DeliveryInfo:
        packageId: number
        driver: string
        plannedDate: Date
        delivered: boolean

     Następnie:
     - utwórz nową Map deliveryMap z kluczem jako number
     - dodaj do mapy 2 obiekty DeliveryInfo z dowolnym kluczem
     - pobierz jeden z nich (get) i zapisz do zmiennej

  9. Załóż, że masz listę kierowców dyżurnych i kierowców aktywnych.
     Utwórz dwa Sety:
        activeDrivers = ["Ola", "Magda", "Kamil"]
        backupDrivers = ["Kamil", "Robert"]
     
     Zadanie:
     - znajdź kierowców, którzy są w obu Setach (część wspólna) i utwórz z nich tablicę assignedDrivers
     HINT: Rozpakuj activeDrivers do tablicy i użyj na niej metody filtrującej, sprawdzaj czy element występuje w drugim Secie.
     - utwórz obiekt:
          { assignedCount: number, list: string[] }
           Do assignedCount przypisz długość tablicy assignedDrivers,
           a do list przypisz tablicę assignedDrivers.

  10. Masz tablicę paczek (patrz zmienna packagesBase niżej).
      - stwórz interfejs PackageSummary:
           id: number
           label: string
           overdue: boolean
      - zamień je map() na obiekty PackageSummary i przypisz do zmiennej summaryList zawierającej tablicę obiektów PackageSummary
            label powinno mieć format: "Paczka {id} - {weight}kg"
            overdue (po terminie) powinno być true jeśli data paczki jest wcześniejsza niż dzisiejsza data
*/

// Kod bazowy (zostaw nienaruszony):

const packagesBase = [
  { id: 1001, date: new Date("2025-01-10"), weight: 10 },
  { id: 1002, date: new Date("2024-12-01"), weight: 5 },
  { id: 1003, date: new Date("2025-02-15"), weight: 7 }
]

// -----------------------------------------
// Miejsce na Twoje rozwiązania
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
