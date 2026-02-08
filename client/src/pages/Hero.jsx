const Hero = () => {
  return (
    <section className="bg-dark text-white text-center py-5">
      <div className="container">

        <img
          src="https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!bw700"
          width="120"
          className="rounded-circle mb-4 border border-warning"
        />

        <h1 className="display-5 fw-bold">
          Hi, I'm <span className="text-warning">Rajesh Sarkar</span>
        </h1>

        <p className="lead">
          MERN Stack Developer | React | Node | MongoDB
        </p>

        <a href="/projects" className="btn btn-warning mt-3">
          View My Work
        </a>

      </div>
    </section>
  );
};

export default Hero;
