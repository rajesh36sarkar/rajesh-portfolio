import "../styles/skills.css";

const skills = [
  "HTML","CSS","JavaScript","React",
  "Node","MongoDB","Bootstrap",
  "Tailwind","Git","Github"
];

export default function Skills() {

  const doubleSkills = [...skills, ...skills];

  return (
    <section id="skills">

      <h2 className="section-title">Skills</h2>

      <div className="skills-slider-container">

        {/* TOP RIGHT */}
        <div className="skills-slider-track right">
          <div className="skills-list">
            {doubleSkills.map((s, i) => (
              <span key={i} className="skill-item">{s}</span>
            ))}
          </div>
        </div>

        {/* BOTTOM LEFT */}
        <div className="skills-slider-track left">
          <div className="skills-list">
            {doubleSkills.map((s, i) => (
              <span key={i} className="skill-item">{s}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
