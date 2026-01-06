import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  /* ================= STATES ================= */

  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Freelancer",
  });

  const [loginErrors, setLoginErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});

  /* ================= LOGIN ================= */

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setLoginErrors({ ...loginErrors, [e.target.name]: "" });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!loginData.email) errors.email = "Email is required";
    if (!loginData.password) errors.password = "Password is required";

    setLoginErrors(errors);
    if (Object.keys(errors).length !== 0) return;

    // ✅ GET ROLE FROM LOCALSTORAGE
    const role = localStorage.getItem("userRole");

    if (!role) {
      alert("Please register first");
      return;
    }

    console.log("LOGIN DATA:", loginData, "ROLE:", role);

    navigate("/dashboard", {
      state: { role },
    });

    setLoginData({ email: "", password: "" });
  };

  /* ================= REGISTER ================= */

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    setRegisterErrors({ ...registerErrors, [e.target.name]: "" });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!/^[A-Za-z\s]+$/.test(registerData.name)) {
      errors.name = "Name should not contain numbers";
    }

    if (registerData.email !== registerData.email.toLowerCase()) {
      errors.email = "Email must be in lowercase only";
    } else if (!registerData.email.endsWith("@gmail.com")) {
      errors.email = "Email must end with @gmail.com";
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
        registerData.password
      )
    ) {
      errors.password =
        "Password must be 8+ chars, include uppercase, lowercase, number & symbol";
    }

    setRegisterErrors(errors);
    if (Object.keys(errors).length !== 0) return;

    console.log("REGISTER DATA:", registerData);

    // ✅ SAVE ROLE
    localStorage.setItem(
      "userRole",
      registerData.role.toLowerCase()
    );

    setRegisterData({
      name: "",
      email: "",
      password: "",
      role: "Freelancer",
    });

    alert("Registered successfully! Now login.");
    setIsSignUp(false);
  };

  /* ================= UI ================= */

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative w-full max-w-5xl h-[550px] bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* FORMS */}
        <div className="relative z-10 flex h-full">

          {/* LOGIN */}
          <div className="w-1/2 flex flex-col justify-center items-center p-10">
            <h2 className="text-3xl font-bold text-emerald-600 mb-6">
              Sign in to Account
            </h2>

            <form onSubmit={handleLoginSubmit} className="w-full max-w-sm space-y-3">
              <div>
                <input
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg"
                />
                {loginErrors.email && (
                  <p className="text-red-500 text-sm">{loginErrors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg"
                />
                {loginErrors.password && (
                  <p className="text-red-500 text-sm">{loginErrors.password}</p>
                )}
              </div>

              <button className="w-full bg-emerald-600 text-white py-3 rounded-full">
                SIGN IN
              </button>
            </form>
          </div>

          {/* REGISTER */}
          <div className="w-1/2 flex flex-col justify-center items-center p-10">
            <h2 className="text-3xl font-bold text-emerald-600 mb-6">
              Create Account
            </h2>

            <form onSubmit={handleRegisterSubmit} className="w-full max-w-sm space-y-3">
              <input
                name="name"
                value={registerData.name}
                onChange={handleRegisterChange}
                placeholder="Name"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg"
              />

              <input
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                placeholder="Email (@gmail.com)"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg"
              />

              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                placeholder="Password"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg"
              />

              <select
                name="role"
                value={registerData.role}
                onChange={handleRegisterChange}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg"
              >
                <option>Freelancer</option>
                <option>Client</option>
              </select>

              <button className="w-full bg-emerald-600 text-white py-3 rounded-full">
                SIGN UP
              </button>
            </form>
          </div>
        </div>

        {/* SLIDING PANEL */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex flex-col justify-center items-center transition-transform duration-700 z-20
          ${isSignUp ? "translate-x-full" : "translate-x-0"}`}
        >
          {!isSignUp ? (
            <>
              <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
              <button
                onClick={() => setIsSignUp(true)}
                className="border border-white px-8 py-2 rounded-full"
              >
                SIGN UP
              </button>
            </>
          ) : (
            <>
              <h2 className="text-4xl font-bold mb-4">Hello, Friend!</h2>
              <button
                onClick={() => setIsSignUp(false)}
                className="border border-white px-8 py-2 rounded-full"
              >
                SIGN IN
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
