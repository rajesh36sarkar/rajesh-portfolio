import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/admin/login", form);

      localStorage.setItem("token", res.data.token);

      navigate("/admin/messages");

    } catch (err) {
      console.log(err.response?.data);
      alert("Invalid Login");
    }
  };

  return (
    <div className="container py-5">

      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn btn-warning">
          Login
        </button>

      </form>

    </div>
  );
};

export default AdminLogin;
