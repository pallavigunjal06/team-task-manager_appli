import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProjectCard from "../components/ProjectCard";

function Projects() {

  const projects = [
    {
      name: "Team Task Manager",
      description: "Full Stack Project",
      status: "Active",
    },
  ];

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px" }}>
          <h1>Projects</h1>

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;