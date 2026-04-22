# Quiz App

A feladat megoldása során egy egyszerű quiz alkalmazást fogunk elkészíteni. Világos, hogy a komplexitás nem indokolja, viszont gyakorlási célból most `Context`-et fogunk használni, nem pedig `prop drilling` segítségével adjuk majd át az adatokat a komponensek között.

A cél az, hogy megjelenítünk kérdéseket, minden kérdéshez tartozik négy válaszlehetőség. A felhasználó kiválasztja az általa helyesnek vélt választ, akkor automatikusan továbblépünk a következő kérdésre minden visszajelzés nélkül. Amikor a játékos megválaszolta az összes kérdést, akkor megjelenítjük neki az eredményét, hogy hány kérdésre válaszolt helyesen. Ezután lehetősége lesz újraindítani a játékot.

Az `src`-en minden elő van készítva. Ismerkedjünk meg előbb a projekt struktúrájával:

## Adatok

Az `src/data` mappában található a `questions.ts` fájl, ami egy tömböt tartalmaz kérdésekkel. Minden kérdés egy objektum, aminek van egy `question` mezője, ami maga a kérdés szövege, egy `options` mezője, ami egy tömb a lehetséges válaszokkal, és egy `answer` mezője, ami a helyes válasz értékét tartalmazza. A tömb elemei megfelelően le vannak írva a `Question` típussal.

## Komponensek

Az alkalmazás három fő komponensből: `AnswerButton`, `QuestionStep`, `Results`, és értelemszerűen az `App`-ból áll. Ha megnézed ezeket a komponenseket, láthatod, hogy mindenhol vannak kikommentelt részek, ezeket majd a megoldás során keltjük illetve.

## Stílus

Az alkalmazásban `tailwind`-et használunk a stílusokhoz. Volt már róla szó, de ismét belinkelem, hogy ezeket a lépéseket követve tudod hozzáadni a projektedhez: [Tailwind CSS Installation](https://tailwindcss.com/docs/installation/using-vite). Itt most nyilván nem szükséges, mert már megtettem.

## Feladatok

### 1. lépés: Custom Hook a kvíz állapotának kezelésére

Hozz létre egy `useQuizState` nevű custom hookot az `src/hooks` mappában, ami a kvíz állapotát kezeli. Én a következőképpen képzeltem ezt el:

1. Szükségünk van három state-re az alkalmazás működtetéséhez:
   - `currentStep`: Ez egy szám, ami azt jelzi, hogy a játékos éppen melyik kérdésnél tart (tehát ez az index, nullától indul).
   - `answers`: Ez egy tömb, amiben a játékos által adott válaszokat tároljuk.
   - `isFinished`: Ez egy boolean érték, ami azt jelzi, hogy a kvíz véget ért-e már.
2. Szükségünk van három metódusra is, amik segítségével működtetni tudjuk a kvízt:
   - `addAnswer()`: Ez a metódus egy választ vár paraméterként, amit hozzáad az `answers` tömbhöz, és növeli a `currentStep` értékét (azaz továbblépünk a következő kérdésre).
   - `reset()`: Ez a metódus visszaállítja a `currentStep`-et 0-ra, az `answers`-t egy üres tömbre, és az `isFinished`-t false-ra (tehát gyakorlatilag ez az új játék kezdése).
   - `finish()`: Ez a metódus beállítja az `isFinished`-t true-ra.
3. Ahogy azt már megszokhattuk a custom hookok esetében, adj vissza egy objektumot, amiben benne vannak a state-ek és a metódusok is.

Értelemszerűen bármilyen más implementáció teljesen jó, ha te másképpen képzeled el az alkalmazás működését.

### 2. lépés: Context létrehozása

Hozd létre a `QuizContext`-et az `src/context` mappában. Ez a context fogja biztosítani a `useQuizState` által kezelt állapotot az alkalmazás többi részének.

1. Hozd létre a `QuizContextType`-ot, ami egy `interface`-ként definiálja a context által biztosított értékek típusát. Ez az interface tartalmazza a `currentStep`, `answers`, `isFinished`, `addAnswer()`, `reset()`, és `finish()` típusait.
2. Hozd létre a `QuizContext`-et (HINT: használhatod a `createContext`-et). Típusa `QuizContextType | undefined` legyen (hiszen az értékét a `QuizProvider`-ben fogjuk megadni).
3. Ne felejts el exportálni a `QuizContext`-et!

### 3. lépés: Provider létrehozása

Hozd létre a `QuizProvider`-t az `src/context` mappában. Ez a provider fogja biztosítani a `QuizContext`-et az alkalmazás többi részének.

1. Hozd létre a `QuizProvider` komponenst, ami `props`-ként egy `children`-t vár (`React.ReactNode`).
2. A `QuizProvider`-en belül fog ülni az állapotkezelő logika, amit a korábban létrehozott `useQuizState` custom hook biztosít. Tárold el a `useQuizState` által visszaadott értékeket egy változóban, például `quizState`.
3. A `QuizProvider`-ben csomagold be a `children`-t egy `QuizContext.Provider`-be, és a `value`-ként add át neki a `quizState`-et. (Ha bizonytalan vagy, nézd meg, hogyan csináltuk ezt a részt órán)
4. Ne felejts el exportálni a `QuizProvider`-t!

### 4. lépés: Hook létrehozása a context használatához

Hozd létre a `useQuiz` custom hookot az `src/hooks` mappában, ami a `useContext` segítségével visszaadja a `QuizContext` értékét.

1. Hozd létre a `useQuiz` custom hookot, ami nem vár paramétereket.
2. A `useQuiz`-ban használd a `useContext`-et a `QuizContext`-tel, és tárold el az értékét egy változóban.
3. Ellenőrizd, hogy a `useContext` által visszaadott érték nem `undefined`-e. Ha igen, akkor dobj egy hibát, ami jelzi, hogy a `useQuiz`-t csak a `QuizProvider`-en belül lehet használni.
4. Térj vissza a `useContext` által visszaadott értékkel.

### 5. lépés: Provider bekötése

A `main.jsx`-en belül csomagold be az `App` komponenst a `QuizProvider`-be, hogy az alkalmazás minden része hozzáférjen a `QuizContext`-hez.

### 6. lépés: App.tsx

Az `App` komponens elő van készítve, mindent tartalmaz, amire szükséged van, csupán csak a kommenteket kell kivenned. Itt a következő történik:

1. Beimportáljuk a `useQuiz`-t, hogy hozzáférjünk a context értékeihez.
2. Destrukturáljuk a `currentStep` és `isFinished` értékeket a `useQuiz` által visszaadott objektumból.
3. Feltételesen megjelenítjük vagy a `Results` (ha a kvíz véget ért), vagy a `QuestionStep` komponenst (ha még nem ért véget).

### 7. lépés: QuestionStep.tsx

1. Töröld a "Még nincs implementálva" szöveget tartalmazó `p` taget.
2. Szedd ki a kommenteket.
3. Ekkor láthatod, hogy a `questions` tömb megfelelő indexeléséhez szükséges tudni, hogy éppen melyik kérdésnél tartunk, amit a `currentStep` tartalmaz. Használd itt is a `useQuiz`-t, hogy hozzáférj a `currentStep`-hez.

### 8. lépés: AnswerButton.tsx

1. Töröld a "Még nincs implementálva" szöveget tartalmazó `p` taget.
2. Szedd ki a kommenteket.
3. Ebben a komponensben az `addAnswer()` függvényre van szükségünk, hiszen bármikor, amikor rákattintunk egy válasz opcióra, szeretnénk megjelölni azt válaszként, és léptetni az alkalmazás. Ezért használd a `useQuiz`-t, hogy hozzáférj az `addAnswer()`-hez.

### 9. lépés: Results.tsx

1. Töröld a "Még nincs implementálva" szöveget tartalmazó `p` taget.
2. Szedd ki a kommenteket.
3. Ebben a komponensben szükséged lesz az eddigi válaszokra, hogy pontszámot tudjunk számolni belőlük (`answers`), valamint a `reset()` függvényre, hogy újra lehessen indítani a játékot. Használd a `useQuiz`-t, hogy hozzáférj ezekhez.

## Összegzés

Készen is vagy, ha mindent jól csináltál, akkor tesztelheted a tudásodat a brainrot birodalmában. Ha esetleg valahol az import megcsúszott a skeletonban, azért bocsi, és kérlek javítsd ki!
