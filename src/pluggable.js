import readJsonSync from 'read-json-sync'
import path from 'path'
import search from './search'
import { merge, arrayify, flatten } from './utils'

export default function pluggable({
  defaults = [],
  handler = _ => _,
  merger = merge,
  resolver = _ => _,
  file = process.env.CONFIGURATION_FILE || './package.json',
  sources = [{path: rootPath}]
}){
  let json = readJsonSync(file)
  return merger(defaults, handler(resolveSources({json, sources})))
}

function localize(module){
  // I only think this is necessary when using npm link
  return path.join(process.env.PWD, module.startsWith('.') ? './' : './node_modules', module)
}
function subRequire({path}){
  let subModule = module => search({data: module, path})[0]
  return module => subModule($ES.requireExternal(process.env.POLYPACKER_LINKED ? localize(module) : module))
}

export function byLiteral({defaults, path, ...rest}){
  return pluggable({
    defaults,
    ...rest,
    sources: [ {
      path: ['polypacker', ...path],
      resolver: _ => _[0]
    } ]
  })
}

export function byRequire({defaults, path, ...rest}){
  return pluggable({
    defaults,
    ...rest,
    sources: [ {
      path: ['polypacker', ...path],
      resolver(modules){
        return defaultResolver(modules).map(subRequire({path}))
      }
    } ]
  })
}

export function byRequireMap({ defaults, path, options: { unpackContent = false, ...options } = {}, ...rest }){

  let subResolver = subRequire({path})

  function moduleToKeyResolver(modules){
    return modules.reduce((map, module) => {
      map[module] = subResolver(module)
      return map
    }, {})
  }

  function unpackContentResolver(modules){
    return modules.reduce((map, module) => {
      Object.assign(map, subResolver(module))
      return map
    }, {})
  }

  return pluggable({
    defaults,
    ...rest,
    sources: [ {
      path: ['polypacker', ...arrayify(path)],
      resolver(modules){
        return (unpackContent ? unpackContentResolver : moduleToKeyResolver)(defaultResolver(modules))
      }
    } ]
  })
}

