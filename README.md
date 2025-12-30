# 🚀 Jak uruchomić projekt

Ten projekt jest podzielony na dwa główne katalogi:

- **KodStartowy** – tutaj znajdziesz zadania do wykonania.
- **Rozwiązania** – tutaj znajduje się gotowy, działający kod.
- **assets** – folder ze wspólnymi zasobami (zdjęcia itp.).

Poniżej znajdziesz instrukcję, jak przygotować środowisko do pracy.

## 1. Instalacja zależności (Krok po kroku)

Zanim zaczniesz, musisz zainstalować potrzebne biblioteki. Każdy folder (`KodStartowy` i `Rozwiązania`) jest niezależny i posiada własny plik `package.json`, więc instalację wykonujemy osobno.

Otwórz terminal w głównym folderze projektu i wykonaj następujące kroki:

### Dla folderu z zadaniami (KodStartowy):

```bash
cd KodStartowy
npm install
```

### Dla folderu z gotowymi rozwiązaniami:

Jeśli chcesz sprawdzić gotowy kod, musisz przejść do drugiego folderu i również zainstalować zależności:

```bash
cd ../Rozwiązania
npm install
```

---

## 2. Praca z TypeScript (Ważne!) ⚠️

Projekt napisany jest w języku **TypeScript (.ts)**. Przeglądarki i Node.js nie rozumieją go bezpośrednio – musi on zostać "przetłumaczony" (skompilowany) na zwykły JavaScript.

### Co to oznacza dla Ciebie?

Za każdym razem, gdy wprowadzisz jakąkolwiek zmianę w pliku `.ts`, musisz ręcznie uruchomić kompilator, aby Twoje zmiany zadziałały.

### Jak to zrobić?

Będąc w terminalu w folderze, w którym aktualnie pracujesz (np. `KodStartowy`), wpisz:

```bash
npx tsc
```

### Twój cykl pracy powinien wyglądać tak:

1. Edytujesz kod w pliku `.ts`.
2. Zapisujesz plik (`Ctrl+S` / `Cmd+S`).
3. Wpisujesz w terminalu `npx tsc`.
4. Dopiero teraz sprawdzasz efekty działania programu.

---

## 💡 Wskazówka dla ambitnych (Tryb automatyczny)

Jeśli nie chcesz wpisywać `npx tsc` po każdej zmianie, możesz uruchomić kompilator w trybie "nasłuchiwania". Będzie on automatycznie wykrywał zmiany w plikach i kompilował je w tle.

Wpisz w terminalu:

```bash
npx tsc --watch
```

_(Aby zatrzymać ten tryb, wciśnij w terminalu `Ctrl + C`)_.
