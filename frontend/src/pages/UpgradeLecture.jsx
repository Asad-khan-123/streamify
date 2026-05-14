import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import Loading from "../components/Loading";

function UpgradeLecture() {
  const { lectureId } = useParams();

  const [lecture, setLecture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);

  const fetchLecture = async () => {
    try {
      const response = await API.get(`/lectures/single/${lectureId}`);

      const lectureData = response.data;

      setLecture(lectureData);
      setTitle(lectureData.title);
      setDescription(lectureData.description);

    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateLecture = async (e) => {
    e.preventDefault();

    try {
      const response = await API.put(`/lectures/${lectureId}`, {
        title,
        description
      });

      setLecture(response.data.lecture);

      alert("Lecture Updated");

    } catch (error) {
      console.log(error);
    }
  };

  const handleVideoUpload = async () => {

   if (!video) {
      return alert("Select a video");
   }

   try {

      setUploading(true);

      const formData = new FormData();

      formData.append("video", video);

      const response = await API.put(
         `/lectures/video/${lectureId}`,
         formData,
         {
            headers: {
               "Content-Type": "multipart/form-data"
            }
         }
      );

      setLecture(response.data.lecture);

      alert("Video uploaded");

   } catch (error) {

      console.log(error);

   } finally {

      setUploading(false);

   }

};


  useEffect(() => {
    const loadData = async () => {
      await fetchLecture();
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

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-lg text-white mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>

              <p className="text-sm font-medium">
                Lecture Management
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Manage Lecture 🎥
            </h1>

            <p className="mt-5 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
              Update lecture details, upload premium content and manage learning experience for students.
            </p>

          </div>

          {/* RIGHT */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-6 text-white shadow-2xl w-full sm:w-[320px]">

            <h2 className="text-2xl font-bold break-words">
              {lecture.title}
            </h2>

            <p className="text-white/80 mt-3">
              {lecture.videoUrl ? "Video Uploaded Successfully" : "No Video Uploaded Yet"}
            </p>

            <div className="mt-8 flex items-center justify-between">

              <span className="text-white/70">
                Lecture Status
              </span>

              <span className={`px-4 py-1 rounded-full text-sm font-semibold ${lecture.videoUrl ? "bg-green-500" : "bg-yellow-400 text-black"}`}>
                {lecture.videoUrl ? "Ready" : "Pending"}
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 -mt-16 relative z-20">

        {/* LECTURE DETAILS */}

        <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] mb-10">

          <div className="p-6 sm:p-8">

            <div className="mb-8">

              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                Lecture Details
              </h2>

              <p className="text-gray-500 mt-2">
                Update lecture title and description.
              </p>

            </div>

            <form onSubmit={handleUpdateLecture} className="flex flex-col gap-6">

              <div className="flex flex-col gap-3">

                <label className="text-sm font-semibold text-gray-700">
                  Lecture Title
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter lecture title"
                  className="h-14 rounded-2xl border border-gray-200 bg-[#F8F9FF] px-5 outline-none focus:border-[#6C63FF]"
                />

              </div>

              <div className="flex flex-col gap-3">

                <label className="text-sm font-semibold text-gray-700">
                  Lecture Description
                </label>

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write lecture description..."
                  rows={5}
                  className="rounded-3xl border border-gray-200 bg-[#F8F9FF] p-5 outline-none resize-none focus:border-[#6C63FF]"
                />

              </div>

              <button className="h-14 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                Update Lecture
              </button>

            </form>

          </div>

        </div>

        {/* VIDEO SECTION */}

        <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

          <div className="p-6 sm:p-8">

            <div className="mb-8">

              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                Lecture Video
              </h2>

              <p className="text-gray-500 mt-2">
                Upload and manage lecture video content.
              </p>

            </div>

            {/* VIDEO PLAYER */}

            {lecture.videoUrl ? (
              <div className="mb-8 overflow-hidden rounded-[28px] border border-[#ECEEFF] bg-black">
                <video
                  src={lecture.videoUrl}
                  controls
                  className="w-full max-h-[500px]"
                />
              </div>
            ) : (
              <div className="h-[260px] rounded-[28px] bg-[#F8F9FF] border border-dashed border-[#D9DEFF] flex flex-col items-center justify-center text-center mb-8">

                <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#6C63FF] to-[#8B85FF] flex items-center justify-center text-3xl text-white mb-5">
                  🎬
                </div>

                <h3 className="text-2xl font-bold text-gray-800">
                  No Video Uploaded
                </h3>

                <p className="text-gray-500 mt-3">
                  Upload your lecture video to continue.
                </p>

              </div>
            )}

            {/* VIDEO UPLOAD */}

            <div className="bg-[#F8F9FF] rounded-[28px] border border-[#ECEEFF] p-5 flex flex-col gap-5">

              <div>

                <h3 className="text-xl font-bold text-gray-800">
                  Upload Video
                </h3>

                <p className="text-gray-500 mt-2">
                  Supported formats: MP4, MOV, WEBM
                </p>

              </div>

              <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideo(e.target.files[0])}
                className="border border-gray-200 bg-white rounded-2xl p-4 text-gray-700"
              />

              {video && (
                <div className="bg-white border border-[#ECEEFF] rounded-2xl px-5 py-4 flex items-center justify-between">

                  <div>
                    <p className="font-semibold text-gray-800">
                      {video.name}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Ready to upload
                    </p>
                  </div>

                  <div className="w-3 h-3 rounded-full bg-green-500"></div>

                </div>
              )}

              <button
   onClick={handleVideoUpload}
   disabled={uploading}
   className="h-14 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#8B85FF] text-white font-semibold shadow-lg"
>

   {
      uploading
         ? "Uploading..."
         : "Upload Video"
   }

</button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UpgradeLecture;