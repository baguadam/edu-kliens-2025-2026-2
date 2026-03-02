# Nagybetűs Szavak (6.0 pont)

A feladat célje egy custom build-in element létrehozása, ami a meglévő `input`-ot okosítja fel. A custom elementünkre `capitalizing-input` néven szeretnénk hivatkozni. Az input field datasetjében `mode`-ként eltároljuk, hogy az adott input csak a mondat első betűjét vagy a mondat minden szavának az első betűjét nagybetűssé teszi-e. (data-mode="words" -> minden szó nagybetűs lesz, data-mode="sentence" -> csak az első szó lesz az)

a\ (3 pont)

- hozd létre a `CapitalizingInput` osztályt, származtasd megfelelően, készítsd el a konstruktort, hozd létre a `connectedCallback`-et
- készítsd el a handler skeletonját `handleInput` néven, ami megkapja az `eseményobjektumot`. Egyelőre csak logolj benne egyet, hogy "MŰKÖDIK"
- a `connectedCallback`-ben iratkozz fel az input eseményre az előbb definiált `handleInput`-tal, a `disconnectedCallback`-ben pedig iratkozz le róla
- definiáld a custom elementet megfelelően (nézd meg, hogyan használom a HTML-ben!)

b\ (3 pont)

- a `handleInput`-on belül tárold el a datasetből kiszedve az aktuális módot és az input mező értékét
- ha `data-mode="words"`, akkor minden szó első betűje legyen nagybetűs (HINT: `String.prototype.replace(pattern, replacement)`, ahol pattern = `/\b\w/g`, replacement pedig egy lambda függvény, ami: `(match) => match.toUpperCase()`, és nem helyben módosítja a stringet, hanem egy új stringet ad vissza, de lásd: doksi)
- ha `data-mode="sentence"`, akkor csak az első szó első betűje legyen nagybetűs
