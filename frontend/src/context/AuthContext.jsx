import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import API from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  const checkAuth = async () => {
    try {
      const response = await API.get('/auth/me')
      console.log('Authenticated user:', response.data.user)
      setUser(response.data.user)
    } catch (error) {
      console.log('Not authenticated')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  const logout = async () => {
    try {
      await API.post('/auth/logout')
      setUser(null)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}