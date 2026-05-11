import express from 'express'
import mongoose from 'mongoose'
import {ENV} from './env.js'

const connectDb = async() => {
  try{
    await mongoose.connect(ENV.DB_URL)
    console.log('db connected successfully')
  } catch(error) {
    console.log('db error', error)

    throw error
  }
}

export default connectDb