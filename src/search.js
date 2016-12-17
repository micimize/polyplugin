import meta from './meta'
import { flatten, arrayify, keyValue } from './utils'

const pathKeywords = {
  or({data, value, path}, star){
    ({ '*': star, ...data} = data)
    return flatten([
      ...arrayify(star),
      ...arrayify(value).map( child => search({ data, path: [...arrayify(child), ...path]}))
    ])
  },
  asArray({data, value, path}, star){
    ({ '*': star, ...data} = data)
    return [
      ...arrayify(star),
      ...arrayify(value).map( child => search({ data, path: [...arrayify(child), ...path]}))
    ]
  }
}

function pathKeyword({ data, node, path }){
  if(node instanceof Object){
    let { key, value } = keyValue(node)
    return pathKeywords[key]({data, value, path})
  }
}

function dataArray({ data, node, path }){
  if(Array.isArray(data)){
    return search({ data: data[node], path })
  }
}

function dataKeywords({ data, node, path }, {star, rest} = {}){
  if(data instanceof Object){
    ({ '*': star, '...': rest, [node]: data } = data)
    let result = search({ data, path }) || []
    return [ ...arrayify(star), ...(result.length ? result : arrayify(rest))]
  }
}


function search({ data, path: [node, ...path] = [undefined], star }){
  return (data === undefined) ? []        :
    (node === undefined) ? arrayify(data) :
    pathKeyword({ data, node, path })    ||
    dataArray({ data, node, path })      ||
    dataKeywords({ data, node, path })   ||
    []
}

let data =  {
  '*': 'top star',
  '...': 'top rest',
  str: 'top string',
  arr: ['top', 'array'],
  child: {
    '*': 'child star',
    '...': 'child rest',
    bool: false,
    str: 'child string',
    num: 5.55,
    nestedArr: [0, 'nested array'],
    nestedObj: {nested: 'obj'}
  }
}

export default meta({
  description: 'search `data` for the given path',
  examples: [{
    input: [{ data, path: ['arr']}],
    output: ['top star', 'top', 'array']
  }, {
    input: [{ data, path: ['none']}],
    output: ['top star', 'top rest']
  }, {
    input: [{ data, path: ['child', 'none']}],
    output: ['top star', 'child star', 'child rest']
  }, {
    input: [{ data, path: ['child', 'nestedArr']}],
    output: ['top star', 'child star', 0, 'nested array']
  }, {
    input: [{ data, path: ['child', {'asArray': 'nestedArr'}]}],
    output: ['top star', 'child star', [0, 'nested array']]
  }, {
    input: [{ data, path: ['child', {'or': ['str', 'num', 'nestedObj']}]}],
    output: ['top star', 'child star', 'child string', 5.55, {nested: 'obj'}]
  }]
})( search )
