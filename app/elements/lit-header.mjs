import {LitElement, html} from 'lit';

export default class MyHeader extends LitElement {
  render() {
    return html`
      <header>header</header>
    `;
  }
}

customElements.define('lit-header', MyHeader);

