import styled from '@emotion/styled'
import { Typography } from 'antd'
import { useState } from 'react'
import { useCourses } from 'utils/course'
import { List } from './list'
import { SearchPanel } from './search-panel'
import { Param } from './search-panel'

export const CourseList = () => {
  const [param, setParam] = useState<Param>({})
  const { data, error, isLoading } = useCourses<Param>('list', param)

  return (
    <Container>
      <SearchPanel param={param} setParam={setParam} />
      <Typography.Text type="danger">{error?.message}</Typography.Text>
      <List type="CourseList" data={data || []} loading={isLoading} />
    </Container>
  )
}

export const Container = styled.div`
  padding: 3.2rem;
`
