import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import { createLecture, getCourseLectures, deleteLecture, getLectureById, updateLecture, uploadLectureVideo} from "../controllers/lectureController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.post(
   "/:courseId",
   authMiddleware,
   adminMiddleware,
   createLecture
);

router.get(
   "/:courseId",
   authMiddleware,
   adminMiddleware,
   getCourseLectures
);

router.delete(
   "/:lectureId",
   authMiddleware,
   adminMiddleware,
   deleteLecture
);

router.get(
   "/single/:lectureId",
   authMiddleware,
   adminMiddleware,
   getLectureById
);

router.put(
   "/:lectureId",
   authMiddleware,
   adminMiddleware,
   updateLecture
);

router.put(
   "/video/:lectureId",
   authMiddleware,
   adminMiddleware,
   upload.single("video"),
   uploadLectureVideo
);
export default router;