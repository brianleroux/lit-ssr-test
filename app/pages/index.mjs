import {render} from '@lit-labs/ssr';
import {collectResultSync} from '@lit-labs/ssr/lib/render-result.js';
import {html} from 'lit';
import '../elements/lit-page.mjs';


export default async function renders () {
  const res = render(html`<lit-page></lit-page>`)
  return collectResultSync(res)
}
