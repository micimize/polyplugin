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
  },
  resolve({data, value: resolver, path}){
    return search({data, path}).map(resolver)
  },
  '*': ({data, value = [], path}) => {
    path = [...value, ...path]
    if(Array.isArray(data)){
      return flatten(data.map(child => search({ data: child, path })))
    } else if (data instanceof Object) {
      return flatten(Object.keys(data).map(key => search({ data: data[key], path })))
    } else {
      return search({ data, path })
    }
  }
}

function pathKeyword({ data, node, path }){
  if(node instanceof Object){
    let { key, value } = keyValue(node)
    return pathKeywords[key]({data, value, path})
  }
  if(['*'].includes(node)){
    return pathKeywords[node]({data, path})
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
  }, {
    input: [{ data, path: ['child', { resolve: node => `${node}!` }, {or: ['str', 'num', ['nestedArr', 1]]}]}],
    output: ['top star', 'child star!', 'child string!', '5.55!', 'nested array!']
  }, {
    input: [{ data, path: ['child', '*']}],
    output: ['top star', 'child star', 'child rest', false, 'child string', 5.55, 0, 'nested array', {nested:'obj'}]
  }]
})( search )
