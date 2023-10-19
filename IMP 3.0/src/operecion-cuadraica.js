import { LitElement, html } from "lit-element";
import styleScss from "./formStyle";


export class FunCuadratica extends LitElement {
  static get styles() {
    return[
      styleScss
    ]
  }

  Cuadratica() {
    var a = parseFloat(this.shadowRoot.getElementById("a").value);
    var b = parseFloat(this.shadowRoot.getElementById("b").value);
    var c = parseFloat(this.shadowRoot.getElementById("c").value);
    if (a !== "" && b !== ""&& c !== "") {
      const x1 = (b + Math.sqrt(b * b + 4 * a * c)) / (2 * a);
      this.shadowRoot.getElementById("resultado").value = x1;
    }
  }

  render() {
    return html`
      <h2>Formula Cuadratica</h2>
      <img src="./img/download.png">  
      <div></div>

      <div class="imgs">
        <label for="a">Digite A</label>
        <input type="text" id="a" @change="${this.Cuadratica}"><br><br>
        <label for="b">Digite B</label>
        <input type="text" id="b" @change="${this.Cuadratica}"><br><br>
        <label for="c">Digite C</label>
        <input type="text" id="c" @change="${this.Cuadratica}"><br><br>
        <button for="resultado">Resultado</button>
        <input type="text" id="resultado"disabled>
      </div>
    `;
  }
}

customElements.define("my-cuadratica", FunCuadratica);