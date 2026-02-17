// const data = [
//   ["Villám", "Legolas"],
//   ["Doc Hudson", "Optimus Prime"],
//   ["Matuka", "Nyakkendős Macska"],
// ];

const table = document.querySelector("#table-characters");
const tbody = table.querySelector("tbody");
const thead = table.querySelector("thead");
const trs = [...tbody.querySelectorAll("tr")];

const data = trs.map((tr) =>
  [...tr.querySelectorAll("td")].map((td) => td.innerText),
);

const generateTable = (data) => {
  return data
    .map(
      (row) => `
            <tr>
                ${row.map((cell) => `<td>${cell}</td>`).join("")}
            </tr>
        `,
    )
    .join("");
};

const onHeaderClick = (e) => {
  if (e.target.matches("th")) {
    const index = e.target.cellIndex;
    data.sort((a, b) => (a[index] < b[index] ? -1 : 1));
    tbody.innerHTML = generateTable(data);
  }
};

thead.addEventListener("click", onHeaderClick);
