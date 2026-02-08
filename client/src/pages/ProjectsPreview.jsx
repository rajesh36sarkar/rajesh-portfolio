import { Link } from "react-router-dom";

const ProjectsPreview = () => {
  return (
    <section className="py-5">
      <div className="container text-center">

        <h2 className="mb-4">Featured Projects</h2>

        <p className="text-muted">
          Check out some of my recent development work.
        </p>

        <Link to="/projects" className="btn btn-warning mt-3">
          View All Projects
        </Link>

      </div>
    </section>
  );
};

export default ProjectsPreview;
