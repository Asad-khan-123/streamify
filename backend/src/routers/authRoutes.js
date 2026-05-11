import express from 'express'
import { googleAuth } from '../controllers/authController.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import { getMe } from '../controllers/authController.js'
import { logout } from '../controllers/authController.js'


const router = express.Router()

router.post('/google', googleAuth)
router.get('/me', authMiddleware, getMe)
router.post('/logout', authMiddleware, logout)


export default router