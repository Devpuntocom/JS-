import { LitElement, html } from 'lit-element';


export class NewElement extends LitElement {
    static get properties() {
        return {
            b: { type: Number },
            a: { type: Number },
            c: { type: Number },
        };
    }
    render() {
        const a = this.a;
        const b = this.b;
        const c = this.c;
        const x1 = (this.b + Math.sqrt(this.b * this.b+4 * this.a * this.c)) / (2 * this.a);
        return html`
          <p>-${b} + √${b}² - 4${a} * ${c} / 2${a} = ${x1}</p>
        `;
    }
    }

customElements.define('new-element', NewElement);