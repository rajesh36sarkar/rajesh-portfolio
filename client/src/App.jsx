import Preloader from "./components/Preloader";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/AdminLogin";
import AdminProjects from "./pages/AdminProjects";
import AdminMessages from "./pages/AdminMessages";
import AdminHome from "./pages/AdminHome";

import ProjectDetails from "./pages/ProjectDetails";
import EditProject from "./pages/EditProject";

function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <Routes>

        {/* ⭐ PUBLIC SITE */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Route>

        {/* ⭐ ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ⭐ ADMIN DASHBOARD */}
        <Route path="/admin" element={<AdminLayout />}>

          {/* Dashboard Home */}
          <Route index element={<AdminHome />} />

          <Route path="projects" element={<AdminProjects />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="edit-project/:id" element={<EditProject />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
