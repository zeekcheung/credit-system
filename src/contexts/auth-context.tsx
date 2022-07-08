import { FullPageError, FullPageLoading } from 'components/lib'
import React, { ReactNode, useContext } from 'react'
import { useMount } from 'utils'
import { useAsync } from 'utils/async'
import { Data, getToken, login, logout, User } from 'utils/users'

interface UserContext {
  user: User | null
  _login: (data: Data, isSetToken?: boolean) => Promise<void>
  _logout: () => Promise<void>
}

const AuthContext = React.createContext<UserContext | null>(null)
AuthContext.displayName = 'AuthContext'

// 初始化 User
const bootstrapUser = async () => {
  let user: User | null = null
  const token = getToken()
  if (token) {
    const tokenArr = token.split(' ')
    const data = await login({
      username: tokenArr[0],
      password: tokenArr[1],
    })
    user = data
  }
  return user
}

// AuthProvider 组件提供全局 user、login、logout 状态
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    isIdle,
    isLoading,
    isError,
    run,
    data: user,
    setData: setUser,
    error,
  } = useAsync<User | null>()

  const _login = (data: Data, isSetToken?: boolean) =>
    login(data, isSetToken ? true : false).then(setUser)
  const _logout = () => logout().then(() => setUser(null))

  // 组件挂载时初始化 User
  useMount(() => {
    run(bootstrapUser())
  })

  if (isIdle || isLoading) {
    return <FullPageLoading />
  }

  if (isError) {
    return <FullPageError error={error} />
  }

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, _login, _logout }}
    ></AuthContext.Provider>
  )
}

// 组件消费 AuthContext，使用 user、login、logout 全局状态
export const useAuth = () => {
  const value = useContext(AuthContext)
  if (!value) {
    throw new Error('useAuth 必须在 AuthProvider 中使用')
  }
  return value
}
