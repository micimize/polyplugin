import meta from './meta'
import { flatten, arrayify } from './utils'

export default meta({
  description: 'search `data` for the given path',
  examples: [{
    input: [{data: {'foo': 'bar'}, path: ['foo']}],
    output: ['bar']
  }]
})(
  function search({ data, path: [node, ...path] = [undefined], star }){
    // no data left
    if(data === undefined){
      return []
    }
    // search complete
    if(node === undefined){
      return arrayify(data)
    }
    if(node instanceof Object){
      let keyword = Object.keys(node)[0]
      if(keyword == 'allOf'){
        return flatten(node[keyword].map(
          child => search({ data, path: arrayify(child)})))
      }
    }
    // arrays can't have stars, just keep digging
    if(Array.isArray(data)){
      return search({ data: data[node], path })
    }
    if(data instanceof Object){
      ({ '*': star, [node]: data } = data)
      return [ ...arrayify(star), ...search({ data, path })]
    }
    // still searching, but out of searchable data
    return []
  }
)
