import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "freelancer",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const validate = () => {
    let newErrors = {};

    // Name validation (no numbers)
    if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Name should not contain numbers";
    }

    // Email validation (@gmail.com)
    if (!form.email.endsWith("@gmail.com")) {
      newErrors.email = "Email must end with @gmail.com";
    }

    // Password validation (strong)
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
        form.password
      )
    ) {
      newErrors.password =
        "Password must be 8+ chars, include uppercase, lowercase, number & special char";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log(form);

    setSuccess(true);

    setTimeout(() => {
      setForm({
        name: "",
        email: "",
        password: "",
        role: "freelancer",
      });
      setSuccess(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-700">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>

        {success && (
          <p className="text-green-600 text-center font-medium mb-4">
            ✅ Registration successful!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <input
              name="name"
              value={form.name}
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              value={form.email}
              placeholder="Email (@gmail.com)"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              value={form.password}
              placeholder="Strong Password"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Role */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-xl"
          >
            <option value="freelancer">Freelancer</option>
            <option value="client">Client</option>
          </select>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
