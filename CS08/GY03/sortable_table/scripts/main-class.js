// A feladat megoldás során fokozatosan haladtunk az egységbezárás felé: kezdetben hasonló módszereket alkalmaztunk, mint
// az előző gyakorlatokon, globálisan definiáltunk függvényeket, vettünk be elemeket. Ez jól működött egy konkrét táblázat
// esetén, azonban amint általánosítani akartuk a megoldást, korlátokba ütköztünk. A cél az volt, hogy zárjuk egységbe a
// sortable table funkcionalitását. Itt jött képbe az osztályok alkalmazása. Itt csak "becsomagoltuk" a korábbi
// megoldásunkat egy osztályba, ami paraméterként várta, hogy melyik táblázattal szeretnénk, hogy dolgozzon.
// Ez megoldja azt a problémát, hogy duplikáns kódot írjunk, hiszen ha kezünkben van, hogy melyik táblázatra szeretnénk
// a funkciót implementálni, a további szükséges elemeket (tbody, thead, trs) el tudjuk érni a táblázaton, és nem a dokumentumon
// keresztül.
class SortableTable {
  constructor(table) {
    this.tbody = table.querySelector("tbody");
    this.thead = table.querySelector("thead");
    this.trs = [...this.tbody.querySelectorAll("tr")];

    this.data = this.trs.map((tr) =>
      [...tr.querySelectorAll("td")].map((td) => td.innerText),
    );

    this.thead.addEventListener("click", this.onHeaderClick);
  }

  // Fontos, hogy arrow functionként definiáljuk, ne pedig `function` kulcsszóval. Az arrow function nem kap saját "this"-t,
  // hanem lexikálisan örökli a kontextust, ami class field esetén az aktuális SortableTable példány lesz.
  // Így a handlerben a `this` mindig az instance-ra mutat.
  //
  // Ha hagyományos function-t használnánk, a "this" dinamikus lenne, eseménykezelőként meghívva a DOM elemre mutatna,
  // amely kiváltotta az eventet.
  onHeaderClick = (e) => {
    if (e.target.matches("th")) {
      const index = e.target.cellIndex;
      this.data.sort((a, b) => (a[index] < b[index] ? -1 : 1));
      this.tbody.innerHTML = this.generateTable();
    }
  };

  generateTable() {
    return this.data
      .map(
        (row) => `
            <tr>
                ${row.map((cell) => `<td>${cell}</td>`).join("")}
            </tr>
        `,
      )
      .join("");
  }
}

// Példányosítottuk az osztályt, paraméterként megkapta a táblázatot:
new SortableTable(document.querySelector("#table-characters"));
new SortableTable(document.querySelector("#table-characters-2"));
