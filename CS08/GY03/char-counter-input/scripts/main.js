class CharCounterInput extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.inputField = this.querySelector("input");
    if (!this.inputField) {
      return;
    }
    this.maxLength = this.inputField.getAttribute("maxLength") || 99;

    this.div = document.createElement("div");
    this.div.classList.add("char-counter");
    this.div.innerText = `0/${this.maxLength}`;

    this.inputField.addEventListener("input", this.onInput);
    this.appendChild(this.div);
  }

  disconnectedCallback() {
    this.inputField.removeEventListener("input", this.onInput);
  }

  onInput = (e) => {
    const currentLength = e.target.value.length;
    this.div.innerText = `${currentLength}/${this.maxLength}`;
  };
}

customElements.define("char-counter-input", CharCounterInput);
