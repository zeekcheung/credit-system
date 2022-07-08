import { Typography } from 'antd'
import { useAuth } from 'contexts/auth-context'
import { useCourses } from 'utils/course'
import { Container } from '../course-list'
import { List } from '../course-list/list'

export const MyCourse = () => {
  const { user } = useAuth()
  const param = { studenId: user!.studentId }
  console.log(user)
  const { data, error, isLoading } = useCourses('timetable', param)

  return (
    <Container>
      <Typography.Text type="danger">{error?.message}</Typography.Text>
      <List type="MyCourse" data={data || []} loading={isLoading} />
    </Container>
  )
}
