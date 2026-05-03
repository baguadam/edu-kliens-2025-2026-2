# Routing

1. Általában egy oldal közös elemei alkotják a `Layout`-ot. Definiálj itt is egy `Layout` komponens. A Layout Komponensen belül mindig renderelve vannak az oldal azon részei, amik általánosságban jelen vannak, illetve a `children`-ek, amik az egyes oldalak tartalmát jelentik. Használata például:

```jsx
<Layout>
  <Home>
  <Playlists>
</Layout>
```

2. Szeretnénk a menüt működőképessé tenni, és az egyes menüpontokra kattintva a megfelelő komponenseket megjeleníteni, azaz az oldalon belül navigálni. Ehhez használjuk a [React Router](https://reactrouter.com/)-t. Alakítsuk ki ennek segítségével a routingot, valami hasonló struktúrát létrehozva:

```js
<BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/tracks" element={<Tracks />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </Layout>
</BrowserRouter>
```

3. Tegyük működőképessé a navigációt! Ehhez a Navbar komponsben kell a navigációt specifikálni. Használjuk először a Link komponenst a react-router-ből, itt a To attribútummal tudjuk megadni, hogy hova akarunk menni:

```js
import { Link } from "react-router-dom";

//...
<Link className="item" to="/playlists">
  <i className="headphones icon"></i> My Playlists
</Link>;
//...
```

4. Nézzük meg, hogy mi változik, ha a `Link` helyett a `NavLink`-et használjuk!

5. Hozzunk létre egy magasabb szintű route-ot. Első körben létre kell hozni egy legfelső színtű route-ot, ebbe teszem bele az összes többit. Neki elementkét állítom be, hogy mi legyen a legmagasabb szintű route, ez nyilván a Layout lesz. Ebből következik, hogy így a korábbi Layout wrappert ki kell vennem most már a Routes körül. Így ebbe a magasabb szintű Route-ba teszem bele a többi Route elemet. A default útvonalat megjelölöm az index attribútummal:

```js
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route path="/tracks" element={<Tracks />} />
      <Route path="/search" element={<Search />} />
    </Route>
  </Routes>
</BrowserRouter>
```

Ismerkedjünk meg az `Outlet` komponenssel!

6. A `/*` segítségével tudok bármilyen megadott route-ra matchelni, így ennek a segítségével tudjuk azt is megoldani, hogy ha olyan route érkezik, ami nincs defininálva, akkor automatikusan dobjon vissza a Homera. Ehhez a `Navigate`-et fogjuk alkalmazni:

# Auth

Készítsük elő az állapotterünket! Ez gyakorlatban egy user objektum ürességét, illetve tárolását jelenti. Mivel a szerver JWT-t használ hitelesítésre, ezért azt is eltároljuk:

```js
const initialState = { user: null, token: null };
```

1. Készítsünk egy hitelesítő slice-ot (authSlice), aminek két akciója és reducere van:

- `login`: beállítja a user és token értékeket
- `logout`: törli a user és token értékeket

2. Legyenek szelektorok a user és a token lekérdezésére (selectLoggedInUser, selectAuthToken)

Emlékezzünk vissza ezen a ponton a korábbi `useUserState` custom hookunkra:

```js
export interface User {
  name: string;
  token: string;
}

const useUserState = () => {
  const [user, setUser] = useState<User | null>(null);
  const login = (newUser: User) => setUser(newUser);
  const logout = () => setUser(null);

  return { user, login, logout };
};

export default useUserState;
```

3. Okosítsuk fel a `LoginForm` komponenst egyelőre csak annyival, ha a felhasználó elküldi a formot, és az tartalmaz értékeket, állítsuk be a user értékét az `email`-re, a tokent pedig valami random stringre. Tekintsük ekkor sikeresnek a navigációt, és irányítsuk a felhasználók a `Home`-re.

4. Oldjuk meg, hogy képesek legyünk kijelentkezni! Sikeres kijelentkezést követően navigáljunk a `Login` oldalra!

5. Emeljük ki a `Login` komponenst egy külön route-ba, és tegyük elérhetővé a `/login` útvonalon!

6. Hozzuk létre a már korábban látott `RequireAuth` komponenst, ezzel védjük be, hogy csak hitelesített felhasználók érhessék el a belső tartalmakat. Ha a felhasználó nincs hitelesítve, akkor irányítsuk a `Login` oldalra!

```js
import { useSelector } from "react-redux";
import { selectToken } from "./authSlice";
import { Navigate } from "react-router";

interface RequireAuthProps {
  children: React.ReactNode;
}

export default function RequireAuth({ children }: RequireAuthProps) {
  const token = useSelector(selectToken);
  return token ? children : <Navigate to="/login" replace />;
}
```

# RTK Query

Az [RTK dokumentáció](https://redux-toolkit.js.org/rtk-query/overview) alapján konfiguráljuk a szükséges dolgokat. Használjuk a már bekészített típusokat, amik a `types.ts`-ben vannak definiálva!

1. Hozzunk létre egy `getStudent` endpointot, ami lekéri az összes rendelkezésre álló diákot a szerverről!
2. Hozzuk létre a `login` endpointot, ami a szervernek elküldi a megadott emailt és jelszót. Ez értelemszerűen egy `mutation` lesz. Ha ez elkészült, kössük ezt be a `LoginForm`-ba, és a sikeres login esetén állítsuk be a user értékét a visszakapott adatokra!

Az adatbázisban létezik a következő felhasználó:

```JSON
{
  "email": "teacher@example.com",
  "password": "teacher",
}
```
