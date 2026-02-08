import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const AdminProjects = () => {

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    image: "",
    liveLink: "",
    githubLink: ""
  });

  // ⭐ Load Projects
  const loadProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // ⭐ Upload Image To Cloudinary
  const uploadImage = async (file) => {
    try {

      setUploading(true);

      const formData = new FormData();
      formData.append("image", file);

      const res = await API.post("/upload", formData);

      setForm(prev => ({
        ...prev,
        image: res.data.url
      }));

    } catch (err) {
      console.log(err);
    } finally {
      setUploading(false);
    }
  };

  // ⭐ Add Project
  const addProject = async (e) => {
    e.preventDefault();

    if (!form.image) {
      alert("Upload image first");
      return;
    }

    await API.post("/projects", form);

    setForm({
      title: "",
      description: "",
      techStack: "",
      image: "",
      liveLink: "",
      githubLink: ""
    });

    loadProjects();
  };

  // ⭐ Delete Project
  const deleteProject = async (id) => {
    if (!window.confirm("Delete project?")) return;
    await API.delete(`/projects/${id}`);
    loadProjects();
  };

  return (
    <div className="container py-4">

      {/* ⭐ ADD PROJECT FORM */}
      <div className="card shadow mb-5">
        <div className="card-body">

          <h4 className="mb-4">Add New Project</h4>

          <form onSubmit={addProject}>

            <input
              className="form-control mb-3"
              placeholder="Project Title"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
            />

            <input
              className="form-control mb-3"
              placeholder="Short Description"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
            />

            <input
              className="form-control mb-3"
              placeholder="Tech Stack"
              value={form.techStack}
              onChange={e => setForm({ ...form, techStack: e.target.value })}
            />

            <input
              className="form-control mb-3"
              placeholder="Live Preview Link"
              value={form.liveLink}
              onChange={e => setForm({ ...form, liveLink: e.target.value })}
            />

            <input
              className="form-control mb-3"
              placeholder="GitHub Repo Link"
              value={form.githubLink}
              onChange={e => setForm({ ...form, githubLink: e.target.value })}
            />

            {/* ⭐ Upload Image */}
            <input
              type="file"
              className="form-control mb-3"
              onChange={e => uploadImage(e.target.files[0])}
            />

            {uploading && (
              <p className="text-warning">Uploading Image...</p>
            )}

            {form.image && (
              <img
                src={form.image}
                alt="preview"
                width="150"
                className="mb-3 rounded shadow"
              />
            )}

            <button
              className="btn btn-warning"
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Add Project"}
            </button>

          </form>

        </div>
      </div>


      {/* ⭐ PROJECT TABLE */}
      <div className="card shadow">
        <div className="card-body">

          <h4 className="mb-4">All Projects</h4>

          <div className="table-responsive">

            <table className="table table-striped align-middle">

              <thead className="table-dark">
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Tech</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {projects.map(p => (
                  <tr key={p._id}>

                    <td>
                      {p.image && (
                        <img
                          src={p.image}
                          alt={p.title}
                          width="60"
                          className="rounded"
                        />
                      )}
                    </td>

                    <td>{p.title}</td>
                    <td>{p.techStack}</td>

                    <td>

                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => navigate(`/admin/edit-project/${p._id}`)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteProject(p._id)}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>
      </div>

    </div>
  );
};

export default AdminProjects;
