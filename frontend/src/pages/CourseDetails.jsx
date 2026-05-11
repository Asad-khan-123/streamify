import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import API from "../api/axios";

function CourseDetails() {

   const { courseId } = useParams();

   const [course, setCourse] = useState(null);

   const [loading, setLoading] = useState(true);

   const fetchCourse = async () => {

      try {

         const response = await API.get(

            `/courses/${courseId}`

         );

         setCourse(response.data);

      } catch (error) {

         console.log(error);

      } finally {

         setLoading(false);

      }

   };

   useEffect(() => {

      fetchCourse();

   }, []);

   if (loading) {

      return <h1>Loading...</h1>;

   }

   return (

      <div className="p-10 max-w-4xl mx-auto">

         <div className="h-80 bg-gray-200 rounded mb-5" />

         <h1 className="text-4xl font-bold mb-3">

            {course.title}

         </h1>

         <p className="text-gray-600 mb-5">

            {course.description}

         </p>

         <p className="text-2xl font-bold mb-5">

            ₹ {course.price}

         </p>

         <button
            className="bg-black text-white px-5 py-3 rounded"
         >

            Enroll Now

         </button>

      </div>

   );

}

export default CourseDetails;