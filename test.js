import 'babel-polyfill'
import 'babel-register'
import test from 'ava'
import { utils, search, _meta } from './src'

const defaults = f => ({
  description: `nondescript function ${f.name}`,
  examples: [{
    input: [],
    output: {"failure": "NO EXAMPLES"},
  }]
})

function runExamples(f){
  let d = defaults(f)
  let { description = d.description, examples = d.examples } = f[_meta] || d
  test(description, t => {
    examples.forEach(({input, output}) => t.deepEqual(f(...input), output))
  })
}

runExamples(search)

Object.keys(utils).forEach(util => runExamples(utils[util]))

