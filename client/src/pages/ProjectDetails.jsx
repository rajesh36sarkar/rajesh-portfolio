import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

const ProjectDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      const res = await API.get("/projects");
      const found = res.data.find(p => p._id === id);
      setProject(found);
    };

    loadProject();
  }, [id]);

  if (!project) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container py-5">

      <button
        className="btn btn-dark mb-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="row g-5 align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-lg-6">
          <img
            src={project.image}
            alt={project.title}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* RIGHT DETAILS */}
        <div className="col-lg-6">

          <h2 className="fw-bold mb-3">
            {project.title}
          </h2>

          <p className="text-muted mb-4">
            {project.description}
          </p>

          <h5 className="mb-2">Tech Stack</h5>
          <p className="text-warning fw-semibold">
            {project.techStack}
          </p>

          {/* ⭐ ACTION BUTTONS */}
          <div className="mt-4 d-flex gap-3">

            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-warning"
              >
                Live Preview
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                View Code
              </a>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectDetails;
