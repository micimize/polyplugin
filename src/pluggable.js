import readJsonSync from 'read-json-sync'
import { merge, identity } from './utils'
import * as resolve from './resolve'

export default function pluggable({
  defaults = [],
  handler = _ => _,
  merger = merge,
  resolver = _ => _,
  file = process.env.CONFIGURATION_FILE || './package.json',
  sources = [{path: process.env.CONFIGURATION_PATH || '$.polypacker'}]
}){
  let json = readJsonSync(file)
  return merger(defaults, handler(resolve.sources(json, sources)))
}

export function fromSingleSource({path, resolver, ...rest}){
  return pluggable({
    sources: [ { path, resolver } ],
    ...rest,
  })
}

export const list = obj => fromSingleSource({ ...obj, resolver: resolve.toList })

export const map = obj => fromSingleSource({ ...obj, resolver: resolve.toMap })
