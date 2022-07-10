module.exports = (req, res) => {
  const { path, method, headers, body } = req
  const token = 'zz 123456'

  /**
   * api: http://localhost:5000/course/list
   * method: GET
   */
  if (path === '/course/list' && method === 'GET') {
    if (headers.authorization === token) {
      res.status(200).json({
        code: 200,
        message: 'success',
        data: [
          {
            id: 'CST3254A',
            name: '应用密码学',
            credit: 2,
            teacher: '方若宇',
            time: '3-18周 星期二 6-7节',
            location: 'E303',
            area: '校本部',
            studentNum: 70,
            conflict: '',
          },
          {
            id: 'CST3259A',
            name: '数据挖掘',
            credit: 2,
            teacher: '孙浩军',
            time: '3-18周 星期四 6-7节',
            location: 'E305',
            area: '校本部',
            studentNum: 31,
            conflict: '',
          },
          {
            id: 'CST3451A',
            name: '软件质量与测试',
            credit: 2,
            teacher: '张承钿',
            time: '3-18周 星期一 3-4节',
            location: 'E401',
            area: '校本部',
            studentNum: 1,
            conflict: '',
          },
        ],
      })
    } else {
      res.status(500).json({
        code: 500,
        message: '服务器失败，获取课程列表失败',
        data: null,
      })
    }
  }

  if (path === '/course/timetable' && method === 'GET') {
    if (headers.authorization === token) {
      res.status(200).json({
        code: 200,
        message: 'success',
        data: [
          {
            id: 'CST3254A',
            name: '应用密码学',
            credit: 2,
            teacher: '方若宇',
            time: '3-18周 星期二 6-7节',
            location: 'E303',
            area: '校本部',
            studentNum: 70,
            conflict: '',
          },
          {
            id: 'CST3259A',
            name: '数据挖掘',
            credit: 2,
            teacher: '孙浩军',
            time: '3-18周 星期四 6-7节',
            location: 'E305',
            area: '校本部',
            studentNum: 31,
            conflict: '',
          },
          {
            id: 'CST3451A',
            name: '软件质量与测试',
            credit: 2,
            teacher: '张承钿',
            time: '3-18周 星期一 3-4节',
            location: 'E401',
            area: '校本部',
            studentNum: 1,
            conflict: '',
          },
        ],
      })
    } else {
      res.status(500).json({
        code: 500,
        message: '服务器失败，获取课表失败',
        data: null,
      })
    }
  }
}
