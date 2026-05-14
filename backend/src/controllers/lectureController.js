import Lecture from "../models/Lecture.js";
import cloudinary from '../config/cloudinary.js'
import {Course} from "../models/Course.js";

export const createLecture =
async (req, res) => {
   try {
      const { courseId } = req.params;
      const { title, description} = req.body;
     // CHECK COURSE EXISTS

      const course =
         await Course.findById(courseId);

      if (!course) {
         return res.status(404).json({
           message: "Course not found"
         });

      }
      // CREATE LECTURE

      const lecture =
         await Lecture.create({
            title,
            description,
            courseId
         });
      // PUSH LECTURE ID INTO COURSE

      course.lectures.push(
         lecture._id
      );

      await course.save();
      res.status(201).json({
         message:"Lecture created",
         lecture
      });

   } catch (error) {
      console.log(error);
      res.status(500).json({
         message: "Server Error"
      });
   }
};


export const getCourseLectures =
async (req, res) => {

   try {

      const { courseId } =
         req.params;

      const lectures =
         await Lecture.find({

            courseId

         });

      res.status(200).json(
         lectures
      );

   } catch (error) {

      console.log(error);

      res.status(500).json({

         message:
            "Server Error"

      });

   }

};


export const deleteLecture = async (req, res) => {
  try {
    const { lectureId } = req.params;

    const lecture = await Lecture.findById(lectureId);

    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }

    await Course.findByIdAndUpdate(lecture.courseId, {
      $pull: { lectures: lectureId }
    });

    await Lecture.findByIdAndDelete(lectureId);

    res.status(200).json({ message: "Lecture deleted" });

  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



export const updateLecture = async (req, res) => {
  try {
    const { lectureId } = req.params;
    const { title, description } = req.body;
    console.log('update lecture details', lectureId, title, description)
    const updatedLecture = await Lecture.findByIdAndUpdate(
      lectureId,
      { title, description },
      { new: true }
    );

    if (!updatedLecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }

    res.status(200).json({
      message: "Lecture updated",
      lecture: updatedLecture
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const getLectureById = async (req, res) => {
  try {
    const { lectureId } = req.params;

    const lecture = await Lecture.findById(lectureId);

    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }

    res.status(200).json(lecture);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};




export const uploadLectureVideo = async (req, res) => {

   try {

      const { lectureId } = req.params;

      const lecture = await Lecture.findById(lectureId);

      if (!lecture) {
         return res.status(404).json({
            message: "Lecture not found"
         });
      }

      if (!req.file) {
         return res.status(400).json({
            message: "No video uploaded"
         });
      }

      // DELETE OLD VIDEO
      if (lecture.videoPublicId) {

         await cloudinary.uploader.destroy(
            lecture.videoPublicId,
            { resource_type: "video" }
         );

      }

      // UPLOAD NEW VIDEO
      const result = await cloudinary.uploader.upload(
         req.file.path,
         {
            resource_type: "video",
            folder: "lecture_videos"
         }
      );

      // SAVE IN DATABASE
      lecture.videoUrl = result.secure_url;
      lecture.videoPublicId = result.public_id;

      await lecture.save();

      res.status(200).json({
         message: "Video uploaded",
         lecture
      });

   } catch (error) {

      console.log(error);

      res.status(500).json({
         message: "Server Error"
      });

   }

};