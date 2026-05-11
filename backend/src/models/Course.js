import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },  
  thumbnail: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lectures: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }
  ],
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  isPublished: { type: Boolean, default: false },
  publishedAt: { type: Date },
}, { timestamps: true })

export const Course = mongoose.model('Course', courseSchema)

