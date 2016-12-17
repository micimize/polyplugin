export const _meta = Symbol('meta')

export default function meta(data){
  return f => {
    f[_meta] = data
    return f
  }
}

