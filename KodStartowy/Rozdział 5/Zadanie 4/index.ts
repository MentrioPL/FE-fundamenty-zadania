/**
 * 1. Napisz program wykorzystujący pętle while, który będzie wypisywał w konsoli wszystkie liczby nieparzyste od 1 do 100.
 */

console.log("====================ZADANIE 1======================")
// TWOJE ROZWIĄZANIE ZADANIA 1 PONIŻEJ

//

/**
 * 2. Napisz program z pętlą for, który pobierze od użytkownika ilość wierszy do utworzenia wzoru i na
 * wyjściu wyświetli następujący wzór, gdzie w kadym kolejnym wierszu jest jedna liczba więcej:
 * 1
 * 2 3
 * 4 5 6
 * 7 8 9 10
 *
 * Podpowiedź: Użyj pętli zagnieżdżonych oraz zmiennej licznik, która będzie zwiększana po każdej liczbie.
 * Podpowiedź 2: Do wyświetlenia zawartości wiersza uzyj stringa, do którego będziesz doklejać kolejne liczby.
 * Podpowiedź 3: Skorzystaj z kartki papieru i ołówka, aby rozrysować sobie logikę działania pętli.
 */

const liczbaWierszy = document.getElementById("userNumber")! as HTMLInputElement
const przycisk = document.getElementById("submitBtn")!

przycisk.addEventListener("click", () => {
  console.log("====================ZADANIE 2======================")
  const wiersze = Number(liczbaWierszy.value)
  let licznik = 1
  // TWOJE ROZWIĄZANIE ZADANIA 2 PONIŻEJ

  //
})

/**
 * 3. Napisz program z pętlą do...while, losujący liczby z przedziału 1..6, aż do momentu trafienia “szóstki”
 * Aby wylosować liczbę przypisz do zmiennej instrukcję:
 * nazwaZmiennej = Math.floor(Math.random() * 6) + 1
 */

console.log("====================ZADANIE 3======================")
// TWOJE ROZWIĄZANIE ZADANIA 3 PONIŻEJ

//
