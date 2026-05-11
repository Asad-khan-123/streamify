import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

import API from "../api/axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    try {
      const response = await API.get("/courses/published");
      console.log("Fetched courses:", response.data);

      // Ensure courses is an array
      const coursesData = Array.isArray(response.data)
        ? response.data
        : response.data?.courses || [];
      setCourses(coursesData);
    } catch (error) {
      console.log(error);
      setCourses([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-10">Courses</h1>
       
       
      <div className="grid grid-cols-3 gap-5">
        {Array.isArray(courses) && courses.length > 0 ? (
          courses.map((course) => (
            <div key={course._id} className="border p-5 rounded">
              <div className="h-40 bg-gray-200 mb-3" />

              <h2 className="text-xl font-bold">{course.title}</h2>

              <p className="text-gray-600">{course.description}</p>

              <p className="mt-2 font-bold">₹ {course.price}</p>
              <Link to={`/course/${course._id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No courses available</p>
        )}
      </div>
      
    </div>
  );
}

export default Courses;
