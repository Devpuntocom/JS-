import { LitElement, html } from "lit-element";


export class FunPeP extends LitElement {
  static get styles() {
    return;
  }

  PerimetroPoligono() {
    var a = parseFloat(this.shadowRoot.getElementById("a").value);
    if (a !== "") {
      const x5 = ((a*6)/2);
      this.shadowRoot.getElementById("resultado").value = x5;
    }
  }

  render() {
    return html`
      <h2>Area Trapecio</h2>
      <img src="./img/poligono.png">  
      <div></div>
      <label for="b">Digite el apotema del poligono</label>
      <input type="text" id="a" @change="${this.PerimetroPoligono}"><br><br>
      <button for="resultado">Resultado</button>
      <input type="text" id="resultado"disabled>
    `;
  }
}

customElements.define("my-element2",FunPeP);