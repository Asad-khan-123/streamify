import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api/axios";

function Login() {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#6C63FF] via-[#7A73D1] to-[#8B85FF] overflow-hidden relative">

    {/* Background Blur Effects */}
    <div className="absolute top-[-120px] left-[-120px] w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>

    <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>

    {/* Main Wrapper */}
    <div className="min-h-screen flex items-center justify-center px-4 py-6 lg:py-10">

      <div className="
        w-full
        max-w-6xl
        grid
        lg:grid-cols-2
        items-center
        gap-10
      ">

        {/* LEFT SECTION DESKTOP */}
        <div className="hidden lg:flex flex-col text-white px-8">

          <div className="
            inline-flex
            items-center
            gap-2
            bg-white/10
            border border-white/20
            backdrop-blur-md
            px-4 py-2
            rounded-full
            w-fit
            mb-8
          ">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>

            <p className="text-sm font-medium">
              Modern Learning Platform
            </p>
          </div>

          <h1 className="
            text-6xl
            font-extrabold
            leading-tight
          ">
            Learn <br />
            Build <br />
            Grow 🚀
          </h1>

          <p className="
            mt-6
            text-lg
            text-white/80
            leading-relaxed
            max-w-lg
          ">
            Join thousands of students learning
            programming, design, development and
            future-ready skills through immersive
            learning experience.
          </p>

          {/* Stats */}
          <div className="flex gap-5 mt-10">

            <div className="
              bg-white/10
              border border-white/10
              backdrop-blur-lg
              rounded-3xl
              px-6 py-5
            ">
              <h2 className="text-3xl font-bold">
                10K+
              </h2>

              <p className="text-white/70 mt-1">
                Active Students
              </p>
            </div>

            <div className="
              bg-white/10
              border border-white/10
              backdrop-blur-lg
              rounded-3xl
              px-6 py-5
            ">
              <h2 className="text-3xl font-bold">
                120+
              </h2>

              <p className="text-white/70 mt-1">
                Premium Courses
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="
          w-full
          flex
          items-end
          lg:items-center
          justify-center
        ">

          <div className="
            w-full
            max-w-md
            bg-white
            rounded-[36px]
            px-6
            sm:px-8
            py-8
            lg:py-10
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            relative
          ">

            {/* Mobile Drag Indicator */}
            <div className="
              lg:hidden
              w-14
              h-1.5
              bg-gray-300
              rounded-full
              mx-auto
              mb-6
            "></div>

            {/* Mobile Hero Icon */}
            <div className="text-center mb-8">

              <div className="
                w-20
                h-20
                mx-auto
                rounded-[28px]
                bg-gradient-to-br
                from-[#6C63FF]
                to-[#8B85FF]
                flex
                items-center
                justify-center
                shadow-xl
              ">
                <span className="text-3xl">
                  🚀
                </span>
              </div>

              <h1 className="
                text-3xl
                sm:text-4xl
                font-extrabold
                text-gray-800
                mt-6
                tracking-tight
              ">
                Welcome Back
              </h1>

              <p className="
                text-sm
                sm:text-base
                text-gray-500
                mt-3
                leading-relaxed
                max-w-xs
                mx-auto
              ">
                Continue your learning journey with
                immersive courses and app-like
                experience.
              </p>

            </div>

            {/* Login Button */}
            <button
              disabled={loading}
              onClick={() => {
                document
                  .querySelector(
                    "div[role='button']"
                  )
                  ?.click();
              }}
              className="
                w-full
                h-14
                rounded-2xl
                bg-gradient-to-r
                from-[#6C63FF]
                to-[#8B85FF]
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                shadow-lg
                active:scale-[0.98]
                transition-all
                duration-300
                hover:shadow-2xl
              "
            >

              {/* Google Logo */}
              <div className="
                w-8
                h-8
                rounded-full
                bg-white
                flex
                items-center
                justify-center
              ">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-5 h-5"
                >
                  <path
                    fill="#FFC107"
                    d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
                  />

                  <path
                    fill="#FF3D00"
                    d="M6.3 14.7l6.6 4.8C14.6 16 18.9 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
                  />

                  <path
                    fill="#4CAF50"
                    d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2c-2.1 1.5-4.7 2.5-7.3 2.5-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
                  />

                  <path
                    fill="#1976D2"
                    d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.2 5.4-6 7l6.2 5.2C39.9 36.5 44 30.8 44 24c0-1.3-.1-2.7-.4-3.5z"
                  />
                </svg>

              </div>

              <span>
                {loading
                  ? "Signing In..."
                  : "Continue with Google"}
              </span>

            </button>

            {/* Hidden Google Login */}
            <div className="hidden">

              <GoogleLogin
                onSuccess={async (
                  credentialResponse
                ) => {
                  try {
                    setLoading(true);

                    const token =
                      credentialResponse.credential;

                    const response =
                      await API.post(
                        "/auth/google",
                        { token }
                      );

                    setUser(response.data.user);
                    console.log('you logged in as : ', response.data.user.role);
                    if (
                      response.data.user.role ===
                      "admin"
                    ) {
                      navigate(
                        "/admin/dashboard"
                      );
                    } else {
                      navigate("/dashboard");
                    }

                  } catch (error) {
                    console.log(error);

                  } finally {
                    setLoading(false);
                  }
                }}

                onError={() =>
                  console.log("Login failed")
                }
              />

            </div>

            {/* Footer */}
            <div className="mt-8 text-center">

              <p className="
                text-xs
                text-gray-400
                leading-relaxed
              ">
                Secure authentication powered by
                Google
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
);
}

export default Login;
