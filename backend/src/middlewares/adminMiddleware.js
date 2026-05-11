
const adminMiddleware = (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Forbidden: Admins only' })
    }
    next()
  } catch (error) {
    console.log('Admin middleware error:', error)
    return res.status(500).json({ success: false, message: 'Internal server error' })
  }
}

export default adminMiddleware