import { LitElement, html } from "lit-element";


export class FunArTra extends LitElement {
  static get styles() {
    return;
  }

  AreaTrapecio() {
    var b = parseFloat(this.shadowRoot.getElementById("b").value);
    var bb = parseFloat(this.shadowRoot.getElementById("bb").value);
    var h = parseFloat(this.shadowRoot.getElementById("h").value);
    if (b !== "" && bb !== ""&& h !== "") {
      const x2 = (((bb+b)/2)*h);
      this.shadowRoot.getElementById("resultado").value = x2;
    }
  }

  render() {
    return html`
      <h2>Area Trapecio</h2>
      <img src="./img/trapecio.png">  
      <div></div>
      <label for="a">Digite b</label>
      <input type="text" id="b" @change="${this.AreaTrapecio}"><br><br>
      <label for="b">Digite B</label>
      <input type="text" id="bb" @change="${this.AreaTrapecio}"><br><br>
      <label for="c">Digite H</label>
      <input type="text" id="h" @change="${this.AreaTrapecio}"><br><br>
      <button for="resultado">Resultado</button>
      <input type="text" id="resultado"disabled>
    `;
  }
}

customElements.define("my-trapecio",FunArTra);