import { LitElement, html } from "lit-element";


export class FunCoronaCircular extends LitElement {
  static get styles() {
    return;
  }

  CoronaCir() {
    var r = parseFloat(this.shadowRoot.getElementById("r").value);
    var rr = parseFloat(this.shadowRoot.getElementById("rr").value);
    var pi = Math.PI;
    if (r !== "" && rr !== "") {
      const x7 = pi*(((rr)*(rr))-((r)*(r)));
      this.shadowRoot.getElementById("resultado").value = x7;
    }
  }

  render() {
    return html`
      <h2>Area Paralelogramo</h2>
      <img src="./img/paralelogramo.png">  
      <div></div>
      <label for="b">Digite R</label>
      <input type="text" id="rr" @change="${this.CoronaCir}"><br><br>
      <label for="b">Digite r</label>
      <input type="text" id="r" @change="${this.CoronaCir}"><br><br>
      <button for="resultado">Resultado</button>
      <input type="text" id="resultado">
    `;
  }
}

customElements.define("my-element5",FunCoronaCircular);