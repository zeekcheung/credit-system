import { BellFilled, InfoCircleFilled } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Avatar, Button, Dropdown, Menu, Space } from 'antd'
import background from 'assets/background.jpg'
import logo from 'assets/logo.png'
import avatar from 'assets/avatar.png'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { CourseList } from './course-list'
import { Home } from './home'
import { AllNotice } from './home/all-notice'
import { ImportantNotice } from './home/important-notice'
import { MyNotice } from './home/my-notice'
import { MyCourse } from './my-course'
import { useAuth } from 'contexts/auth-context'

export const AuthenticatedApp = () => {
  return (
    <Box>
      <Container>
        <Header>
          <Left />
          <Middle />
          <Right />
        </Header>
        <MainBox>
          <Title>系统通知</Title>
          <Main>
            <Routes>
              <Route path="/home" element={<Home />}>
                <Route index element={<AllNotice />} />
                <Route path="all" element={<AllNotice />} />
                <Route path="important" element={<ImportantNotice />} />
                <Route path="mine" element={<MyNotice />} />
              </Route>
              <Route path="/course-list" element={<CourseList />} />
              <Route path="/my-course" element={<MyCourse />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Main>
        </MainBox>
        <Background />
      </Container>
    </Box>
  )
}

const Box = styled.div`
  height: 100vh;
  padding: 1.5vh 10vw;
  background-color: #ebedee;
`

const Container = styled.div`
  height: 96vh;
  position: relative;
`

const Header = styled.div`
  height: 7vh;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    height: 7vh;
  }
`

const Left = () => {
  const Navigate = useNavigate()

  return (
    <Button type={'link'} onClick={() => Navigate('home')}>
      <Logo>学分制系统</Logo>
    </Button>
  )
}

const Logo = styled.h2`
  padding-left: 5rem;
  font-size: 1.3rem;
  font-weight: bold;
  transform: translate(1rem);

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 4rem;
    height: 7vh;
    left: 1em;
    top: -60%;
    background-image: url(${logo});
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: center;
  }
`

const Nav = styled.nav`
  width: 30rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0;
`

const Middle = () => (
  <Nav>
    <NavLink
      to={'/home'}
      className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
    >
      系统首页
    </NavLink>
    <NavLink
      to={'/course-list'}
      className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
    >
      查询课程
    </NavLink>
    <NavLink
      to={'/my-course'}
      className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
    >
      我的课程
    </NavLink>
  </Nav>
)

const Right = () => {
  const { _logout } = useAuth()
  return (
    <Space size={'middle'} style={{ marginRight: '3em' }}>
      <BellFilled />
      <InfoCircleFilled />
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key={'logout'}>
              <Button type="link" onClick={_logout}>
                登出
              </Button>
            </Menu.Item>
          </Menu>
        }
      >
        <Button type="link" onClick={(e) => e.preventDefault()}>
          <Avatar src={avatar} size={'small'} />
        </Button>
      </Dropdown>
    </Space>
  )
}
const Background = styled.div`
  &::after {
    content: '';
    width: 100%;
    height: 88vh;
    position: absolute;
    left: 0;
    top: 7vh;
    /* background-image: url(${background}); */
    background: linear-gradient(white, blue);
    background-repeat: no-repeat;
    background-size: cover;
    filter: opacity(0.05) brightness(2);
  }
  z-index: 1;
`

const MainBox = styled.div`
  width: 100%;
  height: 88vh;
  padding: 5vh 8vw;
  position: relative;
  z-index: 5;
`

const Title = styled.h2`
  font-size: 1.2rem;
  padding-left: 1em;
  margin-bottom: 1em;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 0.5em;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #1047f7;
  }
`

const Main = styled.div`
  width: (100% - 16vw);
  height: 75vh;
  background-color: #fff;
  border-radius: 0.5rem;
`
