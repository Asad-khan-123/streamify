import React from "react";
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import ProtectedRoute from "./components/protectedRoute";
import Navbar from './components/Navbar';
import ProtectedLayout from "./layouts/ProtectedLayout";
import PublicRoute from "./components/PublicRoute";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import CreateCourse from "./pages/CreateCourse";
import Courses from "./pages/Courses";
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (
   
   <Routes>

    {/* Student Routes */}
    <Route element={<ProtectedRoute><ProtectedLayout /></ProtectedRoute>}>
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/courses' element={<Courses />} /> 
    <Route path='/course/:courseId' element={<CourseDetails />} />
    </Route> 

    {/* Admin Routes */}
    <Route element={<AdminRoute><ProtectedLayout /></AdminRoute>}>
    <Route path='/admin/dashboard' element={<AdminDashboard />} />
    <Route path='/admin/create-course' element={<CreateCourse />} />
    </Route>

    {/* Public Routes */}
    <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
   </Routes>
  );
};

export default App;
