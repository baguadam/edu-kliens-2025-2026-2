class ShadowButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this._createStyle();
    this._createButton();

    this.shadowRoot.append(this.styleTag, this.button);
  }

  _createButton = () => {
    this.button = document.createElement("button");
    this.button.textContent = "FROM SHADOW";
  };

  _createStyle = () => {
    this.styleTag = document.createElement("style");
    this.styleTag.innerHTML = `
        button {
            background-color: blue;
            color: white;
            border-radius: 5px;
        }
    `;
  };
}

customElements.define("shadow-button", ShadowButton);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => console.log(`BUTTON: ${button.textContent}`));

const shadow = document
  .querySelector("shadow-button")
  .shadowRoot.querySelector("button");
