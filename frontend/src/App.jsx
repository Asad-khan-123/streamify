import React from "react";
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import StudentRoute from "./components/StudentRoute";
import Navbar from './components/Navbar';
import ProtectedLayout from "./layouts/ProtectedLayout";
import PublicRoute from "./components/PublicRoute";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import CreateCourse from "./pages/CreateCourse";
import Courses from "./pages/Courses";
import CourseDetails from './pages/CourseDetails'
import ManageCourse from './pages/ManageCourse'
import ManageLecture from "./pages/ManageLecture";
import UpdateLecture from "./pages/UpgradeLecture";

const App = () => {
  return (
   
   <Routes>

    {/* Student Routes - Only for students */}
    <Route element={<StudentRoute><ProtectedLayout /></StudentRoute>}>
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/courses' element={<Courses />} /> 
    <Route path='/course/:courseId' element={<CourseDetails />} />
    </Route> 

    {/* Admin Routes - Only for admins */}
    <Route element={<AdminRoute><ProtectedLayout /></AdminRoute>}>
    <Route path='/admin/dashboard' element={<AdminDashboard />} />
    <Route path='/admin/create-course' element={<CreateCourse />} />
    <Route path='/admin/course/:courseId/manage' element={<ManageCourse />} />
    <Route path='/admin/course/:courseId/lectures' element={<ManageLecture />} />
    <Route path='/admin/course/:courseId/lecture/:lectureId/manage' element={<UpdateLecture />} />
    </Route>

    {/* Public Routes */}
    <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
   </Routes>
  );
};

export default App;
