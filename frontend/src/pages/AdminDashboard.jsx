import { useEffect, useState } from "react";

import API from "../api/axios";

import { Link } from "react-router-dom";

function AdminDashboard() {

   const [courses, setCourses] = useState([]);

   const fetchCourses = async () => {

      try {
       
          const response = await API.get("/courses/admin");
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
  <div className="min-h-screen bg-[#F5F7FF]">

    {/* =====================================
          HERO SECTION
    ====================================== */}

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
        pb-28
      "
    >

      {/* BLUR EFFECTS */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-120px] right-[-100px] w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>

      {/* CONTENT */}
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
                px-4
                py-2
                rounded-full
                bg-white/10
                border
                border-white/10
                backdrop-blur-lg
                text-white
                mb-6
              "
            >

              <div className="w-2 h-2 rounded-full bg-green-400"></div>

              <p className="text-sm font-medium">
                Admin Dashboard
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
              Manage Your <br />
              Courses 🚀
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
              Create, manage and publish premium
              learning experiences with modern
              instructor dashboard.
            </p>

          </div>

          {/* RIGHT CARD */}
          <div
            className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              rounded-[32px]
              p-6
              text-white
              shadow-2xl
              w-full
              sm:w-[320px]
            "
          >

            <h2 className="text-5xl font-extrabold">
              {courses?.length || 0}
            </h2>

            <p className="text-white/80 mt-2">
              Total courses currently created in
              your platform.
            </p>

            <div className="mt-8 space-y-4">

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <span className="text-white/70">
                  Published Courses
                </span>

                <span className="font-bold">
                  {
                    courses?.filter(
                      (course) =>
                        course.isPublished
                    ).length
                  }
                </span>
              </div>

              <div
                className="
                  w-full
                  h-3
                  rounded-full
                  bg-white/20
                  overflow-hidden
                "
              >

                <div
                  className="
                    h-full
                    w-2/3
                    bg-white
                    rounded-full
                  "
                ></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* =====================================
          MAIN CONTENT
    ====================================== */}

    <div
      className="
        max-w-7xl
        mx-auto
        px-5
        sm:px-8
        lg:px-10
        -mt-16
        relative
        z-20
        pb-16
      "
    >

      {/* =====================================
            TOP ACTIONS
      ====================================== */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-5
          mb-10
        "
      >

        <div>

          <h2
            className="
              text-3xl
              font-extrabold
              text-gray-800
            "
          >
            Your Courses
          </h2>

          <p className="text-gray-500 mt-2">
            Manage all your created courses.
          </p>

        </div>

        <Link
          to="/admin/create-course"
          className="
            h-14
            px-7
            rounded-2xl
            bg-gradient-to-r
            from-[#6C63FF]
            to-[#8B85FF]
            text-white
            font-semibold
            shadow-lg
            flex
            items-center
            justify-center
            hover:scale-[1.02]
            active:scale-[0.98]
            transition-all
          "
        >
          + Create Course
        </Link>

      </div>

      {/* =====================================
            STATS CARDS
      ====================================== */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
          mb-10
        "
      >

        {/* CARD 1 */}
        <div
          className="
            bg-white
            rounded-[28px]
            p-6
            shadow-lg
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#F3F4FF]
              flex
              items-center
              justify-center
              text-2xl
            "
          >
            📚
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              text-gray-800
              mt-5
            "
          >
            {courses?.length || 0}
          </h2>

          <p className="text-gray-500 mt-1">
            Total Courses
          </p>

        </div>

        {/* CARD 2 */}
        <div
          className="
            bg-white
            rounded-[28px]
            p-6
            shadow-lg
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#F3F4FF]
              flex
              items-center
              justify-center
              text-2xl
            "
          >
            🌍
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              text-gray-800
              mt-5
            "
          >
            {
              courses?.filter(
                (course) =>
                  course.isPublished
              ).length
            }
          </h2>

          <p className="text-gray-500 mt-1">
            Published
          </p>

        </div>

        {/* CARD 3 */}
        <div
          className="
            bg-white
            rounded-[28px]
            p-6
            shadow-lg
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#F3F4FF]
              flex
              items-center
              justify-center
              text-2xl
            "
          >
            🎥
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              text-gray-800
              mt-5
            "
          >
            0
          </h2>

          <p className="text-gray-500 mt-1">
            Total Lectures
          </p>

        </div>

        {/* CARD 4 */}
        <div
          className="
            bg-white
            rounded-[28px]
            p-6
            shadow-lg
          "
        >

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#F3F4FF]
              flex
              items-center
              justify-center
              text-2xl
            "
          >
            👨‍🎓
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              text-gray-800
              mt-5
            "
          >
            0
          </h2>

          <p className="text-gray-500 mt-1">
            Students
          </p>

        </div>

      </div>

      {/* =====================================
            COURSES GRID
      ====================================== */}

      {Array.isArray(courses) &&
      courses.length > 0 ? (

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >

          {courses.map((course) => (

            <div
              key={course._id}
              className="
                group
                bg-white
                rounded-[32px]
                overflow-hidden
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >

              {/* THUMBNAIL */}
              <div className="relative overflow-hidden">

                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="
                    w-full
                    h-56
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/50
                    via-transparent
                    to-transparent
                  "
                ></div>

                {/* STATUS */}
                <div
                  className={`
                    absolute
                    top-4
                    right-4
                    px-4
                    py-2
                    rounded-2xl
                    text-sm
                    font-bold
                    shadow-lg

                    ${
                      course.isPublished
                        ? "bg-green-500 text-white"
                        : "bg-yellow-400 text-black"
                    }
                  `}
                >
                  {course.isPublished
                    ? "Published"
                    : "Draft"}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h2
                  className="
                    text-2xl
                    font-extrabold
                    text-gray-800
                    line-clamp-1
                  "
                >
                  {course.title}
                </h2>

                <p
                  className="
                    text-gray-500
                    mt-3
                    leading-relaxed
                    line-clamp-2
                  "
                >
                  {course.description}
                </p>

                {/* PRICE */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mt-6
                  "
                >

                  <div>

                    <p className="text-gray-400 text-sm">
                      Course Price
                    </p>

                    <h3
                      className="
                        text-3xl
                        font-extrabold
                        text-gray-800
                        mt-1
                      "
                    >
                      ₹ {course.price}
                    </h3>

                  </div>

                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-[#F5F7FF]
                      flex
                      items-center
                      justify-center
                      text-2xl
                    "
                  >
                    🎓
                  </div>

                </div>

                {/* FOOTER */}
                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-[#F3F4FF]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      🎥
                    </div>

                    <div>

                      <p
                        className="
                          text-xs
                          text-gray-400
                        "
                      >
                        Lectures
                      </p>

                      <p
                        className="
                          text-sm
                          font-semibold
                          text-gray-700
                        "
                      >
                        {course.lectures?.length || 0}
                      </p>

                    </div>

                  </div>

                  <Link
                    to={`/admin/course/${course._id}/manage`}
                    className="
                      h-12
                      px-5
                      rounded-2xl
                      bg-gradient-to-r
                      from-[#6C63FF]
                      to-[#8B85FF]
                      text-white
                      font-semibold
                      shadow-lg
                      flex
                      items-center
                      justify-center
                      hover:scale-105
                      active:scale-95
                      transition-all
                    "
                  >
                    Manage
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      ) : (

        /* EMPTY STATE */

        <div
          className="
            bg-white
            rounded-[32px]
            p-10
            text-center
            shadow-xl
            max-w-2xl
            mx-auto
          "
        >

          <div
            className="
              w-24
              h-24
              rounded-[28px]
              bg-gradient-to-br
              from-[#6C63FF]
              to-[#8B85FF]
              flex
              items-center
              justify-center
              text-4xl
              text-white
              mx-auto
              shadow-xl
            "
          >
            📚
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              text-gray-800
              mt-8
            "
          >
            No Courses Yet
          </h2>

          <p
            className="
              text-gray-500
              mt-4
              leading-relaxed
            "
          >
            Start building your premium learning
            platform by creating your first
            course.
          </p>

          <Link
            to="/admin/create-course"
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              h-14
              px-8
              rounded-2xl
              bg-gradient-to-r
              from-[#6C63FF]
              to-[#8B85FF]
              text-white
              font-semibold
              shadow-lg
            "
          >
            Create Your First Course
          </Link>

        </div>

      )}

    </div>

  </div>
)

}

export default AdminDashboard;