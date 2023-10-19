import { LitElement, html } from "lit-element";

export class MyElement extends LitElement{
    handleclick(){
        alert('Holaaa')

    }

    render() {
        return html`
            <button @click=${this.handleclick}>Click me</button>
            `;
    }
}

customElements.define('my-element',MyElement);