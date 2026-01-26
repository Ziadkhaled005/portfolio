const projects = [
    {
        title: "Movie Explorer Application",
        description:
            "A modern React application for browsing and searching movies, featuring detailed pages, ratings, and favorites.",
        link: "https://movieee-explorer.netlify.app/",
    },
    {
        title: "Task Management Dashboard",
        description:
            "A productivity-focused task manager with priorities, statuses, and persistent state.",
        link: "https://task-dashboard-todo-app.netlify.app/",
    },
    {
        title: "E-Commerce Frontend Application",
        description:
            "A responsive e-commerce frontend with cart functionality and clean UI architecture.",
        link: "https://e-commerce-frontend--ziadzezoo005.replit.app/",
    },
    {
        title: "Authentication & Role-Based Access App",
        description:
            "Demonstrates authentication flows, protected routes, and role-based access control.",
        link: "#",
    },
    // {
    //     title: "Analytics Dashboard Application",
    //     description:
    //         "Interactive dashboard displaying analytics data with charts and statistics cards.",
    //     link: "#",
    // },
];

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <a
                            href={project.link}
                            className="project-link">
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
