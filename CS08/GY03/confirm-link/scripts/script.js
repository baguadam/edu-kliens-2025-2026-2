class ConfirmLink extends HTMLAnchorElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener("click", this._onClick);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this._onClick);
  }

  _onClick = (e) => {
    if (!confirm("Menjünk?")) {
      e.preventDefault();
    }
  };
}

customElements.define("confirm-link", ConfirmLink, { extends: "a" });
