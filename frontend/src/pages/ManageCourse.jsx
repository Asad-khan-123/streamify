import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import API from "../api/axios";

function ManageCourse() {

  const { courseId } = useParams();

  const [course, setCourse] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  // FETCH COURSE
  const fetchCourse = async () => {
    try {
      const response = await API.get(`/courses/${courseId}`);
      const courseData = response.data;

      setCourse(courseData);
      setTitle(courseData.title);
      setDescription(courseData.description);
      setPrice(courseData.price);
      setIsPublished(courseData.isPublished);

    } catch (error) {
      console.log(error);
    }
  };

  // FETCH LECTURES
  const fetchLectures = async () => {
    try {
      const response = await API.get(`/lectures/${courseId}`);
      setLectures(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE COURSE
  const handleUpdateCourse = async (e) => {

    e.preventDefault();

    try {

      const response = await API.put(`/courses/update/${courseId}`, {
        title,
        description,
        price,
        isPublished
      });

      setCourse(response.data);
      alert("Course Updated");

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    const loadData = async () => {
      await fetchCourse();
      await fetchLectures();
      setLoading(false);
    };

    loadData();

  }, []);

  if (loading) return <Loading />;

  return (

    <div className="min-h-screen bg-[#F5F7FF] pb-20">

      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#6C63FF] via-[#7A73D1] to-[#8B85FF] rounded-b-[40px] px-5 sm:px-8 lg:px-10 pt-10 pb-28">

        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-lg text-white mb-6">

                <div className="w-2 h-2 rounded-full bg-green-400"></div>

                <p className="text-sm font-medium">
                  Course Management
                </p>

              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                Manage Your <br />
                Course 🎓
              </h1>

              <p className="mt-5 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                Update course details and manage your premium learning experience.
              </p>

            </div>

            {/* RIGHT */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-6 text-white shadow-2xl w-full sm:w-[320px]">

              <h2 className="text-5xl font-extrabold">
                {lectures.length}
              </h2>

              <p className="text-white/80 mt-2">
                Total lectures inside this course.
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-white/70">
                  Course Status
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    isPublished ? "bg-green-500" : "bg-yellow-400 text-black"
                  }`}
                >
                  {isPublished ? "Published" : "Draft"}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 -mt-16 relative z-20">

        {/* COURSE DETAILS */}
        <div className="bg-white rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden mb-10">

          {/* THUMBNAIL */}
          {course.thumbnail && (

            <div className="relative">

              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-[240px] sm:h-[320px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6">

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {course.title}
                </h2>

                <p className="text-white/80 mt-2">
                  ₹ {course.price}
                </p>

              </div>

            </div>

          )}

          {/* FORM */}
          <form onSubmit={handleUpdateCourse} className="p-6 sm:p-8">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                  Course Details
                </h2>

                <p className="text-gray-500 mt-2">
                  Update your course information.
                </p>

              </div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              {/* TITLE */}
              <div className="flex flex-col gap-3">

                <label className="text-sm font-semibold text-gray-700">
                  Course Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter course title"
                  className="h-14 rounded-2xl border border-gray-200 bg-[#F8F9FF] px-5 outline-none focus:border-[#6C63FF] transition-all"
                />

              </div>

              {/* PRICE */}
              <div className="flex flex-col gap-3">

                <label className="text-sm font-semibold text-gray-700">
                  Course Price
                </label>

                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter course price"
                  className="h-14 rounded-2xl border border-gray-200 bg-[#F8F9FF] px-5 outline-none focus:border-[#6C63FF]"
                />

              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="mt-6 flex flex-col gap-3">

              <label className="text-sm font-semibold text-gray-700">
                Course Description
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write course description..."
                rows={5}
                className="rounded-3xl border border-gray-200 bg-[#F8F9FF] p-5 outline-none resize-none focus:border-[#6C63FF]"
              />

            </div>

            {/* PUBLISH */}
            <div className="mt-6 flex items-center justify-between gap-5 flex-wrap">

              <label className="flex items-center gap-3 text-gray-700 font-medium">

                <input
                  type="checkbox"
                  checked={isPublished}
                  onChange={(e) => setIsPublished(e.target.checked)}
                  className="w-5 h-5 accent-[#6C63FF]"
                />

                Publish Course

              </label>

              <button className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                Update Course
              </button>

            </div>

          </form>

        </div>

        {/* ADD / MANAGE LECTURES */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] mb-10">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                Course Lectures 🎥
              </h2>

              <p className="text-gray-500 mt-2 leading-relaxed max-w-2xl">
                Create and manage all lectures from one dedicated page.
              </p>

            </div>

            <Link to={`/admin/course/${courseId}/lectures`}>

              <button className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                Add / Manage Lectures
              </button>

            </Link>

          </div>

        </div>

        {/* LECTURES LIST */}
        <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                Existing Lectures
              </h2>

              <p className="text-gray-500 mt-2">
                Manage all lectures from here.
              </p>

            </div>

          </div>

          <div className="flex flex-col gap-5">

            {lectures.length > 0 ? (

              lectures.map((lecture, index) => (

                <div
                  key={lecture._id}
                  className="bg-[#F8F9FF] rounded-[28px] p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5 border border-[#ECEEFF]"
                >

                  <div className="flex items-start gap-4">

                    <div className="min-w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#8B85FF] flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {index + 1}
                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-gray-800">
                        {lecture.title}
                      </h3>

                      <p className="text-gray-500 mt-2 leading-relaxed">
                        {lecture.description}
                      </p>

                    </div>

                  </div>

                  <Link to={`/admin/course/${courseId}/lecture/${lecture._id}/manage`}>

                    <button className="h-12 px-6 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all">
                      Manage
                    </button>

                  </Link>

                </div>

              ))

            ) : (

              <div className="bg-[#F8F9FF] rounded-[28px] p-10 text-center">

                <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#6C63FF] to-[#8B85FF] flex items-center justify-center text-3xl text-white mx-auto">
                  🎥
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mt-6">
                  No Lectures Yet
                </h3>

                <p className="text-gray-500 mt-3">
                  Start building your course by adding your first lecture.
                </p>

                <Link to={`/admin/course/${courseId}/lectures`}>

                  <button className="mt-6 h-12 px-6 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all">
                    Add Lecture
                  </button>

                </Link>

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManageCourse;