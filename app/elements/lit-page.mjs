import {LitElement, html} from 'lit';

import './lit-header.mjs';
import './lit-article.mjs';
import './lit-footer.mjs';

export default class MyPage extends LitElement {
  render() {
    return html`
      <my-header></my-header>
      <my-article></my-article>
      <my-footer></my-footer>
    `;
  }
}
