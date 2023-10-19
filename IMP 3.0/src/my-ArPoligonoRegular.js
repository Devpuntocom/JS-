import { LitElement, html } from "lit-element";


export class FunArP extends LitElement {
  static get styles() {
    return;
  }

  AreaPoligono() {
    var p = parseFloat(this.shadowRoot.getElementById("p").value);
    var a = parseFloat(this.shadowRoot.getElementById("a").value);
    if (p !== "" && a !== "") {
      const x4 = ((p*a)/2);
      this.shadowRoot.getElementById("resultado").value = x4;
    }
  }

  render() {
    return html`
      <h2>Area Trapecio</h2>
      <img src="./img/poligono.png">  
      <div></div>
      <label for="a">Digite b</label>
      <input type="text" id="p" @change="${this.AreaPoligono}"><br><br>
      <label for="b">Digite B</label>
      <input type="text" id="a" @change="${this.AreaPoligono}"><br><br>
      <button for="resultado">Resultado</button>
      <input type="text" id="resultado"disabled>
    `;
  }
}

customElements.define("my-element1",FunArP);