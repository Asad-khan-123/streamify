import { Course } from "../models/Course.js"

import cloudinary from "../config/cloudinary.js";

export const createCourse = async (req, res) => {

   try {

      const {
         title,
         description,
         price,
         isPublished
      } = req.body;

      let thumbnailUrl = "";
      console.log('Received file:', req.file);

      if (req.file) {

         const uploadedImage =
            await cloudinary.uploader.upload(

               req.file.path,

               {
                  folder: "lms-thumbnails"
               }

            );

         thumbnailUrl =
            uploadedImage.secure_url;

      }

      const course = await Course.create({

         title,

         description,

         price,

         thumbnail: thumbnailUrl,

         isPublished,

         createdBy: req.user.userId

      });

      console.log('Course created successfully:', course);

      res.status(201).json({

         message: "Course created",

         course

      });

   } catch (error) {

      console.log(error);

      res.status(500).json({
         message: "Server Error"
      });

   }

};

export const getAdminCourse = async(req, res) => {
  try{
    
    const courses = await Course.find({ createdBy: req.user.userId })
    
    res.status(200).json({ courses })
  } catch(error) {
    
    res.status(500).json({ message: error.message })
  }
}

export const publishCourses = async (req, res) => {
  try {
    const { courseId } = req.params
    const course = await Course.findByIdAndUpdate(courseId, { isPublished: true }, { new: true })
    res.status(200).json({ message: 'Course published successfully', course })
  } catch(error) {
    res.status
  }
}

export const getPublishedCourses = async(req, res) => {
  try{
    const courses = await Course.find({ isPublished: true })
    res.status(200).json({ courses })
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
}

export const getSingleCourse = async (req, res) => {

   try {

      const { courseId } = req.params;
      
      const course = await Course.findById(
         courseId
      ).populate('lectures');

      if (!course) {
        
         return res.status(404).json({
            message: "Course not found"
         });

      }

      res.status(200).json(course);

   } catch (error) {

      res.status(500).json({
         message: "Server Error"
      });

   }

};

export const updateCourse = async(req, res) => {
  try{
    const {courseId} = req.params
    console.log('updated courseId',courseId)
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      req.body,
      {new: true}
    )
    res.status(200).json(updatedCourse)
  } catch(error){
    res.status(500).json({message:'server error'})
  }
}
