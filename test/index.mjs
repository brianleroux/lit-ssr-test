import test from 'node:test'
import render from '../app/pages/index.mjs'

test('can render elements expanded', async t => {
  console.time('render')
  let result = await render() 
  console.timeEnd('render')
  console.log(result)
})
