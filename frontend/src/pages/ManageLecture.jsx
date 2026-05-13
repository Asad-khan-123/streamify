import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../api/axios";
import Loading from "../components/Loading";

function CourseLectures() {
  const { courseId } = useParams();

  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchLectures = async () => {
    try {
      const response = await API.get(`/lectures/${courseId}`);
      setLectures(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateLecture = async (e) => {
    e.preventDefault();

    try {
      await API.post(`/lectures/${courseId}`, { title, description });

      setTitle("");
      setDescription("");

      fetchLectures();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteLecture = async (lectureId) => {
    const confirmDelete = confirm("Delete lecture?");

    if (!confirmDelete) return;

    try {
      await API.delete(`/lectures/${lectureId}`);
      fetchLectures();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
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

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-lg text-white mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <p className="text-sm font-medium">Lecture Management</p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Create & Manage <br /> Lectures 🎥
            </h1>

            <p className="mt-5 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
              Add learning content, organize lessons and manage your complete course lectures from one place.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-6 text-white shadow-2xl w-full sm:w-[320px]">

            <h2 className="text-5xl font-extrabold">{lectures.length}</h2>

            <p className="text-white/80 mt-2">
              Total lectures available in this course.
            </p>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-white/70">Content Status</span>

              <span className="px-4 py-1 rounded-full bg-green-500 text-sm font-semibold">
                Active
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 -mt-16 relative z-20">

        {/* CREATE LECTURE */}

        <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] mb-10">

          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
              Create Lecture
            </h2>

            <p className="text-gray-500 mt-2">
              Add a new lecture for your students.
            </p>
          </div>

          <form onSubmit={handleCreateLecture} className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Lecture Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-14 rounded-2xl border border-gray-200 bg-[#F8F9FF] px-5 outline-none focus:border-[#6C63FF]"
            />

            <textarea
              placeholder="Lecture Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="rounded-3xl border border-gray-200 bg-[#F8F9FF] p-5 outline-none resize-none focus:border-[#6C63FF]"
            />

            <button className="h-14 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
              Create Lecture
            </button>

          </form>

        </div>

        {/* LECTURES LIST */}

        <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

          <div className="flex items-center justify-between mb-8">

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                Existing Lectures
              </h2>

              <p className="text-gray-500 mt-2">
                Manage all your lectures from here.
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

                  <div className="flex flex-wrap gap-3">

                    <Link to={`/admin/course/${courseId}/lecture/${lecture._id}/manage`}>
                      <button className="h-12 px-6 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all">
                        Manage
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDeleteLecture(lecture._id)}
                      className="h-12 px-6 rounded-2xl bg-red-500 text-white font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all"
                    >
                      Delete
                    </button>

                  </div>

                </div>
              ))
            ) : (
              <div className="bg-[#F8F9FF] rounded-[28px] p-10 text-center border border-[#ECEEFF]">

                <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#6C63FF] to-[#8B85FF] flex items-center justify-center text-3xl text-white mx-auto">
                  🎥
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mt-6">
                  No Lectures Yet
                </h3>

                <p className="text-gray-500 mt-3">
                  Create your first lecture to start teaching students.
                </p>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default CourseLectures;