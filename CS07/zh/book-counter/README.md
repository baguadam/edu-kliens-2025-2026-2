# Könyvszámláló (7.0 pont)

A feladat célja, hogy görgetés során az éppen viewportba érő statisztikai adatokat animálva megjelenítsük! Az oldal betöltésekör csupán egy szöveg fogad minket: kezdjünk el görgetni. Görgetés hatására szeretnénk elérni, hogy a viewportba kerülő boxok megjelenjenek, alkalmazzuk rájuk a megfelelő háttérszínt: **data-color**, illetve animálva pörgessük fel a számlálót a megadott értékig: **data-value**

A feladat célje, hogy görgetés során egy globális változóban tároljuk, hogy hány könyvet láttunk már az oldalon jelenlévő könyvek közül. Akkor tekintünk egy könyvet látottnak, ha az a viewportba `90%`-ban belekerül. Ha egy könyvet már egyszer láttunk, akkor azt újra (azaz további görgetések során) nem számoljuk bele a látott könyvekbe. Ezt úgy valósítjuk meg, hogy a látott könyveket egy `data attribútummal` jelöljük meg, például `data-seen="true"`.

\a (3.0 pont)

- Tárold el `cards` néven az össze `book-card` stílusosztállyal ellátott elemet.
- Tárold el `seenSpan` néven a `seen` id-val ellátott `<span>` elemet, `totalSpan` néven pedig a `total` id-val ellátott `<span>` elemet, mindig a `seenSpan`-ben jelenítjük meg a látott könyvek számát, a `totalSpan` nyilván változatlan lesz.
- Állíts be a `totalSpan` `textContent`-jének a `cards` elemeinek számát, vagyis hogy hány könyv van összesen az oldalon.
- Hozz létre egy globális változót `seenCount` nével, kezdeti értéke legyen `0`.

\b (2.0 pont)

- Írd meg az `onObserve` callback functiont az observer számára, menj végig az entry-ken, amikor épp a viewportban vannak:
  - ha a `dataset`-nek a `seen` értéke `true`, egyszerűen térj vissza (return), hiszen ezt a könyvet már láttuk, nem számoljuk újra
  - ha nem, akkor állítsd be a `dataset`-nek a `seen` értékét `true`-ra, növeld meg a `seenCount`-ot eggyel, és állítsd be a `seenSpan` `textContent`-jét a `seenCount` értékére
  - szedd ki a `dataset`-ből az `accent` értékét, majd add hozzá az aktuális target stílushoz valahogy így:
  ```js
  entry.target.style.setProperty("--accent", accent); // vagy ahogy nevezed a dolgokat
  ```
  - add hozzá az `seen` stílusosztályt az aktuális targethez

\c (1.0 pont)

- Példányosíts egy IntersectionObserver objektumot, használd a fenti callback functiont
- Állítsd be, hogy a detektáláshoz elegendő legyen, hogy az elem magasságának 80%-a érjen a viewportba

d\ (1.0 pont)

- Figyeld meg a `cards` NodeList minden elemét az observerrel.
