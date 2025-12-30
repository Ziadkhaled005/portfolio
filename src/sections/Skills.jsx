const skills = [
    "Python",
    "C++",
    "JavaScript",
    "HTML",
    "CSS",
    "Flutter",
    "Dart",
    "SQL",
    "MySQL",
    "JSON",
    "Git & GitHub",
    "Basics of AI",
];

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>

            <div style={skillsStyle}>
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        style={skillBadge}>
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

const skillsStyle = {
    marginTop: "25px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
};

const skillBadge = {
    padding: "8px 14px",
    background: "#020617",
    borderRadius: "6px",
    fontSize: "14px",
};

export default Skills;
