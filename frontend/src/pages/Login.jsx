import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("role", res.data.user.role);

      alert("Login Successful");

      window.location.reload();

      console.log(res.data);

    } catch (error) {
      alert("Login Failed");
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Login Page</h1>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}