import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../services/api";

const EditProject = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    image: ""
  });

  const [uploading, setUploading] = useState(false);

  // ⭐ Load Project
  useEffect(() => {
    const loadProject = async () => {
      const res = await API.get("/projects");
      const project = res.data.find(p => p._id === id);
      if (project) setForm(project);
    };
    loadProject();
  }, [id]);


  // ⭐ Upload Image (Cloudinary)
  const uploadImage = async (file) => {
    try {

      setUploading(true);

      const formData = new FormData();
      formData.append("image", file);

      const res = await API.post("/upload", formData);

      const imageUrl = res.data.url;

      console.log("Uploaded URL:", imageUrl);

      setForm(prev => ({
        ...prev,
        image: imageUrl
      }));

    } catch (err) {
      console.log("Upload error:", err);
    } finally {
      setUploading(false);
    }
  };


  // ⭐ Update Project
  const updateProject = async (e) => {
    e.preventDefault();

    if (!form.image) {
      alert("Please upload image first");
      return;
    }

    console.log("Updating project:", form);

    await API.put(`/projects/${id}`, form);

    alert("Project Updated ✅");

    navigate("/admin/projects");
  };


  return (
    <div className="container py-4">

      <h3 className="mb-4">Edit Project</h3>

      <form onSubmit={updateProject}>

        <input
          className="form-control mb-3"
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="form-control mb-3"
          placeholder="Description"
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
          {uploading ? "Uploading Image..." : "Update Project"}
        </button>

      </form>

    </div>
  );
};

export default EditProject;
