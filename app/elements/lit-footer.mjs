import {LitElement, html} from 'lit';

export default class MyFooter extends LitElement {
  render() {
    return html`
      <footer>footer</footer>
    `;
  }
}

customElements.define('lit-footer', MyFooter);
