import { useState } from "react";

import API from "../api/axios";

import { useNavigate } from "react-router-dom";

function CreateCourse() {

   const navigate = useNavigate();

   const [title, setTitle] = useState("");

   const [description, setDescription] = useState("");

   const [price, setPrice] = useState("");

   const [thumbnail, setThumbnail] =
      useState(null);

   const [isPublished, setIsPublished] =
      useState(false);

   const handleSubmit = async (e) => {

      e.preventDefault();

      try {

         const formData = new FormData();

         formData.append("title", title);

         formData.append(
            "description",
            description
         );

         formData.append("price", price);

         formData.append(
            "isPublished",
            isPublished
         );

         formData.append(
            "thumbnail",
            thumbnail
         );

         await API.post(

            "/courses/create",

            formData,

            {
               headers: {
                  "Content-Type":
                     "multipart/form-data"
               }
            }

         );

         navigate("/admin/dashboard");

      } catch (error) {

         console.log(error);

      }

   };

   return (
  <div className="min-h-screen bg-[#F5F7FF]">

    {/* HERO SECTION */}
    <div
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#6C63FF]
        via-[#7A73D1]
        to-[#8B85FF]
        rounded-b-[40px]
        px-5
        sm:px-8
        lg:px-10
        pt-10
        pb-24
      "
    >

      {/* Blur Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-80px] w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-10
          "
        >

          {/* LEFT */}
          <div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-white/10
                border
                border-white/10
                backdrop-blur-lg
                px-4
                py-2
                rounded-full
                text-white
                mb-6
              "
            >

              <div className="w-2 h-2 rounded-full bg-green-400"></div>

              <p className="text-sm font-medium">
                Instructor Dashboard
              </p>

            </div>

            <h1
              className="
                text-3xl
                sm:text-4xl
                lg:text-6xl
                font-extrabold
                text-white
                leading-tight
                tracking-tight
              "
            >
              Create Amazing <br />
              Courses 🎓
            </h1>

            <p
              className="
                mt-5
                text-sm
                sm:text-base
                lg:text-lg
                text-white/80
                leading-relaxed
                max-w-2xl
              "
            >
              Upload engaging premium courses
              with modern learning experience,
              videos and interactive content.
            </p>

          </div>

          {/* RIGHT CARD */}
          <div
            className="
              bg-white/10
              border
              border-white/10
              backdrop-blur-xl
              rounded-[32px]
              p-6
              text-white
              shadow-2xl
              w-full
              sm:w-[320px]
            "
          >

            <h2 className="text-4xl font-extrabold">
              🚀
            </h2>

            <p className="text-white/80 mt-3 leading-relaxed">
              Publish professional courses and
              manage your learning content with
              app-like instructor experience.
            </p>

            <div className="
              mt-6
              flex
              items-center
              gap-3
            ">

              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white
                  text-[#6C63FF]
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-lg
                "
              >
                🎥
              </div>

              <div>
                <h3 className="font-semibold">
                  Video Courses
                </h3>

                <p className="text-sm text-white/70">
                  Modern streaming platform
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* FORM SECTION */}
    <div
      className="
        max-w-7xl
        mx-auto
        px-5
        sm:px-8
        lg:px-10
        -mt-14
        pb-16
        relative
        z-20
      "
    >

      <div
        className="
          bg-white
          rounded-[36px]
          shadow-[0_10px_50px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
      >

        <div
          className="
            grid
            lg:grid-cols-[1fr_420px]
          "
        >

          {/* LEFT SIDE */}
          <div className="p-6 sm:p-8 lg:p-10">

            <div className="mb-10">

              <h2
                className="
                  text-3xl
                  font-extrabold
                  text-gray-800
                  tracking-tight
                "
              >
                Course Details
              </h2>

              <p
                className="
                  text-gray-500
                  mt-3
                  leading-relaxed
                "
              >
                Fill in the course information
                carefully to create engaging
                learning experience for students.
              </p>

            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* TITLE */}
              <div>

                <label
                  className="
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                    mb-3
                  "
                >
                  Course Title
                </label>

                <input
                  type="text"
                  placeholder="Enter course title"
                  value={title}
                  onChange={(e) =>
                    setTitle(e.target.value)
                  }
                  className="
                    w-full
                    h-14
                    rounded-2xl
                    bg-[#F5F7FF]
                    border
                    border-transparent
                    px-5
                    text-gray-800
                    outline-none
                    focus:border-[#6C63FF]
                    focus:bg-white
                    transition-all
                  "
                />

              </div>

              {/* DESCRIPTION */}
              <div>

                <label
                  className="
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                    mb-3
                  "
                >
                  Description
                </label>

                <textarea
                  placeholder="Write course description..."
                  value={description}
                  onChange={(e) =>
                    setDescription(
                      e.target.value
                    )
                  }
                  rows={6}
                  className="
                    w-full
                    rounded-2xl
                    bg-[#F5F7FF]
                    border
                    border-transparent
                    p-5
                    text-gray-800
                    outline-none
                    resize-none
                    focus:border-[#6C63FF]
                    focus:bg-white
                    transition-all
                  "
                />

              </div>

              {/* PRICE */}
              <div>

                <label
                  className="
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                    mb-3
                  "
                >
                  Course Price
                </label>

                <div className="relative">

                  <span
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-gray-500
                      font-semibold
                    "
                  >
                    ₹
                  </span>

                  <input
                    type="number"
                    placeholder="999"
                    value={price}
                    onChange={(e) =>
                      setPrice(e.target.value)
                    }
                    className="
                      w-full
                      h-14
                      rounded-2xl
                      bg-[#F5F7FF]
                      border
                      border-transparent
                      pl-10
                      pr-5
                      text-gray-800
                      outline-none
                      focus:border-[#6C63FF]
                      focus:bg-white
                      transition-all
                    "
                  />

                </div>

              </div>

              {/* THUMBNAIL */}
              <div>

                <label
                  className="
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                    mb-3
                  "
                >
                  Course Thumbnail
                </label>

                <label
                  className="
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    border-2
                    border-dashed
                    border-[#D9DCFF]
                    rounded-[28px]
                    bg-[#F8F9FF]
                    p-8
                    cursor-pointer
                    hover:border-[#6C63FF]
                    transition-all
                  "
                >

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#6C63FF]
                      to-[#8B85FF]
                      flex
                      items-center
                      justify-center
                      text-white
                      text-2xl
                      shadow-lg
                    "
                  >
                    🖼️
                  </div>

                  <div className="text-center">

                    <h3
                      className="
                        font-bold
                        text-gray-800
                      "
                    >
                      Upload Thumbnail
                    </h3>

                    <p
                      className="
                        text-sm
                        text-gray-500
                        mt-1
                      "
                    >
                      PNG, JPG or WEBP
                    </p>

                  </div>

                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      setThumbnail(
                        e.target.files[0]
                      )
                    }
                  />

                </label>

              </div>

              {/* PUBLISH */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  bg-[#F5F7FF]
                  rounded-2xl
                  p-5
                "
              >

                <div>

                  <h3
                    className="
                      font-bold
                      text-gray-800
                    "
                  >
                    Publish Course
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      mt-1
                    "
                  >
                    Make this course visible to
                    students
                  </p>

                </div>

                <label className="relative inline-flex cursor-pointer">

                  <input
                    type="checkbox"
                    checked={isPublished}
                    onChange={(e) =>
                      setIsPublished(
                        e.target.checked
                      )
                    }
                    className="sr-only peer"
                  />

                  <div
                    className="
                      w-14
                      h-8
                      bg-gray-300
                      rounded-full
                      peer
                      peer-checked:bg-[#6C63FF]
                      transition-all
                      relative

                      after:content-['']
                      after:absolute
                      after:top-1
                      after:left-1
                      after:w-6
                      after:h-6
                      after:bg-white
                      after:rounded-full
                      after:transition-all

                      peer-checked:after:translate-x-6
                    "
                  ></div>

                </label>

              </div>

              {/* BUTTON */}
              <button
                className="
                  w-full
                  sm:w-auto
                  px-10
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#6C63FF]
                  to-[#8B85FF]
                  text-white
                  font-semibold
                  shadow-xl
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all
                "
              >
                Create Course
              </button>

            </form>

          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              hidden
              lg:flex
              bg-[#F8F9FF]
              border-l
              flex-col
              justify-between
              p-8
            "
          >

            <div>

              <h2
                className="
                  text-2xl
                  font-extrabold
                  text-gray-800
                "
              >
                Tips For Better Courses ✨
              </h2>

              <div className="
                mt-8
                space-y-5
              ">

                <div
                  className="
                    bg-white
                    rounded-2xl
                    p-5
                    shadow-sm
                  "
                >

                  <h3 className="font-bold text-gray-800">
                    Use Engaging Titles
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      mt-2
                      leading-relaxed
                    "
                  >
                    Clear and attractive titles
                    improve course visibility.
                  </p>

                </div>

                <div
                  className="
                    bg-white
                    rounded-2xl
                    p-5
                    shadow-sm
                  "
                >

                  <h3 className="font-bold text-gray-800">
                    Add Quality Thumbnail
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      mt-2
                      leading-relaxed
                    "
                  >
                    Eye-catching thumbnails
                    increase click-through rates.
                  </p>

                </div>

                <div
                  className="
                    bg-white
                    rounded-2xl
                    p-5
                    shadow-sm
                  "
                >

                  <h3 className="font-bold text-gray-800">
                    Publish When Ready
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      mt-2
                      leading-relaxed
                    "
                  >
                    Students can only see
                    published courses.
                  </p>

                </div>

              </div>

            </div>

            {/* Bottom Card */}
            <div
              className="
                mt-10
                rounded-[28px]
                bg-gradient-to-br
                from-[#6C63FF]
                to-[#8B85FF]
                p-6
                text-white
                shadow-xl
              "
            >

              <h3 className="text-2xl font-extrabold">
                Instructor Mode 🎓
              </h3>

              <p
                className="
                  mt-3
                  text-white/80
                  leading-relaxed
                "
              >
                Create immersive premium learning
                experiences for students around
                the world.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
);
}

export default CreateCourse;