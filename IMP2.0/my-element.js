import { LitElement, html } from "lit-element";

export class MyElement extends LitElement{
    handleclick(){
        alert('Prueba 1')
    }

    render() {
        return html`
            <button @click=${this.handleclick}>Click me</button>
            `;
    }
}

customElements.define('my-element',MyElement);