/*
 * 封装 http 请求
 * */
import { useAuth } from 'contexts/auth-context'
import qs from 'qs'
import { getToken, logout } from './users'

const baseURL = process.env.REACT_APP_API_URL

interface Config extends RequestInit {
  data?: object
  token?: string
}

export const http = async (endpoint: string, config: Config = {}) => {
  const { data, headers, token, ...customConfig } = config
  // 设置请求配置对象
  const _config = {
    // 默认配置
    method: 'GET',
    headers: {
      'Content-type': data ? 'application/json' : '',
      Authorization: token ? `${token}` : '',
    },
    ...customConfig,
  }

  // 配置请求参数或请求体
  if (_config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`
  } else {
    _config.body = JSON.stringify(data || {})
  }

  // 发送请求
  const response = await fetch(`${baseURL}${endpoint}`, _config)
  const _data = await response.json()

  // 如果用户未登录
  if (response.status === 401) {
    await logout()
    window.location.reload()
    return Promise.reject({ message: '请重新登录' })
  }

  return response.ok ? _data : Promise.reject(_data)
}

// 二次封装 http，自动携带 token
export const useHttp = () => {
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: getToken() || '' })
}
