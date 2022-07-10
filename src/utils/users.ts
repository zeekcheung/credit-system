/*
 * 处理用户逻辑
 * */

// 用户
export interface IUser {
  userId: string
  username: string
  password: string
  role: string
  sex: string
  age: number
}

// 学生
export interface IStudent {
  userId: string
  studentId: string
  name: string
  grade: string
  major: string
}

export type User = IUser & IStudent

// 登录数据
export interface Data {
  username: string
  password: string
}

const baseURL = process.env.REACT_APP_API_URL

const tokenKey = '__token__'

// 获取 token 值
export const getToken = () => window.localStorage.getItem(tokenKey)

// 设置 token
export const setToken = (user: User) =>
  window.localStorage.setItem(
    tokenKey,
    `${user.username} ${user.password}` || ''
  )

// 清除 token
export const clearToken = () => window.localStorage.removeItem(tokenKey)

// 登录，获取用户对象，设置 token
export const login = async (data: Data, isSetToken: boolean = true) => {
  // 发送登录请求
  const response = await fetch(`${baseURL}/user/login`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const _data = await response.json()

  // 登录成功后 setToken
  if (response.ok) {
    const { student, user } = _data
    isSetToken && setToken(user)
    return { ...user, ...student }
  } else {
    return Promise.reject(_data)
  }
}

// 登出，清除 token
export const logout = async () => clearToken()
