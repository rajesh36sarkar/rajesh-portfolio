import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Projects = () => {

  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const loadProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    loadProjects();

  }, []);

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-5">Projects</h2>

      <div className="row">

        {projects.map(p => (

          <div className="col-md-4 mb-4" key={p._id}>

            <div
              className="glass-card project-card h-100 p-3 position-relative overflow-hidden"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/projects/${p._id}`)}
            >
              <img
                src={p.image || "https://via.placeholder.com/400x250"}
                className="card-img-top"
                alt={p.title}
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">

                <h5 className="card-title">{p.title}</h5>

                <p className="card-text text-light">
                  {p.description?.slice(0, 90)}...
                </p>

                <small className="text-warning fw-semibold">
                  {p.techStack}
                </small>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Projects;
