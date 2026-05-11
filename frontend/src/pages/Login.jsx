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
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold">Login</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                try {
                  setLoading(true);

                  const token = credentialResponse.credential;

                  const response = await API.post("/auth/google", { token });
                  console.log(response.data);
                  setUser(response.data.user);

                  if(response.data.user.role === "admin") {
                    navigate("/admin/dashboard");
                  } else {
                    navigate("/dashboard");
                  }
                } catch (error) {
                   console.log(error);
                } finally {
                  setLoading(false);
                }
              }}
              onError={() => console.log("Login failed")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
