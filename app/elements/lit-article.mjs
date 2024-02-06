import {LitElement, html} from 'lit';

export default class MyArticle extends LitElement {
  render() {
    return html`
      <article>article</article>
    `;
  }
}

customElements.define('lit-article', MyArticle);
