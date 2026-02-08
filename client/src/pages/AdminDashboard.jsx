import { Link, Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="d-flex">

      {/* Sidebar */}
      <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
        <h4>Admin Panel</h4>

        <hr />

        <Link to="/admin/projects" className="d-block text-white mb-2">
          Projects
        </Link>

        <Link to="/admin/messages" className="d-block text-white mb-2">
          Messages
        </Link>

        <button className="btn btn-warning mt-3" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow-1 p-4">
        <Outlet />
      </div>

    </div>
  );
};

export default AdminDashboard;
