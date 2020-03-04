import { get } from "../../utils/request"

//根据schema, 将获取的数据扁平化处理
const normalizeData = (data, schema) => {
  const {id, name} = schema
  let kvObj = {}
  let ids = []
  if(Array.isArray(data)) {
    data.forEach(item => {
      kvObj[item[id]] = item
      ids.push(item[id])
    })
  } else {
    kvObj[data[id]] = data
    ids.push(data[id])
  }
  return {
    [name]: kvObj,
    ids
  }
}
const fetchData = (endpoint, schema) => {
  return get(endpoint).then(data => {
    return normalizeData(data, schema)
  })
}

// 经过中间件处理的action所具有的标识
export const FETCH_DATA = 'FETCH_DATA'

export default store => next => action => {
  const callAPI = action[FETCH_DATA]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  const { endpoint, schema, types } = callAPI
  if (typeof endpoint !== 'string') {
    throw new Error('endpoint必须为字符串类型的URL')
  }
  // products中的schema约定id，name字段，扁平处理接口返回的数据
  if (!schema) {
    throw new Error('必须指定领域实体的schema')
  }
  if(!Array.isArray(types) || types.length !== 3) {
    throw new Error('需要指定一个包含了3个action type的数组')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('action type必须为字符串类型')
  }

  const actionWith = data => {
    const finalAction = {...action, ...data}
    delete finalAction[FETCH_DATA]
    return finalAction
  }

  // 数组解构
  const [requestType, successType, failureType] = types
  //在fetch之前需要发送requestType，代表有一个请求即将要发送
  next(actionWith({type: requestType}))

  // fetchData方法中normalizeData对原始response处理
  return fetchData(endpoint, schema).then(
    // normalizeData处理后的response包含{[name]: kvObj, ids }字段
    response => next(actionWith({
      type: successType,
      response
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || '获取数据失败'
    }))
  )
}