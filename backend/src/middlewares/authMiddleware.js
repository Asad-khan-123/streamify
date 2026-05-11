import jwt from 'jsonwebtoken'
import { ENV } from '../utils/env.js'

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized' })
  }

  try {
    const decoded = jwt.verify(token, ENV.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    console.log('Token verification failed:', error)
    return res.status(401).json({ success: false, message: 'Invalid token' })
  }
}

export default authMiddleware