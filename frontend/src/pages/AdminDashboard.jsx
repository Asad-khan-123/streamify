import { useEffect, useState } from "react";

import API from "../api/axios";

import { Link } from "react-router-dom";

function AdminDashboard() {

   const [courses, setCourses] = useState([]);

   const fetchCourses = async () => {

      try {
       
          const response = await API.get("/courses/admin");
          console.log('Fetched courses:', response.data);
         
         // Ensure courses is an array
         const coursesData = Array.isArray(response.data) ? response.data : response.data?.courses || [];
         setCourses(coursesData);

      } catch (error) {

         console.log(error);
         setCourses([]); // Set empty array on error

      }

   };

   useEffect(() => {

      fetchCourses();

   }, []);

   return (

      <div className="p-10">

         <div className="flex justify-between mb-5">

            <h1 className="text-3xl font-bold">
               Admin Dashboard
            </h1>

            <Link
               to="/admin/create-course"
               className="bg-black text-white px-4 py-2"
            >
               Create Course
            </Link>

         </div>

         <div className="grid gap-4">

            {
               Array.isArray(courses) && courses.length > 0 ? (
                  courses.map((course) => (

                     <div
                        key={course._id}
                        className="border p-5"
                     >

                        <h2 className="text-xl font-bold">
                           {course.title}
                        </h2>

                        <p>
                           ₹ {course.price}
                        </p>

                     </div>

                  ))
               ) : (
                  <p>No courses found</p>
               )
            }

         </div>

      </div>

   );

}

export default AdminDashboard;