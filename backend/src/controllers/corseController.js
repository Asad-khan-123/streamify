import { Course } from "../models/Course.js"

export const createCourse = async(req, res) => {
  try {
    const { title, description, price } = req.body
    console.log('Creating course with data:', { title, description, price, createdBy: req.user.userId })
    
    const course = await Course.create({
      title,
      description,
      price,
      createdBy: req.user.userId
    })
    console.log('Course created successfully:', course)
    res.status(201).json({ message: 'Course created successfully', course })
  } catch (error) {
    console.error('Error creating course:', error)
    res.status(500).json({ message: error.message })
  }
}

export const getAdminCourse = async(req, res) => {
  try{
    console.log('Fetching courses for admin with userId:')
    const courses = await Course.find({ createdBy: req.user.userId })
    console.log('Admin courses retrieved successfully:', courses)
    res.status(200).json({ courses })
  } catch(error) {
    console.error('Error retrieving admin courses:', error)
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
    const courses = await Course.find({ isPublished: false })
    res.status(200).json({ courses })
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
}

export const getSingleCourse = async (req, res) => {

   try {

      const { courseId } = req.params;
      console.log('Fetching course with ID:', courseId);
      const course = await Course.findById(
         courseId
      );

      if (!course) {
         console.leg('Course not found with ID:', courseId);
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