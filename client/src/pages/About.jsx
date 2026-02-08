const About = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="row align-items-center g-5">

          {/* Image */}
          <div className="col-lg-5 text-center">
            <img
              src="https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!bw700"
              alt="Rajesh Sarkar"
              className="img-fluid rounded-circle shadow-lg"
              style={{ maxWidth: "260px" }}
            />
          </div>

          {/* Content */}
          <div className="col-lg-7">

            <h2 className="fw-bold mb-4">
              About <span className="text-warning">Me</span>
            </h2>

            <p className="text-muted">
              I’m a <strong>Full Stack Developer</strong> focused on building
              scalable, high-performance web applications and seamless user
              experiences.
            </p>

            <p className="text-muted">
              Coming from a non-technical background, I transitioned into tech
              through self-learning, real-world projects, and continuous skill
              development.
            </p>

            <p className="text-muted">
              At <strong>Zimyo Consultancy Limited</strong>, I worked on multiple
              production-level projects including task management and strategy
              applications while collaborating with HRMS and ATS teams.
            </p>

            <p className="text-muted">
              Skilled in the <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong>,
              and passionate about building modern, user-focused digital
              products. Currently open to new opportunities.
            </p>

            <a href="/contact" className="btn btn-warning px-4 mt-3">
              Hire Me
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;