import styled from '@emotion/styled'
import { Space } from 'antd'
import { NavLink, Outlet } from 'react-router-dom'
import { Container as _Container } from '../course-list'

export const Home = () => {
  return (
    <Container>
      <Nav />
      <Outlet />
    </Container>
  )
}

const Container = styled(_Container)`
  display: flex;
`

const Nav = () => (
  <Space direction={'vertical'}>
    <NavLink
      to={'all'}
      className={({ isActive }) =>
        'slide-link' + (isActive ? ' slide-activated' : '')
      }
    >
      所有通知
    </NavLink>
    <NavLink
      to={'important'}
      className={({ isActive }) =>
        'slide-link' + (isActive ? ' slide-activated' : '')
      }
    >
      重要通知
    </NavLink>
    <NavLink
      to={'mine'}
      className={({ isActive }) =>
        'slide-link' + (isActive ? ' slide-activated' : '')
      }
    >
      我的通知
    </NavLink>
  </Space>
)
