import { Course } from 'screens/authenticated-app/course-list/list'
import { cleanObject, useMount } from 'utils'
import { useAsync } from './async'
import { useHttp } from './http'
import { useUrlQueryParam } from './url'

export const useCourses = <P>(endpoint: string, param: P) => {
  const { run, ...result } = useAsync<Course[]>()
  const client = useHttp()

  useMount(() =>
    run(client(`/course/${endpoint}`, { data: cleanObject(param || {}) }))
  )

  return result
}

export const useCoursesSearchParam = () =>
  useUrlQueryParam(['term', 'unit', 'name'])
