import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Loading from '../components/Loading';

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
    return <Loading />;
  }

  
  return (
  <div className="min-h-screen bg-[#F5F7FF]">

    {/* TOP HERO SECTION */}
    <div
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#6C63FF]
        via-[#7A73D1]
        to-[#8B85FF]
        px-5
        sm:px-8
        lg:px-10
        pt-10
        pb-24
        rounded-b-[40px]
      "
    >

      {/* Blur Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-100px] right-[-80px] w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-8
        ">

          {/* LEFT */}
          <div>

            <div className="
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
              mb-5
            ">

              <div className="w-2 h-2 rounded-full bg-green-400"></div>

              <p className="text-sm font-medium">
                Explore Premium Courses
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
              Upgrade Your <br />
              Skills Today 🚀
            </h1>

            <p
              className="
                mt-5
                text-sm
                sm:text-base
                lg:text-lg
                text-white/80
                max-w-2xl
                leading-relaxed
              "
            >
              Learn development, programming,
              design and future-ready skills with
              immersive video courses and modern
              learning experience.
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

            <h2 className="text-4xl font-extrabold">
              {courses?.length || 0}+
            </h2>

            <p className="text-white/70 mt-2">
              Premium courses available for
              students worldwide.
            </p>

            <div className="
              mt-6
              flex
              items-center
              gap-3
            ">

              <div className="
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
              ">
                ⚡
              </div>

              <div>
                <h3 className="font-semibold">
                  App Like Experience
                </h3>

                <p className="text-sm text-white/70">
                  Learn anywhere anytime
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>

    {/* COURSES SECTION */}
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

      {Array.isArray(courses) &&
      courses.length > 0 ? (

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
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
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >

              {/* THUMBNAIL */}
              <div className="
                relative
                overflow-hidden
              ">

                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="
                    w-full
                    h-52
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                />

                {/* Overlay */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/50
                  via-transparent
                  to-transparent
                "></div>

                {/* Price Badge */}
                <div
                  className="
                    absolute
                    top-4
                    right-4
                    bg-white
                    text-[#6C63FF]
                    px-4
                    py-2
                    rounded-2xl
                    text-sm
                    font-bold
                    shadow-lg
                  "
                >
                  ₹ {course.price}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h2
                  className="
                    text-xl
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
                    text-sm
                    line-clamp-3
                  "
                >
                  {course.description}
                </p>

                {/* BOTTOM */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >

                  <div className="
                    flex
                    items-center
                    gap-2
                  ">

                    <div className="
                      w-10
                      h-10
                      rounded-xl
                      bg-[#F3F4FF]
                      flex
                      items-center
                      justify-center
                    ">
                      🎥
                    </div>

                    <div>
                      <p className="
                        text-xs
                        text-gray-400
                      ">
                        Video Course
                      </p>

                      <p className="
                        text-sm
                        font-semibold
                        text-gray-700
                      ">
                        Premium Access
                      </p>
                    </div>

                  </div>

                  <Link
                    to={`/course/${course._id}`}
                    className="
                      px-5
                      h-11
                      rounded-2xl
                      bg-gradient-to-r
                      from-[#6C63FF]
                      to-[#8B85FF]
                      text-white
                      font-semibold
                      flex
                      items-center
                      justify-center
                      shadow-lg
                      hover:scale-105
                      active:scale-95
                      transition-all
                      shrink-0
                    "
                  >
                    View
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
            max-w-xl
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
            No Courses Available
          </h2>

          <p
            className="
              text-gray-500
              mt-4
              leading-relaxed
            "
          >
            Courses will appear here once
            instructors publish them.
          </p>

        </div>

      )}

    </div>
  </div>
);
}

export default Courses;
