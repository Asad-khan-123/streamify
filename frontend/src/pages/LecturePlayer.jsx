import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api/axios";
import Loading from "../components/Loading";

const LecturePlayer = () => {

   const { courseId, lectureId } = useParams();

   const navigate = useNavigate();

   const [course, setCourse] = useState(null);
   const [currentLecture, setCurrentLecture] = useState(null);
   const [loading, setLoading] = useState(true);

   // FETCH COURSE

   const fetchCourse = async () => {

      try {

         const { data } = await API.get(
            `/courses/${courseId}`
         );

         setCourse(data);

         const selectedLecture =
            data.lectures.find(
               lecture => lecture._id === lectureId
            );

         setCurrentLecture(selectedLecture);

      } catch (error) {

         console.log(error);

      } finally {

         setLoading(false);

      }

   };

   useEffect(() => {

      fetchCourse();

   }, [lectureId]);

   if (loading) return <Loading />;

   return (

      <div className="min-h-screen bg-[#F5F7FF] pb-20">

         {/* HERO SECTION */}

         <div className="relative overflow-hidden bg-gradient-to-br from-[#6C63FF] via-[#7A73D1] to-[#8B85FF] rounded-b-[40px] px-5 sm:px-8 lg:px-10 pt-10 pb-24">

            <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>

            <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto">

               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                  {/* LEFT */}

                  <div>

                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-lg text-white mb-6">

                        <div className="w-2 h-2 rounded-full bg-green-400"></div>

                        <p className="text-sm font-medium">
                           Premium Lecture Player
                        </p>

                     </div>

                     <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">

                        {currentLecture?.title}

                     </h1>

                     <p className="mt-5 text-white/80 max-w-2xl leading-relaxed">

                        {
                           currentLecture?.description ||
                           "No description available."
                        }

                     </p>

                  </div>

                  {/* RIGHT */}

                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-6 text-white shadow-2xl w-full sm:w-[320px]">

                     <h2 className="text-5xl font-extrabold">

                        {course?.lectures?.length || 0}

                     </h2>

                     <p className="text-white/80 mt-2">
                        Total lectures in this course.
                     </p>

                     <div className="mt-8 flex items-center justify-between">

                        <span className="text-white/70">
                           Current Lecture
                        </span>

                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-white text-[#6C63FF]">

                           #{course?.lectures?.findIndex(
                              lecture => lecture._id === lectureId
                           ) + 1}

                        </span>

                     </div>

                  </div>

               </div>

            </div>

         </div>

         {/* MAIN CONTENT */}

         <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 -mt-14 relative z-20">

            <div className="grid lg:grid-cols-[1fr_380px] gap-8">

               {/* LEFT SIDE */}

               <div className="space-y-8">

                  {/* VIDEO PLAYER */}

                  <div className="bg-white rounded-[32px] p-4 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

                     {
                        currentLecture?.videoUrl ? (

                           <div className="overflow-hidden rounded-[28px] bg-black">

                              <video
                                 src={currentLecture.videoUrl}
                                 controls
                                 controlsList="nodownload"
                                 className="w-full"
                              />

                           </div>

                        ) : (

                           <div className="h-[400px] rounded-[28px] bg-[#F8F9FF] border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xl">

                              No Video Uploaded

                           </div>

                        )
                     }

                  </div>

                  {/* LECTURE INFO */}

                  <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

                     <h2 className="text-3xl font-extrabold text-gray-800">

                        About This Lecture

                     </h2>

                     <p className="text-gray-500 leading-relaxed mt-5 text-base sm:text-lg">

                        {
                           currentLecture?.description ||
                           "No description available."
                        }

                     </p>

                  </div>

               </div>

               {/* SIDEBAR */}

               <div className="bg-white rounded-[32px] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] h-fit sticky top-5">

                  <div className="flex items-center justify-between mb-8">

                     <div>

                        <h2 className="text-2xl font-extrabold text-gray-800">

                           Course Lectures

                        </h2>

                        <p className="text-gray-500 mt-2">
                           Continue your learning
                        </p>

                     </div>

                     <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#8B85FF] flex items-center justify-center text-2xl text-white shadow-lg">

                        🎥

                     </div>

                  </div>

                  <div className="flex flex-col gap-4">

                     {
                        course?.lectures?.map((lecture, index) => (

                           <div
                              key={lecture._id}
                              onClick={() =>
                                 navigate(
                                    `/course/${courseId}/lectures/${lecture._id}`
                                 )
                              }
                              className={`
                                 p-4 rounded-2xl cursor-pointer transition-all border
                                 ${
                                    lecture._id === lectureId
                                    ? "bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] text-white border-transparent shadow-lg"
                                    : "bg-[#F8F9FF] border-[#ECEEFF] hover:scale-[1.01]"
                                 }
                              `}
                           >

                              <div className="flex items-start gap-4">

                                 <div className={`
                                    min-w-[48px] h-[48px] rounded-2xl flex items-center justify-center font-bold shadow-lg
                                    ${
                                       lecture._id === lectureId
                                       ? "bg-white text-[#6C63FF]"
                                       : "bg-gradient-to-br from-[#6C63FF] to-[#8B85FF] text-white"
                                    }
                                 `}>

                                    {index + 1}

                                 </div>

                                 <div>

                                    <h3 className="font-bold">

                                       {lecture.title}

                                    </h3>

                                    <p className={`
                                       text-sm mt-1 leading-relaxed
                                       ${
                                          lecture._id === lectureId
                                          ? "text-white/80"
                                          : "text-gray-500"
                                       }
                                    `}>

                                       {
                                          lecture.description ||
                                          "Video Lecture"
                                       }

                                    </p>

                                 </div>

                              </div>

                           </div>

                        ))
                     }

                  </div>

               </div>

            </div>

         </div>

      </div>

   );

};

export default LecturePlayer;