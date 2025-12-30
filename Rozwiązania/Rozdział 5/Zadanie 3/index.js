"use strict";
const inputAResult = document.getElementById("valueA");
const inputBResult = document.getElementById("valueB");
const operationInputResult = document.getElementById("operation");
const resultFieldResult = document.getElementById("resultValue");
const calculateBtnResult = document.getElementById("calculateBtn");
const clearBtnResult = document.getElementById("clearBtn");
calculateBtnResult.addEventListener("click", () => {
    const a = Number(inputAResult.value);
    const b = Number(inputBResult.value);
    const operator = operationInputResult.value.trim();
    if (inputAResult.value === "" ||
        inputBResult.value === "" ||
        operator === "") {
        resultFieldResult.textContent = "Uzupełnij wszystkie pola!";
        return;
    }
    let result;
    // TUTAJ WSTAW SWÓJ KOD
    // if (operator === "+") {
    //   result = a + b
    // } else if (operator === "-") {
    //   result = a - b
    // } else if (operator === "*") {
    //   result = a * b
    // } else if (operator === "/") {
    //   result = b === 0 ? "Błąd: dzielenie przez zero!" : a / b
    // } else if (operator === "%") {
    //   result = a % b
    // } else {
    //   result = "Nieznana operacja!"
    //   return
    // }
    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = b === 0 ? "Błąd: dzielenie przez zero!" : a / b;
            break;
        case "%":
            result = a % b;
            break;
        default:
            result = "Nieznana operacja!";
            break;
    }
    resultFieldResult.textContent = String(result);
    // KONIEC KODU
    console.log(`Wynik operacji ${a} ${operator} ${b} = ${result}`);
});
clearBtnResult.addEventListener("click", () => {
    inputAResult.value = "";
    inputBResult.value = "";
    operationInputResult.value = "";
    resultFieldResult.textContent = "---";
    console.log("Wyczyszczono formularz.");
});
