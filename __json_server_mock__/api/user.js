module.exports = (req, res) => {
  const { path, method, headers, body } = req

  /**
   * api: http://localhost:5000/login
   * method: POST
   * body: { account: string, password: string }
   */
  if (path === '/user/login' && method === 'POST') {
    const { username, password } = body
    if (username === 'zz' && password === '123456') {
      res.status(200).json({
        student: {
          userId: '2019611075',
          studentId: '2019611075',
          name: '19zyzhang',
          grade: '2019',
          major: 'CS',
        },
        user: {
          userId: 'zz',
          username: 'zz',
          password: '123456',
          role: 'student',
          sex: 'male',
          age: 21,
        },
      })
    } else {
      res.status(400).json({ message: '用户名或密码错误' })
    }
  }
}
