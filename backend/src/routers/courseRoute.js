import express from 'express'
import upload from '../middlewares/uploadMiddleware.js'

import {
  createCourse,
  getAdminCourse,
  publishCourses,
  getPublishedCourses,
  getSingleCourse,
  updateCourse

} from '../controllers/corseController.js'

import authMiddleware from '../middlewares/authMiddleware.js'
import adminMiddleware from '../middlewares/adminMiddleware.js'

const router = express.Router()

router.post('/create', authMiddleware, adminMiddleware, upload.single('thumbnail'), createCourse)
router.get('/admin', authMiddleware, adminMiddleware, getAdminCourse)
// router.patch('/published', authMiddleware, adminMiddleware, publishCourses)
router.get('/published', authMiddleware,  getPublishedCourses)
router.get('/:courseId', authMiddleware, getSingleCourse)
router.put('/update/:courseId', authMiddleware, adminMiddleware, updateCourse)


export default router
