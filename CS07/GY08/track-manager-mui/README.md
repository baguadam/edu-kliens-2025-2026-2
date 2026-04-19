# TrackManager - MUI

1. Jelenleg az `App.tsx`-en belül az `exampleTracks` tömb van megjelenítve. Tároljuk el a tömböt dinamikusan, használjuk a `useState`-et.
2. Oldjuk meg, hogy amikor rákattintunk egy konkrét kártyára, az adott `track` indexe eltárolódjon, és a `TrackDetails` komponens megjelenjen, ahol a kiválasztott `track` részletes adatai láthatóak legyenek.
3. Oldjuk meg, hogy a törlés gombra kattintva a kiválasztott `track` törlődjön a listából, és a `TrackDetails` komponens eltűnjön. Vigyázz a buborékolásra, hogy a törlés gomb kattintása ne aktiválja a kártya kattintási eseményét, ami a `TrackDetails` megjelenítéséért felelős.
4. Okosítsuk fel a `TrackForm` komponenst, ehhez használjuk a `controlled form` megközelítést, ilyenkor minden input mező értékét egy `állapotban` tárolunk, minden változáskor frissítjük ezt az állapotot.
5. Készítsünk egy `custom hook`-ot, ami egységbe zárja a form kezeléséhez szükséges logikát, így a `TrackForm` komponens tisztább és újrahasználhatóbb lesz.
6. Ismerkedjünk meg a `useRef` hook-kal. Hozzunk létre egy `inputRef`-et a `TrackForm` komponensben, nézzük meg, hogyan tudjuk elérni a mező értékét a `useRef` segítségével, és hasonlítsuk össze a `controlled form` megközelítéssel.
7. Ismerkedjünk meg a `useEffect` hook-kal. Oldjuk meg, hogy amikor a `TrackForm` komponens megjelenik, akkor a `inputRef`-el rendelkező mező automatikusan fókuszba kerüljön.

```js
      id: Date.now(),
      title: formState.title,
      artist: formState.artist,
      length: "0:00",
      rating: Number(formState.rating),
      thumbnailURL: "",
      spotifyURL: "",
      chordsURL: "",
      lyricsURL: "",
```
