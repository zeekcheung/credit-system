const handleUserRoute = require('./user')
const handleCourseRoute = require('./course')

module.exports = (req, res, next) => {
  handleUserRoute(req, res)
  handleCourseRoute(req, res)
  next()
}
