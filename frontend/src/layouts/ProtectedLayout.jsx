import Navbar from '../components/Navbar'

import {Outlet} from 'react-router-dom'

const ProtectedLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default ProtectedLayout
