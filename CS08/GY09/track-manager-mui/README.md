# TrackManager házi feladatok

1. Ismerkedjünk meg a `useEffect` hookkal! Hogyan működik, mikor és mire használjuk? Mi a különbség a különböző `dependency array`-k között?
2. Oldjuk meg `useEffect` segítségével, hogy a `track`-ek a `localStorage`-ban legyenek tárolva, és onnan is töltődjenek be az alkalmazás indításakor.
3. Jelenítsük meg az `App.tsx`-ben, hogy összesen hány zeneszám van az alkalmazásban. Tegyük ezt előbb `useEffect` használatával, majd pedig anélkül.
4. Oldjuk meg `useEffect` segítségével, hogy amikor van kiválaszt zeneszám, akkor az oldal címe (`document.title`) a kiválasztott zeneszám címére változzon. Különben legyen `Track Manager`.
5. Ismerkedjünk meg a `useRef` hookkal! Hogyan működik, mikor és mire használjuk? Mi a különbség a `useState`-hez képest?
6. Tároljunk el egy `useRef` segítségével egy `clickCount` értéket, növeljük egy event handlerben, jelenítsük meg az értéket egy `alert`-ben. Jelenítsük meg a `clickCount` értékét a komponensben is. Nézzük meg, hogy mi történik!
7. Tároljuk el egy `useRef` segítségével a `TrackDetails` komponenst tartalmazó `Paper`-t: `detailsRef`. Oldjuk meg, hogy amikor kiválasztunk egy zeneszámot, akkor a `detailsRef`-ben tárolt elemre görgessünk rá `scrollIntoView({ behavior: "smooth" });`
8. Tegyük focusba a `TrackForm` egyik input mezőjét, amikor megjelenik a komponens. Vigyázz: MUI-s komponensek esetén nem a `ref`-et kell átadni, hanem a `inputRef`-et!
9. Ismerkedjünk meg a `Context` fogalmaával! Mi a `Context`? Miért van rá szükség? `useContext`-tel hogyan használjuk?
10. Hozzunk létre egy `TrackProvider` komponenst. Ez egy `wrapper` lesz, ami egy `TrackContext`-et biztosít a gyerekeinek. A `TrackContext`-ben tároljuk el a zeneszámokat és a hozzájuk tartozó műveleteket (pl. `addTrack`, `removeTrack`, stb.). Használjuk ezt a `TrackProvider`-t az `App.tsx`-ben, és használjuk a `useContext`-et a gyerekeiben, hogy elérjük a zeneszámokat és a műveleteket.
