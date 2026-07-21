function ProjectCard({ project }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{project.name}</h3>

      <p>{project.description}</p>

      <p>
        <strong>Status:</strong> {project.status}
      </p>
    </div>
  );
}

export default ProjectCard;