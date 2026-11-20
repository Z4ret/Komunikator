# Standardy nazewnictwa i wersjonowania projektu

Ten dokument opisuje zasady nazewnictwa, tworzenia commitów, branchy
oraz tagów Git. Celem jest zachowanie spójności i czytelności
repozytorium.

## 1. Ogólne zasady

-   Stosuj `snake_case` w nazwach własnych projektu, jeśli dana
    technologia lub narzędzie nie narzuca innej konwencji.
-   Używaj krótkich, konkretnych i opisowych nazw.
-   Unikaj spacji, polskich znaków diakrytycznych i niejednoznacznych
    skrótów w nazwach plików, branchy i identyfikatorów.
-   Nie mieszaj kilku konwencji w obrębie tego samego rodzaju nazw.
-   Zachowuj konwencje wymagane przez język, framework lub narzędzie.
    Przykładowo klasy w wielu językach zapisuje się jako `PascalCase`.

## 2. Nazewnictwo

### Pliki i katalogi

Preferuj małe litery i `snake_case`.

Przykłady: - `user_service.py` - `database_connection.py` -
`api_routes/` - `user_profiles/`

Unikaj: - `UserService.py` - `database-connection.py` - `Nowy Plik.py`

Wyjątki: nazwy wymagane przez narzędzia lub standardy, np. `README.md`,
`Dockerfile`, `LICENSE`, `package.json`.

### Zmienne i funkcje

Stosuj `snake_case`, o ile język nie wymaga innej konwencji.

Przykłady: - `user_name` - `total_price` - `get_user_data()` -
`validate_email()`

Nazwy powinny opisywać przeznaczenie. Unikaj nazw typu `x`, `tmp` lub
`data`, jeśli nie są oczywiste z kontekstu.

### Klasy i typy

Stosuj konwencję wymaganą przez język lub framework. W wielu językach
standardem dla klas jest `PascalCase`, np. `UserService`. Nie wymuszaj
`snake_case`, jeśli byłoby to sprzeczne z konwencją języka.

### Branche

Używaj małych liter, `snake_case` i prefiksu opisującego cel brancha.

Schemat:

`typ/krotki_opis`

Przykłady: - `feat/user_login` - `feat/password_reset` -
`fix/invalid_token` - `docs/update_readme` - `refactor/user_service`

Zalecane typy: - `feat/` -- nowa funkcjonalność - `fix/` -- naprawa
błędu - `docs/` -- dokumentacja - `refactor/` -- przebudowa kodu bez
zmiany zachowania - `test/` -- testy - `chore/` -- konfiguracja i prace
utrzymaniowe

Nie używaj spacji ani polskich znaków w nazwach branchy.

## 3. Commity -- Conventional Commits

Każdy commit powinien mieć krótki, konkretny opis.

Schemat:

`typ(scope): opis`

`scope` jest opcjonalny. Zalecany język opisów commitów: angielski, aby
historia projektu była czytelna dla szerszego grona osób. Dokumentacja
projektu może pozostać po polsku.

Przykłady: - `feat(auth): add user login` -
`fix(api): handle empty response` -
`docs(readme): update installation guide` -
`refactor(user_service): simplify validation` -
`test(auth): add login tests` - `chore(deps): update dependencies`

Podstawowe typy: - `feat` -- dodanie funkcjonalności - `fix` -- naprawa
błędu - `docs` -- zmiana dokumentacji - `style` -- formatowanie lub styl
kodu bez zmiany logiki - `refactor` -- przebudowa kodu bez dodawania
funkcji i bez naprawiania błędu - `test` -- dodanie lub zmiana testów -
`chore` -- prace techniczne i utrzymaniowe - `build` -- zmiany systemu
budowania lub zależności - `ci` -- zmiany konfiguracji CI/CD - `perf` --
poprawa wydajności

Zasady: - Jeden commit powinien obejmować jedną logiczną zmianę. -
Używaj trybu rozkazującego w opisie, np. `add`, `fix`, `update`. - Nie
kończ opisu kropką. - Nie używaj ogólnych opisów typu `changes`,
`update` lub `fix stuff`. - Jeśli używasz `scope`, zapisuj go małymi
literami; dla nazw wielowyrazowych stosuj `snake_case`.

## 4. Tagi i wersjonowanie

Do oznaczania wydań stosuj Semantic Versioning (SemVer).

Format:

`vMAJOR.MINOR.PATCH`

Przykłady: - `v1.0.0` -- pierwsze stabilne wydanie - `v1.1.0` -- nowa
funkcjonalność, kompatybilna wstecz - `v1.1.1` -- poprawka błędu -
`v2.0.0` -- zmiana niekompatybilna wstecz

Znaczenie numerów: - **MAJOR** -- zmiany niekompatybilne wstecz. -
**MINOR** -- nowe funkcjonalności kompatybilne wstecz. - **PATCH** --
poprawki błędów kompatybilne wstecz.

Nazwy tagów są celowym wyjątkiem od `snake_case`: zapis `v1.2.3` wynika
ze standardu SemVer. Nie dodawaj do tagów nazw opisowych, takich jak
`pierwsza_wersja`; szczegóły wydania umieść w opisie Release.

### Kiedy tworzyć tag?

-   Nie twórz tagu po każdym commicie.
-   Twórz tag, gdy oznaczasz konkretną wersję projektu, którą chcesz
    zachować lub opublikować.
-   Wydania stabilne oznaczaj np. `v1.0.0`.
-   Wersje testowe możesz oznaczać np. `v1.0.0-alpha.1`, `v1.0.0-beta.1`
    lub `v1.0.0-rc.1`.

## 5. Najczęściej używane komendy Git

### Sprawdzenie branchy i tagów

``` bash
git branch
git branch -a
git tag
```

### Utworzenie brancha

``` bash
git switch -c feature/user_login
```

### Utworzenie opisanego tagu

Najpierw upewnij się, że jesteś na właściwym branchu i że zmiany
przeznaczone do wydania są zatwierdzone.

``` bash
git switch main
git pull
git tag -a v1.0.0 -m "First stable release"
```

### Wysłanie brancha na GitHub

``` bash
git push -u origin feature/user_login
```

### Wysłanie pojedynczego tagu na GitHub

``` bash
git push origin v1.0.0
```

### Wysłanie wszystkich lokalnych tagów

``` bash
git push origin --tags
```

### Szczegóły tagu

``` bash
git show v1.0.0
```

### Usunięcie tagu

Usuń lokalny tag:

``` bash
git tag -d v1.0.0
```

Usuń tag ze zdalnego repozytorium:

``` bash
git push origin --delete v1.0.0
```

Usuwaj tagi ostrożnie, szczególnie jeśli wydanie zostało już
udostępnione innym osobom.

## 6. Przykładowy workflow

1.  Zaktualizuj `main`:

    ``` bash
    git switch main
    git pull
    ```

2.  Utwórz branch dla zadania:

    ``` bash
    git switch -c feature/user_login
    ```

3.  Wprowadzaj zmiany i zapisuj je czytelnymi commitami:

    ``` bash
    git add .
    git commit -m "feat(auth): add user login"
    ```

4.  Wyślij branch na GitHub:

    ``` bash
    git push -u origin feature/user_login
    ```

5.  Otwórz Pull Request i po sprawdzeniu połącz zmiany z `main`.

6.  Gdy projekt osiągnie gotową wersję, utwórz tag na odpowiednim
    commicie:

    ``` bash
    git switch main
    git pull
    git tag -a v1.0.0 -m "First stable release"
    git push origin v1.0.0
    ```

7.  Opcjonalnie utwórz GitHub Release dla tagu i opisz najważniejsze
    zmiany.

## 7. Szybka ściąga

  Element   Konwencja              Przykład
  --------- ---------------------- -------------------------
  Plik      `snake_case`           `user_service.py`
  Katalog   `snake_case`           `api_routes/`
  Zmienna   `snake_case`           `user_name`
  Funkcja   `snake_case`           `get_user_data()`
  Klasa     zgodnie z językiem     `UserService`
  Branch    `typ/snake_case`       `feature/user_login`
  Commit    Conventional Commits   `feat(auth): add login`
  Tag       SemVer                 `v1.2.0`

**Najważniejsza zasada:** stosuj `snake_case` konsekwentnie tam, gdzie
pasuje, ale nie zmieniaj standardów narzędzi i języków. Dla commitów
używaj Conventional Commits, a dla wydań Semantic Versioning.
