/**
 * 1. W polu na wstawienie kodu dodaj logikę kalkulatora, który wykonuje proste operacje matematyczne (+, -, *, /, %)
 * na dwóch liczbach podanych przez użytkownika 'a' i 'b'.
 * Wykorzystaj do tego instrukcję warunkową if...else if...else.
 * Wynik działania powinien zostać zapisany do zmiennej `result`.
 * Porównaj wartość zmiennej `operator` i w zależności od jej wartości wykonaj odpowiednią operację matematyczną.
 * Obsłuż przypadki:
 * - dodawanie (+)
 * - odejmowanie (-)
 * - mnożenie (*)
 * - dzielenie (/), w przypadku dzielenia przez zero, uzyj ternary operator do przypisania 'result' stringa "Błąd: dzielenie przez zero!"
 * - modulo (%)
 * - w przypadku nieznanej operacji, ustaw `result` na "Nieznana operacja!".
 *
 * Nie ruszaj kodu poza wyznaczonym miejscem.
 * W przypisaniu 'resultField.textContent = result' zadbaj o to, aby 'result' był stringiem za pomocą konwersji typów.
 *
 * 2. Wykonaj zadanie 1 ponownie tym razem używając instrukcji switch.
 */
const inputA = document.getElementById("valueA")! as HTMLInputElement
const inputB = document.getElementById("valueB")! as HTMLInputElement
const operationInput = document.getElementById("operation")! as HTMLInputElement

const resultField = document.getElementById("resultValue")!
const calculateBtn = document.getElementById("calculateBtn")!
const clearBtn = document.getElementById("clearBtn")!

calculateBtn.addEventListener("click", () => {
  const a = Number(inputA.value)
  const b = Number(inputB.value)
  const operator = operationInput.value.trim()

  if (inputA.value === "" || inputB.value === "" || operator === "") {
    resultField.textContent = "Uzupełnij wszystkie pola!"
    return
  }

  let result: string | number

  // TUTAJ WSTAW SWÓJ KOD

  resultField.textContent = result
  // KONIEC KODU

  console.log(`Wynik operacji ${a} ${operator} ${b} = ${result}`)
})

clearBtn.addEventListener("click", () => {
  inputA.value = ""
  inputB.value = ""
  operationInput.value = ""
  resultField.textContent = "---"

  console.log("Wyczyszczono formularz.")
})
