import express from 'express'

import {
  createCourse,
  getAdminCourse,
  publishCourses,
  getPublishedCourses,
  getSingleCourse

} from '../controllers/corseController.js'

import authMiddleware from '../middlewares/authMiddleware.js'
import adminMiddleware from '../middlewares/adminMiddleware.js'

const router = express.Router()

router.post('/create', authMiddleware, adminMiddleware, createCourse)
router.get('/admin', authMiddleware, adminMiddleware, getAdminCourse)
// router.patch('/published', authMiddleware, adminMiddleware, publishCourses)
router.get('/published', authMiddleware,  getPublishedCourses)
router.get('/:courseId', authMiddleware, getSingleCourse)


export default router
