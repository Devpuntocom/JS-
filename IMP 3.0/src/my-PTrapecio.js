import { LitElement, html } from "lit-element";


class FunPeTra extends LitElement {
  static get styles() {
    return;
  }

  PerimetroTrapecio() {
    var b = parseFloat(this.shadowRoot.getElementById("b").value);
    var bb = parseFloat(this.shadowRoot.getElementById("bb").value);
    var h = parseFloat(this.shadowRoot.getElementById("h").value);
    var c = parseFloat(this.shadowRoot.getElementById("c").value);
    var a = parseFloat(this.shadowRoot.getElementById("a").value);
    if (b !== "" && bb !== ""&& h !== ""&& c !== ""&& a !== ""){
      const x3 = (bb+b)+(a+c);
      this.shadowRoot.getElementById("resultado").value = x3;
    }
  }

  render() {
    return html`
      <h2>Perimetro Trapecio</h2>
      <img src="./img/trapecio.png">  
      <div></div>
      <label for="b">Digite b</label>
      <input type="text" id="b" @change="${this.PerimetroTrapecio}"><br><br>
      <label for="bb">Digite B</label>
      <input type="text" id="bb" @change="${this.PerimetroTrapecio}"><br><br>
      <label for="h">Digite H</label>
      <input type="text" id="h" @change="${this.PerimetroTrapecio}"><br><br>
      <label for="c">Digite c</label>
      <input type="text" id="c" @change="${this.PerimetroTrapecio}"><br><br>
      <label for="a">Digite a</label>
      <input type="text" id="a" @change="${this.PerimetroTrapecio}"><br><br>
      <button for="resultado">Resultado</button>
      <input type="text" id="resultado" disable>
    `;
  }
}

customElements.define("my-perimetro",FunPeTra);