import { useEffect, useState } from "react";
import API from "../services/api";

const AdminHome = () => {

  const [stats, setStats] = useState({
    projects: 0,
    messages: 0
  });

  useEffect(() => {
    const loadStats = async () => {
      const res = await API.get("/admin/stats");
      setStats(res.data);
    };

    loadStats();
  }, []);

  return (
    <div>
      <h2 className="mb-4">Dashboard Overview</h2>

      <div className="row">

        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h5>Total Projects</h5>
            <h2 className="text-warning">{stats.projects}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-4 text-center">
            <h5>Total Messages</h5>
            <h2 className="text-success">{stats.messages}</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminHome;
