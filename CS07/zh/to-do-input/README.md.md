# Miket (nem) fogok ma megcsinálni? (8.0 pont)

A feladat célja egy custom element létrehozása Shadow DOM használatával! A `to-do-input` elementet fogjuk elkészíteni, úgy hogy a lelkes felhasználó egy `text-area`-ba tudja írni a teendőit, majd ENTER leütése után az aktuális elem megjelenik egy listában.

a\ (2 pont)

- Készítsd el a `ToDoInput` osztály skeletonját, hozd létre a konstruktort megfelelően, add hozzá a `connectedCallback`-et.
- Rendelj `Shadow DOM`-ot a `ToDoInput`-hoz.
- Definiált a custom elementet `to-do-input` néven.

b\ (1 pont)

- Hozd létre a `createStyle()` metódust, ezen belül hozz létre egy `style` elemet, ami a következő stílusokat tartalmazza:

```css
:host,
*,
*::before,
*::after {
  box-sizing: border-box;
}
:host {
  display: block;
  width: min(520px, 92vw);
}
.card {
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 14px;
  padding: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}
textarea {
  display: block;
  width: 100%;
  resize: vertical;
  min-height: 3.2em;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  outline: none;
  font: inherit;
  color: #fff;
  background: rgba(0, 0, 0, 0.18);
}
textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}
textarea:focus {
  border-color: rgba(255, 255, 255, 0.55);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.12);
}
.list {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.text {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  text-align: left;
  line-height: 1.35;
}
.delete {
  border: none;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  padding: 6px 10px;
  line-height: 1;
}
.delete:hover {
  background: rgba(255, 255, 255, 0.22);
}
.delete:focus {
  outline: 2px solid rgba(255, 255, 255, 0.6);
  outline-offset: 2px;
}
```

- Hívd meg a `createStyle()`-t a connectedCallback-ben, majd helyezd el a legenerált style elemet a Shadow DOM-ban.

c\ (0.5 pont)

- Írd meg a `createContainer()` metódust, ami létrehoz egy `div` elemet. Lásd el a létrehozott elemet a `card` stílusosztállyal.
- Hívd meg a `createContainer()`-t a `connectedCallback`-ben, majd helyezd el a legenerált container elemet a Shadow DOM-ban.

d\ (2 pont)

- Írd meg a `createTextArea()` metódust, ami létrehoz egy `textarea` elemet.
- Állítsd be a `placeholder` attribútumot tetszőlegesen (pl. "Mi a következő?").
- Állítsd be a `aria-label` attribútumot `To-do input`-ra.
- Hívd meg a `createTextArea()`-t a `connectedCallback`-ben, majd helyezd el a legenerált textarea elemet a `container`-ben. (FONTOS: `NEM` a Shadow DOM gyökerébe kell helyezni!)

e\ (0.5 pont)

- Írd meg a `createList()` metódust, amit lérehoz egy `div` elemet. Lásd el a létrehozott elemet a `list` stílusosztállyal.
- Hívd meg a `createList()`-t a `connectedCallback`-ben, majd helyezd el a legenerált list elemet a `container`-ben. (FONTOS: `NEM` a Shadow DOM gyökerébe kell helyezni!)

f\ (0 pont (haha))

- Add hozzá az osztályhoz a következő metódust (FIGYELJ: ha te nem `this.list` néven tárolod a listádat, akkor módosítsd a kódot ennek megfelelően):

```javascript
  addTask(text) {
    const item = document.createElement("div");
    item.className = "item";

    const span = document.createElement("span");
    span.className = "text";
    span.textContent = text;

    const del = document.createElement("button");
    del.className = "delete";
    del.type = "button";
    del.textContent = "x";
    del.setAttribute("aria-label", `Remove task: ${text}`);
    del.addEventListener("click", () => item.remove());

    item.append(span, del);
    this.list.append(item);
  }
```

g\ (2 pont)

- Írd meg a `handleInput()` metódust, ami paraméterként megkapja az eseményobjektumot.
- Iratkozz fel a `textarea`-ra `keydown` eseményre a `handleInput()`-tal a handlerként.
- Ellenőrízd, hogy a lenyomott gomb az `Enter` volt-e (HINT: `event.key`) és hogy a `Shift` gomb nem volt-e lenyomva (HINT: `event.shiftKey`).
- Ha a fenti feltételek teljesülnek, akkor:
  - Akadályozd meg, hogy az `Enter` lenyomása új sort hozzon létre a `textarea`-ban (HINT: `event.preventDefault()`)
  - Szedd ki a `textarea` értékét, trimmeld, ha üres, ne történjen semmi.
  - Ha nem üres, hívd meg az előző pontban definiált `addTask()`-ot a kinyert értékkel.
  - Állítsd üresre a `textarea`-t.
