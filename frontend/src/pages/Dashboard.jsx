import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();

  /* =====================================
      DUMMY ENROLLED COURSES
  ====================================== */

  const enrolledCourses = [
    {
      id: 1,
      title: "Complete MERN Stack Bootcamp",
      description:
        "Learn MongoDB, Express, React and Node.js from beginner to advanced level.",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      progress: 68,
      lessons: 120,
      duration: "42 Hours",
    },

    {
      id: 2,
      title: "Modern UI UX Design Masterclass",
      description:
        "Build beautiful mobile-first user interfaces and app experiences.",
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      progress: 32,
      lessons: 84,
      duration: "28 Hours",
    },
  ];

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

        {/* Blur Effects */}
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>

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
                  Student Dashboard
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
                Welcome Back, <br />
                {user?.name?.split(" ")[0]} 👋
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
                Continue your learning journey and
                track your enrolled courses with
                immersive app-like experience.
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
                {enrolledCourses.length}
              </h2>

              <p className="text-white/80 mt-2">
                Courses currently enrolled and in
                progress.
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
                    Learning Progress
                  </span>

                  <span className="font-bold">
                    50%
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
                      w-1/2
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
              2
            </h2>

            <p className="text-gray-500 mt-1">
              Enrolled Courses
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
              204
            </h2>

            <p className="text-gray-500 mt-1">
              Video Lessons
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
              ⏳
            </div>

            <h2
              className="
                text-3xl
                font-extrabold
                text-gray-800
                mt-5
              "
            >
              70h
            </h2>

            <p className="text-gray-500 mt-1">
              Learning Hours
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
              🔥
            </div>

            <h2
              className="
                text-3xl
                font-extrabold
                text-gray-800
                mt-5
              "
            >
              12
            </h2>

            <p className="text-gray-500 mt-1">
              Day Streak
            </p>

          </div>

        </div>

        {/* =====================================
              ENROLLED COURSES
        ====================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            mb-6
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
              Continue Learning
            </h2>

            <p className="text-gray-500 mt-2">
              Resume your enrolled courses.
            </p>

          </div>

          <Link
            to="/courses"
            className="
              hidden
              sm:flex
              items-center
              justify-center
              h-12
              px-6
              rounded-2xl
              bg-gradient-to-r
              from-[#6C63FF]
              to-[#8B85FF]
              text-white
              font-semibold
              shadow-lg
            "
          >
            Browse Courses
          </Link>

        </div>

        {/* COURSES GRID */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6
          "
        >

          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="
                bg-white
                rounded-[32px]
                overflow-hidden
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                transition-all
                duration-500
              "
            >

              {/* IMAGE */}
              <div className="relative">

                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="
                    w-full
                    h-60
                    object-cover
                  "
                />

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

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
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
                  {course.progress}% Completed
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3
                  className="
                    text-2xl
                    font-extrabold
                    text-gray-800
                  "
                >
                  {course.title}
                </h3>

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

                {/* STATS */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                    mt-6
                  "
                >

                  <div
                    className="
                      px-4
                      py-2
                      rounded-2xl
                      bg-[#F5F7FF]
                      text-sm
                      font-medium
                      text-gray-700
                    "
                  >
                    🎥 {course.lessons} Lessons
                  </div>

                  <div
                    className="
                      px-4
                      py-2
                      rounded-2xl
                      bg-[#F5F7FF]
                      text-sm
                      font-medium
                      text-gray-700
                    "
                  >
                    ⏳ {course.duration}
                  </div>

                </div>

                {/* PROGRESS */}
                <div className="mt-6">

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      mb-2
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-medium
                        text-gray-600
                      "
                    >
                      Course Progress
                    </span>

                    <span
                      className="
                        text-sm
                        font-bold
                        text-[#6C63FF]
                      "
                    >
                      {course.progress}%
                    </span>
                  </div>

                  <div
                    className="
                      w-full
                      h-3
                      bg-gray-200
                      rounded-full
                      overflow-hidden
                    "
                  >

                    <div
                      style={{
                        width: `${course.progress}%`,
                      }}
                      className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-[#6C63FF]
                        to-[#8B85FF]
                      "
                    ></div>

                  </div>

                </div>

                {/* BUTTON */}
                <button
                  className="
                    mt-8
                    w-full
                    h-14
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#6C63FF]
                    to-[#8B85FF]
                    text-white
                    font-semibold
                    shadow-lg
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    transition-all
                  "
                >
                  Continue Learning
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Dashboard;