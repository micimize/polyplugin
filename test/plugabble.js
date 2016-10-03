import * as pluggable from '../src'

let defaultMap = {
  one: 'one',
  two: 'two',
  three(){
    return 'three'
  }
}

let defaultList = [ true, 2, 'three', _=>_ ]

const simpleMap = pluggable.map({
  defaults: defaultMap,
  path: '$.pluggable.list'
})

const simpleList = pluggable.list({
  defaults: defaultList,
  path: '$.pluggable.list'
})

const nestedList = pluggable.list({
  defaults: defaultList,
  path: '$.pluggable.nested.list'
})

const nestedMap = pluggable.list({
  defaults: defaultMap,
  path: '$.pluggable.nested.map'
})

function mergeSchemas(base, subSchemas){
  Object.assign(base.definitions, subSchemas)
  Object.keys(subSchemas).forEach(
    module => base.allOf.push({ "$ref": `#/definitions/${module}` }))
  return base
}



