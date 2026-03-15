# Hello világ (és egyebek!)

Készíts egy Helló világ alkalmazást Reactben!

1.  Készíts egy `<Hello>` komponenst, amely egy címsorban kiírja, hogy "Hello világ!"!
2.  A komponensen belül tárolj el egy nevet, és azt jelenítsd meg!
3.  Ha ez a név üres, akkor azt írd ki, hogy "Nincs kit üdvözölni"!
4.  Tárolj el egy életkort is a komponensen belül, és jelenítsd meg azt is a név mellett! Ha az életkor 18 év alatti, akkor írd ki, hogy "Kiskorú" a név mellett, egyébként "Felnőtt"!
5.  Érkezzen a név és az életkor komponens attribútumként: `<Hello name="Győző" age="30">`. Definiáld megfelelően a prop-ok típusát, kezdetben helyben, majd hozz létre egy `HelloProps` interface-t!
6.  Legyen egy gomb a `Hello` komponensen belül, amikor van név. Kattintásra a gomb logoljon a konzolra: `VALAMI`. Ehhez készíts egy eseménykezelő függvényt, és rendeld hozzá a gomb `onClick` eseményéhez!
7.  Oldd meg, hogy a handler is a `parent component`-ben legyen definiálva, és csorgasd le a `Hello` komponensnek `props`-ként!. Ehhez bővítsd a korábban létrehozott `HelloProps` interface-t is megfelelően.
8.  Módosítsd a handlert, hogy kérje el az eseményobjektumot és logolja ki azt is a konzolra. Definiáld a handler paraméterét a megfelelő típusra!
9.  Ha a név "React", akkor egy stílusosztályon keresztül narancssárgával jelenítsd meg a szöveget! A stílusdefiníció külső állományban legyen (index.css)! Használd a `classnames` csomagot a megoldáshoz!
10. Legyen lehetőség egyéb elemeket is megadni az üdvözlés alatt! Például:

        ```JSX
        <Hello>
          <p>A small message for you!</p>
        </Hello>
        ```

    Ehhez használd a `props.children`-t a `Hello` komponensen belül. Értelemszerűen módosítsd a `HelloProps` interface-t is, hogy tartalmazza a `children`-t is! Mi van akkor, ha nem minden esetben szeretnék `children`-t megadni?

11. Hozz létre egy `data` mappát, amiben definiálsz egy `users.ts` fájlt. Ez tartalmazzon egy `User` interface-t:

    ```ts
    export interface User {
      id: number;
      name: string;
      age: number;
      hasStarted: boolean;
    }
    ```

    Majd hozz létre egy `users` tömböt, amiben van legalább 3 `User` objektum. Exportáld azt a tömböt.

12. Hozd létre a `UserList` komponenst, ami prop-ként megkapja a `users` tömböt.
13. Importáld a `users` tömböt az `App` komponensbe, és add át a `UserList`-nek prop-ként!
14. A `UserList` komponensen belül jelenítsd meg a `users` tömb minden elemét egy listában! Minden elem tartalmazza a `name`-t és az `age`-t is!
15. Refaktoráld a `UserList` komponenst úgy, hogy hozz létre egy `UserItem` komponenst, ami egyetlen `User` objektum adatát jeleníti meg a következő formátumban:

    ```html
    <li>
      <h3>
        <!-- Itt jelenítsd meg a nevet -->
      </h3>
      <p>
        <!-- Itt jelenítsd meg az életkort -->
      </p>
      <p>
        <!-- Itt jelenítsd meg, hogy sportos-e (van-e Stravaja) -->
      </p>
    </li>
    ```

    Értelemszerűen a `UserList`-ben most már csak a `UserItem`-eket kell megjeleníteni, és átadni nekik a megfelelő adatokat prop-ként! Ehhez pedig szükséges, hogy a `UserItem`-nek is legyen egy `UserItemProps` interface-e, amiben definiálod a prop-ok típusát!

16. Legyen lehetőség "üzenetet" küldésére: ehhez tároljuk az `App.tsx`-ben a `messageCount`-ot, ami egy szám: összesen hány üzenetet kaptunk, ez kezdetben `0`. Készítsünk egy `handlert`, ami megnöveli a `messageCount` értékét eggyel. Ezt leküldjük a `Hello` komponensnek. Ott hozzunk létre egy `Üzenet küldése` gombot, amire kattintva meghívjuk a handlert.
