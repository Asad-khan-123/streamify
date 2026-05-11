import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useNavigate} from 'react-router-dom'
const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }
  
  return (
    <div className='h-16 bg-gray-800 text-white flex items-center justify-between px-4'>
      <div className='text-lg font-bold'>Coaching Portal</div>
      {user ? (
        <div className='flex items-center space-x-4'>
          <Link to='/dashboard'>Dashboard</Link>
          <span>{user.name}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/login'>Login</Link>
      )}

      </div>
  )
}

export default Navbar