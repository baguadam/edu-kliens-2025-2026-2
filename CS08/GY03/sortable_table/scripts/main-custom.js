class SortableTable extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.tbody = this.querySelector("tbody");
    this.thead = this.querySelector("thead");
    this.trs = [...this.tbody.querySelectorAll("tr")];

    this.data = this.trs.map((tr) =>
      [...tr.querySelectorAll("td")].map((td) => td.innerText),
    );

    this.thead.addEventListener("click", this.onHeaderClick);
  }

  disconnectedCallback() {
    this.thead.removeEventListener("click", this.onHeaderClick);
  }

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

customElements.define("sortable-table", SortableTable);
