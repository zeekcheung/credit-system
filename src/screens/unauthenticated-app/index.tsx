import styled from '@emotion/styled'
import { Card } from 'antd'
import { Login } from './login'
import background from 'assets/background.jpg'
import logo from 'assets/logo.png'

export const UnauthenticatedApp = () => {
  return (
    <Container>
      <Background />
      <ShadowCard>
        <Title>
          <Logo />
          欢迎使用学分制系统
        </Title>
        <Login />
      </ShadowCard>
    </Container>
  )
}

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    rgba(255, 255, 255, 0.7) 2.10531e-14% rgba(255, 255, 255, 0.3) 100%
  );
`

export const Background = styled.div`
  width: 95vw;
  height: 95vh;
  position: absolute;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: opacity(0.08);
`

const ShadowCard = styled(Card)`
  box-sizing: border-box;
  width: 37rem;
  height: 40rem;
  padding: 3.2rem 3.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const Title = styled.h2`
  height: 3.5rem;
  font-size: 1.5rem;
  line-height: 3.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
`

const Logo = styled.div`
  position: absolute;
  transform: translate(1.5rem);
  width: 3.5rem;
  height: 3.5rem;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
`
