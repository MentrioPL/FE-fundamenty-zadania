/* 
==========================
 FASTSHIP –  KLASY
==========================
FastShip dynamicznie się rozwija. Po wprowadzeniu obsługi przesyłek, opinii, logowania i panelu pracownika, przyszedł czas na uporządkowanie modelu danych dla paczek. Do tej pory korzystano z obiektów tworzonych „na dziko”, przez co kod stał się trudny do utrzymania.
Firma prosi Cię o stworzenie klas opisujących przesyłki, a z czasem – klas bardziej szczegółowych dla różnych typów paczek (np. standardowa, ekspresowa, ponadgabarytowa).
W kolejnych zadaniach będziesz rozbudowywać te klasy, dodawać metody, korzystać z dziedziczenia, pól prywatnych/protected, klas abstrakcyjnych oraz interfejsów.
Finalnie projekt ewoluuje tak bardzo, że główna klasa Parcel przestaje wystarczać i zmienia się w klasę abstrakcyjną, po której dziedziczą wszystkie konkretne typy przesyłek.
-----------------------------------

1) Stwórz klasę `Parcel`, która przyjmuje w konstruktorze:
      - id (string)
      - weight (number)
      - destination (string)

   W środku utwórz metodę `getInfo()`, która zwraca string z danymi paczki.
   `Paczka ID → DESTINATION, waga: WEIGHT kg, koszt: COST zł`
   Utwórz dwa obiekty tej klasy.

2) Dodaj pole prywatne `status` (string), z domyślną wartością "created".  
   Dodaj metodę `setStatus(newStatus: string)` i `getStatus()` zwracającą ustawioną wartość dla tego pola, które są odpowiednio setterem i getterem dla prywatnego pola.
   Zaktualizuj statusy obiektów z zadania 1 na "in-transit" i "awaiting-pickup".

3) Dodaj do klasy pole prywatne `cost: number` (ALE WIDZIALNE W PODKLASACH!), ustawiane w konstruktorze.
   Zmień konstruktor tak, aby przyjmował cost jako ostatni parametr.


   ////// TU SKONCZYLEM

4) Stwórz klasę `ExpressParcel`, która dziedziczy po `Parcel`.
   Koszt wysyłki ustaw na podstawie wagi: weight * 1.6 i wywołaj contructor klasy Parcel.
   Nadpisz metodę `getInfo()` tak, aby dopisywała tekst "(EXPRESS)".

5) Stwórz klasę `HeavyParcel`, dziedziczącą po `Parcel`.
   Koszt licz jako: weight * 2.4 i wywołaj contructor klasy Parcel.
   Dodaj metodę `isOverLimit()` zwracającą true jeśli paczka waży ponad 50kg.

6) Stwórz interfejs `Trackable` z metodą `track(): string`.
   Niech klasa `ExpressParcel` implementuje ten interfejs.
   Zaktualizuj odpowiednio klasę.

7) Dodaj nową metodę do klasy `Parcel` – `calculateDeliveryTime()` zwracającą string z komunikatem,  
   ale zostaw ją pustą, bo ma zależeć od typu paczki (więc to co ma zwracać tylko otypuj).
   Następnie zmień klasę `Parcel` w KLASĘ ABSTRAKCYJNĄ i oznacz tę metodę jako abstrakcyjną.

8) Zaktualizuj klasy `ExpressParcel` i `HeavyParcel`, aby implementowały
   metodę `calculateDeliveryTime()`, zwracając:
       - ExpressParcel: ok. 1 dzień
       - HeavyParcel: jeśli powyżej 70kg to 4–5 dni, w przeciwnym razie 2–3 dni.

9) Ponieważ `Parcel` stała się klasą abstrakcyjną, nie możesz tworzyć obiektów klasy `Parcel`.  
   Przerób obiekty stworzone wcześniej na swoje odpowiednie podklasy.

10) Przetestuj wszystkie klasy, tworząc obiekty i wywołując ich metody w console.log.
*/
