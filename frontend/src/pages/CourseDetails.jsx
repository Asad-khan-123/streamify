import { useEffect, useState } from "react";
import Loading from '../components/Loading';
import { useParams, Link } from "react-router-dom";


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
         console.log('your course:', response.data);
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
      return <Loading />;
   }

 return (
   <div className="min-h-screen bg-[#F5F7FF]">

      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#6C63FF] via-[#7A73D1] to-[#8B85FF] rounded-b-[40px] px-5 sm:px-8 lg:px-10 pt-10 pb-28">

         <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>

         <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>

         <div className="relative z-10 max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

               {/* LEFT */}
               <div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-lg text-white mb-6">

                     <div className="w-2 h-2 rounded-full bg-green-400"></div>

                     <p className="text-sm font-medium">
                        Premium Video Course
                     </p>

                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                     {course.title}
                  </h1>

                  <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl">
                     {course.description}
                  </p>

                  {/* STATS */}
                  <div className="flex flex-wrap gap-3 mt-8">

                     <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-lg text-white font-medium">
                        🎥 {course.lectures?.length || 0} Lectures
                     </div>

                     <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-lg text-white font-medium">
                        👨‍🎓 {course.enrolledStudents?.length || 0} Students
                     </div>

                     <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-lg text-white font-medium">
                        🌍 Lifetime Access
                     </div>

                  </div>

               </div>

               {/* RIGHT */}
               <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-5 shadow-2xl">

                  <img
                     src={course.thumbnail}
                     alt={course.title}
                     className="w-full h-[260px] sm:h-[320px] object-cover rounded-[28px]"
                  />

               </div>

            </div>

         </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 -mt-16 relative z-20 pb-16">

         <div className="grid lg:grid-cols-[1fr_380px] gap-8">

            {/* LEFT SECTION */}
            <div className="space-y-8">

               {/* ABOUT COURSE */}
               <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

                  <h2 className="text-3xl font-extrabold text-gray-800">
                     About This Course
                  </h2>

                  <p className="mt-5 text-gray-600 leading-relaxed text-base sm:text-lg">
                     {course.description}
                  </p>

               </div>

               {/* COURSE CONTENT */}
               <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

                  <div className="flex items-center justify-between gap-4 flex-wrap">

                     <div>

                        <h2 className="text-3xl font-extrabold text-gray-800">
                           Course Content
                        </h2>

                        <p className="text-gray-500 mt-2">
                           {course.lectures?.length || 0} lectures included
                        </p>

                     </div>

                     <div className="px-5 py-3 rounded-2xl bg-[#F5F7FF] text-[#6C63FF] font-bold">
                        🎥 Video Course
                     </div>

                  </div>

                  {/* LECTURES */}
                  <div className="mt-8 space-y-4">
                     {
                        course.lectures?.length > 0 ? (

                           course.lectures.map((lecture, index) => (

                              <Link
                                 key={lecture._id}
                                 to={`/course/${course._id}/lectures/${lecture._id}`}
                              >

                                 <div className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-[#F8F9FF] border border-[#EEF0FF] hover:scale-[1.01] hover:shadow-lg transition-all cursor-pointer">

                                    <div className="flex items-start gap-4">

                                       <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#8B85FF] text-white flex items-center justify-center font-bold shadow-lg">
                                          {index + 1}
                                       </div>

                                       <div>

                                          <h3 className="font-bold text-gray-800">
                                             {lecture.title}
                                          </h3>

                                          <p className="text-sm text-gray-500 mt-1 leading-relaxed max-w-xl">
                                             {lecture.description || "Video Lecture"}
                                          </p>

                                       </div>

                                    </div>

                                    <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-xl shadow-sm">
                                       ▶️
                                    </div>

                                 </div>

                              </Link>

                           ))

                        ) : (

                           <div className="bg-[#F8F9FF] rounded-[28px] p-10 text-center">

                              <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-[#6C63FF] to-[#8B85FF] flex items-center justify-center text-3xl text-white mx-auto shadow-lg">
                                 🎥
                              </div>

                              <h3 className="text-2xl font-extrabold text-gray-800 mt-6">
                                 No Lectures Yet
                              </h3>

                              <p className="text-gray-500 mt-3 leading-relaxed">
                                 Lectures will appear here once instructor uploads them.
                              </p>

                           </div>

                        )
                     }

                  </div>

               </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-6">

               <div className="bg-white rounded-[32px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sticky top-24">

                  {/* PRICE */}
                  <div className="flex items-center justify-between mb-8">

                     <div>

                        <p className="text-gray-500">
                           Course Price
                        </p>

                        <h2 className="text-5xl font-extrabold text-gray-800 mt-2">
                           ₹ {course.price}
                        </h2>

                     </div>

                     <div className="w-16 h-16 rounded-[24px] bg-gradient-to-br from-[#6C63FF] to-[#8B85FF] flex items-center justify-center text-3xl shadow-xl">
                        🚀
                     </div>

                  </div>

                  {/* FEATURES */}
                  <div className="space-y-4 mb-8">

                     <div className="flex items-center gap-3 text-gray-700">
                        <span>✅</span>
                        <p>Full Lifetime Access</p>
                     </div>

                     <div className="flex items-center gap-3 text-gray-700">
                        <span>✅</span>
                        <p>Mobile Friendly Learning</p>
                     </div>

                     <div className="flex items-center gap-3 text-gray-700">
                        <span>✅</span>
                        <p>Premium Video Content</p>
                     </div>

                     <div className="flex items-center gap-3 text-gray-700">
                        <span>✅</span>
                        <p>Modern Learning Dashboard</p>
                     </div>

                  </div>

                  {/* BUTTON */}
                  <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                     Enroll Now
                  </button>

                  {/* INSTRUCTOR */}
                  <div className="mt-8 p-5 rounded-2xl bg-[#F5F7FF]">

                     <p className="text-sm text-gray-500">
                        Created By
                     </p>

                     <div className="flex items-center gap-4 mt-4">

                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#8B85FF] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                           A
                        </div>

                        <div>

                           <h3 className="font-bold text-gray-800">
                              Admin Instructor
                           </h3>
                           <p className="text-sm text-gray-500 mt-1">
                              Professional Educator
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
);
}

export default CourseDetails;