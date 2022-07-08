import { Form, Input, Select } from 'antd'
import { Course } from './list'

export type Param = Partial<Pick<Course, 'term' | 'unit' | 'name'>>

interface SearchPanelProps {
  param: Param
  setParam: (param: Param) => void
}

const { Option } = Select

export const SearchPanel = ({ param, setParam }: SearchPanelProps) => {
  const handleChange = (key: string) => (value: string) =>
    setParam({ ...param, [key]: value })

  const handleSubmit = ({ ...items }) => setParam(items)

  return (
    <Form
      style={{ marginBottom: '2rem' }}
      layout="inline"
      onFinish={handleSubmit}
    >
      <Label id="term" content="学年" />
      <Form.Item style={{ marginRight: '6em', width: '8em' }}>
        <Select defaultValue={'全部'} onChange={handleChange('term')} id="term">
          <Option value={'all'}>全部</Option>
          <Option value={'sortUp'}>按日期↑</Option>
          <Option value={'sortDown'}>按日期↓</Option>
        </Select>
      </Form.Item>

      <Label id="unit" content="开课单位" />
      <Form.Item style={{ marginRight: '8em', width: '8em' }}>
        <Select defaultValue={'全部'} onChange={handleChange('unit')} id="unit">
          <Select.Option value={'all'}>全部</Select.Option>
          <Select.Option value={'computer'}>计算机系</Select.Option>
          <Select.Option value={'building'}>土木系</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Input type={'text'} placeholder="请输入课程名" />
      </Form.Item>
      <Form.Item>
        <Input type={'submit'} value="查询" />
      </Form.Item>
    </Form>
  )
}

const Label = ({ id, content }: { id: string; content: string }) => (
  <label htmlFor={id} style={{ marginRight: '2em' }}>
    {content}
  </label>
)
