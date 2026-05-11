import jwt from 'jsonwebtoken'
import {ENV} from './env.js'

const generateToken = (userId, role) => {
  return jwt.sign({ userId, role }, ENV.JWT_SECRET, { expiresIn: '1h' })
}

export default generateToken