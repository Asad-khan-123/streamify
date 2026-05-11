import express from 'express';
import cookieParser from 'cookie-parser';
import { ENV } from './utils/env.js'
import connectDb from './utils/db.js'
import cors from 'cors'
import authRouter from './routers/authRoutes.js'
import courseRoute from './routers/courseRoute.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({
  origin: ENV.CLIENT_URL,
  credentials: true
}))

app.get('/', (req, res) => {
  res.send('backend running')
})
  
app.use('/api/auth', authRouter)
app.use('/api/courses', courseRoute)

const PORT = ENV.PORT
const server = async () => {
  try {
    await connectDb()
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`)
    })
  } catch (error) {
    console.log('server error', error)
  }
}

server();

