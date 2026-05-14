import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({

   title: {
      type: String,
      required: true
   },

   description: {
      type: String,
      default: ""
   },

   videoUrl: {
      type: String,
      default: ""
   },

   videoPublicId: {
      type: String,
      default: ""
   },
   
   pdfNotes: {
      type: String,
      default: ""
   },

   duration: {
      type: Number,
      default: 0
   },

   order: {
      type: Number,
      default: 1
   },

   courseId: {

      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"

   },

   quiz: [

      {
         question: String,
         options: [String],
         correctAnswer: String
      }

   ]

}, { timestamps: true });

const Lecture = mongoose.model(
   "Lecture",
   lectureSchema
);

export default Lecture;