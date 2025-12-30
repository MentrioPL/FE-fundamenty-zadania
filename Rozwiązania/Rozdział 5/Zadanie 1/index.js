var RozwiazaniaZ1;
(function (RozwiazaniaZ1) {
    // 1. Utwórz zmienne z twoimi danymi osobowymi: imię i nazwisko (string), wiek (number), czy jesteś programistą (boolean).
    // Przypisz im odpowiednie wartości i typy.
    let firstName = "Jan";
    let lastName = "Kowalski";
    let age = 30;
    let isDeveloper = true;
    // 2. Zmienne mają przypisane błędne typy, popraw je.
    let developerName = "Jan Kowalski";
    let projectCompleted = false;
    // 3. W kodzie występuje wielokrotnie liczba 7, utwórz stałą z odpowiednim typem i zastąp ją we wszystkich miejscach uzycia.
    const SEVEN = 7;
    let workDays = SEVEN;
    let codeDays = SEVEN - 2;
    let reviewDays = SEVEN / SEVEN;
    let daysInYear = SEVEN * 52;
    // 4. Zmienna 'dailyGoal' ma trzymać pobraną liczbę zadań do wykonania dziennie.
    // Kazda nowa zmienna powinna być odpowiednio typowana. Utwórz zmienną i podaj jej typ, bez przypisywania wartości.
    let dailyGoal;
    // 5. Zmienna 'userScore' może przyjmować wartość liczbową lub null, gdy wynik nie został obliczony.
    // Popraw typowanie.
    let userScore = null;
    // 6. Zmienna 'apiData' i 'config' mają przechowywać dane pobrane z backendu.
    // apiData moze przyjmowac typy string, number lub boolean.
    // W przypadku config nie wiemy jaki typ danych zostanie pobrany.
    // Użyj odpowiednich typów.
    let apiData;
    let config;
    // 7. W poniższym kodzie występują błędy związane z deklaracją zmiennych. Popraw je tak, aby kod działał poprawnie.
    // Odczytaj treść błędu po najechaniu na podkreśloną część kodu.
    // Jeśli utkniesz spróbuj wpisać w google określoną treść błędu i odnaleźć rozwiązanie.
    const userName = "John Doe";
    let projectStatus = "In Progress";
    let commits = 35;
    // Poprawiona deklaracja zmiennej, aby nie było konfliktu nazw:
    let additionalCommits = 5.5;
})(RozwiazaniaZ1 || (RozwiazaniaZ1 = {}));
export {};
