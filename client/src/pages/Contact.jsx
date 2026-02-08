import { useState } from "react";
import API from "../services/api";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post("/contact", form);

      alert("Message Sent Successfully 🚀");

      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch (err) {
      console.error(err);
      alert("Error sending message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 bg-light min-vh-100">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Contact <span className="text-warning">Me</span>
          </h2>
          <p className="text-muted">
            Let's build something amazing together.
          </p>
        </div>

        <div className="row g-5">

          {/* Contact Info */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm p-4 h-100">

              <h4 className="mb-4">Get In Touch</h4>

              <p className="text-muted">
                Feel free to reach out for projects, collaborations,
                or job opportunities.
              </p>

              <hr />

              <p><strong>Email:</strong> rajeshkumarsarkar36@gmail.com</p>
              <p><strong>Phone:</strong> +91 7363920402</p>
              <p><strong>Location:</strong> India</p>

              <div className="mt-3">
                <a href="https://www.linkedin.com/in/rajesh36sarkar/" className="btn btn-warning btn-sm me-2">
                  LinkedIn
                </a>
                <a href="https://github.com/rajesh36sarkar" className="btn btn-dark btn-sm me-2">
                  GitHub
                </a>
                <a href="https://leetcode.com/u/rajeshsarkar01/" className="btn btn-dark btn-sm">
                  LeetCode
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <button className="btn btn-warning px-4" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
