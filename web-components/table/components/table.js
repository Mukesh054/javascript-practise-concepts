export class TableInfo extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="components/Table.css">

        <table>
            <thead>
                <tr></tr>
            </thead>
						<tbody></tbody>
        </table>
    `;
  }

  static get observedAttributes() {
    return ["items", "headers"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Here i am");
    if (name === "items") {
      console.log(oldValue, newValue);
    }
  }

  /**
   * @param  data {any}
   */
  set items(data) {
    const tableBody = this.shadowRoot.querySelector("tbody");
		const rows = data.map(rowData => {
			const row = document.createElement('tr');
			const cells = rowData.map(cellData => {
				const cell = document.createElement("td");
				cell.textContent = cellData;
				return cell;
			})
			row.append(...cells);
			return row;
		})
		tableBody.innerHTML = ""
		tableBody.append(...rows)
  }

  /**
   * @param data {string[]}
   */
  set headers(data) {
    const row = this.shadowRoot.querySelector("thead tr");
    const cells = data.map((header) => {
      const cell = document.createElement("th");
      cell.textContent = header;
      return cell;
    });
    row.append(...cells);
  }
}
