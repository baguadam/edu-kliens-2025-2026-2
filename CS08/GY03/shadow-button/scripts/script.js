class ShadowButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this._createButton();
    this._createStyleTag();
    this.shadowRoot.append(this.styleTag, this.button);
  }

  _createButton() {
    this.button = document.createElement("button");
    this.button.textContent = "SHADOW DOM BUTTON";
  }

  _createStyleTag() {
    this.styleTag = document.createElement("style");
    this.styleTag.innerHTML = `
      button {
        background-color: blue;
        color: white;
        border-radius: 3px;
      }
    `;
  }
}

customElements.define("shadow-button", ShadowButton);

const buttons = document.querySelectorAll("button");
buttons.forEach((b) => console.log(`BUTTON: ${b.textContent}`));

const button = document
  .querySelector("shadow-button")
  .shadowRoot.querySelector("button");
