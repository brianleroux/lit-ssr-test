import {LitElement, html} from 'lit';

import './lit-header.mjs';
import './lit-article.mjs';
import './lit-footer.mjs';

export default class MyPage extends LitElement {
  render() {
    return html`
      <lit-header></lit-header>
      <lit-article></lit-article>
      <lit-footer></lit-footer>
    `;
  }
}
