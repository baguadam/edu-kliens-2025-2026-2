class CharCounterInput extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.input = this.querySelector("input");
    if (!this.input) {
      return;
    }

    this.maxLength = this.input.getAttribute("maxLength") || 99;
    this.createDiv();
    this.input.addEventListener("input", this.onInput);
    this.appendChild(this.div);
  }

  createDiv = () => {
    this.div = document.createElement("div");
    this.div.classList.add("char-counter");
    this.div.innerText = `0/${this.maxLength}`;
  };

  onInput = (e) => {
    const currentLength = e.target.value.length;
    this.div.innerText = `${currentLength} / ${this.maxLength}`;
  };

  disconnectedCallback() {
    this.input.removeEventListener("input", this.onInput);
  }
}

customElements.define("char-counter-input", CharCounterInput);
