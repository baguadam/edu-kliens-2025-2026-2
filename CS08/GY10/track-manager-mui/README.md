# Órai feladatok

Készítsünk egy demo authentikációt az alkalmazásunkban. Ehhez használjuk a Context API-t. Emlékezzünk, mik voltak a Context létrehozásának és használatának a lépései:

- Context létrehozása: `createContext`
- Provider komponens létrehozása: `UserContext.Provider`
- Adatok elérése: `useContext(UserContext)`

## useUserState

Hozzunk létre egy `useUserState` custom hook-ot, amiben az alábbiakat valósítjuk meg:

- `user` state, ami egy objektumot tárol a felhasználó adataival (`name`, `token`), kezdetben `null` értékkel.
- `login` függvény, ami egy `User` objektumot kap paramé@terként és frissíti a `user` state-et.
- `logout` függvény, ami törli a `user` state-et, azaz visszaállítja `null`-ra.

## UserContext

Hozzuk létre a Context-et, ehhez használjuk a `createContext`-et. Definiáljuk a `UserContextType`-ot, ami tartalmazza a `user` objektumot, a `login` és `logout` függvényeket.

```js
interface UserContextType {
  user: User;
  login: (user: User) => void;
  logout: () => void;
}
```

## UserProvider

Hozzuk létre a `UserProvider` wrapper komponenst, ami magába foglalja a `useUserState`-et és a `UserContext.Provider`-t. A `value` prop-ban adjuk át a `user`, `login`, és `logout` értékeket. Fontos, hogy itt ül az összes logika, ami a felhasználói állapot kezeléséért felelős. A `main.tsx`-ben csomagoljuk be vele az egész alkalmazást, így bárhol elérhető lesz a Context.

## useUser

Hozzunk létre egy `useUser` custom hook-ot, ami magába zárja a `useContext(UserContext)`-et, így könnyen elérhetővé teszi a `user`, `login`, és `logout` értékeket bárhol az alkalmazásban. Ez csak egy egyszerű wrapper, de megkönnyíti a Context használatát, akár ki is hagyhatjuk, és használhatjuk közvetlenül a `useContext(UserContext)`-et.

## Használat az App.tsx-ben

Használjuk a `useUser` hook-ot az `App.tsx`-ben. Attól függően, hogy van-e bejelentkezett felhasználó, jelenítsünk meg egy `Login` vagy egy `Logout` gombot, amik megfelelően meghívják a `login` és `logout` függvényeket (értelemszerűen a `Login` gomb egy demo `User` objektummal hívja meg a `login`-t). Ez egy egyszerű módja annak, hogy teszteljük a Context működését.

## RequireAuth

Hozzunk létre egy `RequireAuth` komponenst, ami wrapperként fog működni. Ez a komponens ellenőrzi, hogy van-e bejelentkezett felhasználónk. Ha van bejelentkezett felhasználó, akkor megjelenító a `children`-eket. Egyébként kap egy opcionális `fallback` prop-ot (`React.ReactNode`), amit megjelenít, ha nincs bejelentkezve senki. Oldjuk meg a segítségével, hogy az `App.tsx`-ben a `TrackForm` csak akkor jelenjen meg, ha van bejelentkezett felhasználó.

```js
interface RequireAuth {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
```
