import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

const AdminMessages = () => {

  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();   // ✅ INSIDE COMPONENT

  // 🔒 Protect Route
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const loadMessages = async () => {
    try {
      const res = await API.get("/contact");
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    try {
      await API.delete(`/contact/${id}`);
      loadMessages();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <section className="container py-5">

      <h2 className="mb-4">
        Admin <span className="text-warning">Messages</span>
      </h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">

          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {messages.map(msg => (
              <tr key={msg._id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
                <td>
                  {new Date(msg.createdAt).toLocaleDateString()}
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteMessage(msg._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>

    </section>
  );
};

export default AdminMessages;
