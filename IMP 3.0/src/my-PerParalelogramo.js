import { LitElement, html } from "lit-element";


export class FunPerPar extends LitElement {
  static get styles() {
    return;
  }

  AreaParalelogramo() {
    var b = parseFloat(this.shadowRoot.getElementById("b").value);
    var h = parseFloat(this.shadowRoot.getElementById("h").value);
    if (h !== "" && b !== "") {
      const x7 = ((b*h)*2);
      this.shadowRoot.getElementById("resultado").value = x7;
    }
  }

  render() {
    return html`
      <h2>Perimetro Paralelogramo</h2>
      <img src="./img/paralelogramo.png">  
      <div></div>
      <label for="b">Digite B</label>
      <input type="text" id="b" @change="${this.AreaParalelogramo}"><br><br>
      <label for="b">Digite H</label>
      <input type="text" id="h" @change="${this.AreaParalelogramo}"><br><br>
      <button for="resultado">Resultado</button>
      <input type="text" id="resultado">
    `;
  }
}

customElements.define("my-element4",FunPerPar);