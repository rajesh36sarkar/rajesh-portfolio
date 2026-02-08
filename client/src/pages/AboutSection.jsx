const AboutSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="row align-items-center g-5">

          {/* Profile Image */}
          <div className="col-lg-5 text-center">
            <img
              src="https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!bw700"
              alt="Rajesh"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "280px" }}
            />
          </div>

          {/* About Text */}
          <div className="col-lg-7">

            <h2 className="fw-bold mb-4">
              About <span className="text-warning">Me</span>
            </h2>

            <p className="text-muted">
              I’m a <strong>Full Stack Web Developer</strong> passionate about
              building seamless, high-performance web applications that deliver
              real business value and exceptional user experiences. My journey
              into technology started from a non-technical background, driven by
              strong self-learning through online courses, hands-on projects,
              and continuous skill development.
            </p>

            <p className="text-muted">
              During my time at <strong>Zimyo Consultancy Limited</strong>, I
              worked on multiple real-world projects including a task management
              application and a strategy-based game. I collaborated with HRMS
              and ATS teams, strengthening my product development knowledge and
              improving my frontend architecture and UI problem-solving skills.
            </p>

            <p className="text-muted">
              I hold a <strong>Bachelor of Arts</strong> from The University of
              Burdwan and expanded my technical expertise through Full Stack
              Development training at Internshala, gaining hands-on experience
              with <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
            </p>

            <p className="text-muted">
              I am passionate about building scalable, user-focused applications
              and continuously learning modern technologies. I am currently open
              to new opportunities where I can contribute, grow, and build
              impactful digital products.
            </p>

            <a href="/about" className="btn btn-warning mt-3 px-4">
              Read More
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
