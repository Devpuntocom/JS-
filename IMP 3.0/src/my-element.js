import { LitElement, html } from 'lit-element';

export class MyElement extends LitElement {
  static get properties() {
    return {
    };
  }

  render() {
    return html`
        <button type="button" @click="${this.AreaTrapecio}">Trapecio</button>
    `;
  }
}

customElements.define('my-element', MyElement);