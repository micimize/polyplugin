import JSONPath from 'jsonpath-plus'
import { merge } from './utils'

const keywords = {
  all: '*',
  rest: '...'
} 

function normalize(plugins){
  return Array.isArray(modules) ? modules : Object.keys(modules)
}

function applyKeywords(path){
  path.split('.')
}

// TODO this has to be recursive, starting from the top level and working down
export default function resolve(json, {path, resolver=_=>_}){
  let plugins = JSONPath({json, path, flatten: true})
  return resolver(normalize(plugins))
}

export function sources(json, sources){
  return merge(...sources.map(source => resolve(json, source)))
}

export function toList(modules){
  return modules.map(module => JSONPath({json: require(module), path, flatten: true})[0])
}

export function toMap(modules){
  return modules.reduce((map, module) => {
    map[module] = JSONPath({json: require(module), path, flatten: true})[0]
    return map
  }, {})
}

