# Receptek

A feladat során egy "receptkönyvet" fogunk létrehozni, amiben különböző recepteket tárolunk majd. Ezeket kilistázzuk kártya formájában.

## 1. lépés: Projekt létrehozása

Hozz létre egy új React projektet:

```bash
npm create vite@latest
```

A projekt neve lehet bármi, használjuk az egyszerű `TypeScript` template-et.

## 2. lépés: Projekt struktúrája

Alakítsd ki a projekt struktúráját!

Az `src` mappán belül hozd létre a következő mappákat:

- `components`: ide kerülnek az újrahasználható komponensek, mint például a recept kártya.
- `pages`: ide kerülnek a oldalszintű komponensek, mint például a recept lista oldal.
- `data`: ide kerülnek a receptek adatai, például egy `recipes.ts` fájlban.
- `assets`: ide kerülnek a képek és egyéb statikus fájlok.

## 3. lépés: Adatok létrehozása

Hozz létre egy `recipes.ts` fájlt a `data` mappában, definiálj egy `inteface`-t, amivel leírod, hogyan néz ki egy recept, ez tartalmazhat kedved szerint bármit, viszont egy `id`-val mindenképp lásd el, illetve szükséges eltárolni az adott recepthez tartozó képet is. Erre egy megoldás lehet, ha beimportálod a képeket az `assets` mappából, és a recept objektumokban eltárolod a kép elérési útját. Példa az interface-re és egy recept objektumra:

```typescript
import pancakeImage from "../assets/pancakes.png";

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  image: string; // Kép elérési útja
}

const pancakeRecipe: Recipe = {
  id: 1,
  name: "Pancakes",
  ingredients: ["Cukor", "Liszt", "Ferenc", "Lekvár"],
  instructions: "Süsd meg!",
  image: pancakeImage, // Kép elérési útja
};
```

Hozz létre több receptet, tárold őket egy tömbben, exportáld a tömböt, hogy más fájlokban is elérhető legyen.

> ### 💡 MEGJEGYZÉS
>
> Kezdetben érdemes létrehozni a "skeleton" komponensenseket, amik csak visszaadnak egy `<h1>` elemet például. Rakd össze előbb a komponensek hierarchiáját, majd utána kezdj el foglalkozni a részletekkel: ki milyen adatok kap, hogyan néz ki a props, mit jelenít meg, stb.

Struktúra:

```
App
└───Recipes
    └───RecipeList
        └───RecipeCard
```

## 4. lépés: Recipes

Hozd létre a `Recipes` komponenst a `pages` mappában. Ez a komponens lesz a "főoldala" az alkalmazásnak, itt fogjuk kilistázni a recepteket. Importáld be a recepteket a `data/recipes.ts` fájlból. Add hozzá a `Recipes` komponst az `App.tsx`-hez, hogy megjelenjen az alkalmazásban.

## 5. lépés: RecipeList

A `components` mappában hozz létre egy `RecipeList` komponenst:

- A komponenst a `Recipes` komponensben használjuk
- A `RecipeList` komponens egy prop-ot fog kapni a `Recipes` komponensből, ami egy recept tömb lesz

## 6. lépés: RecipeCard

A `components` mappában hozz létre egy `RecipeCard` komponenst:

- A komponenst a `RecipeList` komponensben használjuk
- A `RecipeCard` komponens egy prop-ot fog kapni a `RecipeList` komponensből, ami egy konkrét recept objektum lesz

## 7. lépés: Összekötés

Most, hogy megvannak az alap komponensek, kösd össze őket:

- definiáld megfelelően az interface-eket: `RecipeListProps` és `RecipeCardProps`
- a `RecipeList` komponensben iterálj végig a recepteken (`map`), és minden recepthez renderelj egy `RecipeCard`-ot, aminek átadod az aktuális recept objektumot prop-ként. (FONTOS: ne felejtsd el a `key`-t beállítani!)
- a `RecipeCard` komponensben jelenítsd meg a receptedről szóló információkat, illetve a képet is!

## 8. lépés: Stílusok

Ha van kedved és időd, akkor kísérletezz a stílusokkal is! Használhatsz egyszerű CSS-t, CSS modulokat. Én azt javaslom, hogy a komponensek mellé hozz létre CSS modul fájlokat (`module.css`), csak hogy ismerkedj kicsit ezeknek a használatával is. A lényeg, hogy a receptek kártyák jól nézzenek ki, és a kép is megfelelően jelenjen meg.
