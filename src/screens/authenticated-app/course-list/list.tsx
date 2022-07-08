import { Button, Table } from 'antd'
import type { ColumnsType, TableProps } from 'antd/lib/table'
import { useAuth } from 'contexts/auth-context'
import { useHttp } from 'utils/http'

export interface Course {
  id: string // 课程编号
  name: string // 课程名
  credit: number // 学分
  teacher: string // 上课教师
  time: string // 上课时间
  location: string // 上课地点
  area: string // 上课校区
  studentNum: number // 选课人数
  term?: string // 学年
  unit?: string // 开课单位
  conflict?: number // 冲突事件
  operation?: number // 操作类型
}

interface ListProps extends TableProps<Course> {
  type: 'CourseList' | 'MyCourse'
  data: Course[]
}

export const List = ({ type, data, ...props }: ListProps) => {
  const columns: ColumnsType<Course> = [
    {
      title: '课程编号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '课程名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '学分',
      dataIndex: 'credit',
      key: 'credit',
    },
    {
      title: '上课教师',
      dataIndex: 'teacher',
      key: 'teacher',
    },
    {
      title: '上课时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '上课地点',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: '上课校区',
      dataIndex: 'area',
      key: 'area',
    },
    {
      title: '选课人数',
      dataIndex: 'studentNum',
      key: 'studentNul',
    },
  ]
  const { user } = useAuth()
  const client = useHttp()
  const handleClick = (
    endpoint: string,
    param: { studentId: string; courseId: string }
  ) => client(`/course/${endpoint}`, { data: param })

  const render = (type: string) => {
    const endpoint: string = type === 'CourseList' ? 'choose' : 'drop'
    const content: string = type === 'CourseList' ? '选课' : '退选'
    return (_value: any, { id }: Course) => (
      <Button
        type={'primary'}
        onClick={() =>
          handleClick(endpoint, { studentId: user!.studentId, courseId: id })
        }
      >
        {content}
      </Button>
    )
  }

  const operationColumn = {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    render: render(type),
  }

  if (type === 'CourseList') {
    columns.push(
      {
        title: '时间冲突',
        dataIndex: 'conflict',
        key: 'conflict',
      },
      operationColumn
    )
  } else if (type === 'MyCourse') {
    columns.push(operationColumn)
  }

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(course) => course.id}
      size={'small'}
      pagination={{ position: ['bottomCenter'] }}
      {...props}
    />
  )
}
