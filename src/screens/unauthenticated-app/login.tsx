import styled from '@emotion/styled'
import { Button, Checkbox, Form, Input } from 'antd'
import { useAuth } from 'contexts/auth-context'

interface Values {
  username: string
  password: string
  remember: true
}

export const Login = () => {
  const { _login } = useAuth()
  const onFinish = ({ username, password, remember }: Values) =>
    _login({ username, password }, remember).catch((error) => {
      window.alert(error.message)
      window.location.reload()
    })

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ textAlign: 'left' }}
    >
      <Label id="username" text="账户" />
      <Form.Item
        name={'username'}
        rules={[{ required: true, message: '请输入您的账号!' }]}
      >
        <Input id="username" autoComplete="username" />
      </Form.Item>

      <Label id="password" text="密码" />
      <Form.Item
        name={'password'}
        rules={[{ required: true, message: '请输入您的密码!' }]}
      >
        <Input id="password" type={'password'} autoComplete="password" />
      </Form.Item>

      <Form.Item name={'remember'} valuePropName="checked">
        <Checkbox>记住账号</Checkbox>
      </Form.Item>

      <Form.Item>
        <LongButton type="primary" htmlType="submit">
          立即登录
        </LongButton>
      </Form.Item>
    </Form>
  )
}

const Label = ({ id, text }: { id: string; text: string }) => (
  <div>
    <label htmlFor={id}>{text}</label>
  </div>
)

const LongButton = styled(Button)`
  width: 100%;
  background-color: #00f;
`
