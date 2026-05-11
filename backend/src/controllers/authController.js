import { OAuth2Client } from 'google-auth-library'
import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'
import { ENV } from '../utils/env.js'
import generateToken from '../utils/generateToken.js'

const client = new OAuth2Client(ENV.GOOGLE_CLIENT_ID)

export const googleAuth = async (req, res) => {
  try {
    const { token } = req.body
    // Here you would typically verify the token with Google's API
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: ENV.GOOGLE_CLIENT_ID
    })

    const payload = ticket.getPayload()
    const { name, email, googleId } = payload

    // Check if user already exists
    let user = await User.findOne({ email })
    if (!user) {
      // Create new user
      user = await User.create({
        name,
        email,
        googleId
      })
    }

    const jwtToken = generateToken(user._id, user.role);
    res.cookie('token', jwtToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7*24*60*60*1000 // 7 hour
    })

    res.status(200).json({ success: true, message: 'Google authentication successful', user })
   
  } catch(error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Google authentication failed', error: error.message })
  }
}

export const getMe =  async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
    res.status(200).json({ success: true, user })
    console.log('user data fetched successfully', user)
  } catch(error) {
    return res.status(500).json({ success: false, message: 'Failed to fetch user data', error: error.message })
  }
}

export const logout = async (req, res) => {
  try{
    res.clearCookie('token', {
      httpOnly: true,
      secure: false,
      sameSite: 'lax'
    })
    res.status(200).json({ success: true, message: 'Logged out successfully' })
    console.log('user logged out successfully')
  } catch(error) {
    console.error('Error occurred while logging out:', error)
    res.status(500).json({ success: false, message: 'Failed to log out' })
  }
}