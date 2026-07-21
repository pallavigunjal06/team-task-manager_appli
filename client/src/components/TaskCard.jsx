function TaskCard({ task }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
      }}
    >
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        <strong>Status:</strong> {task.status}
      </p>

      <p>
        <strong>Assigned To:</strong> {task.assignedTo}
      </p>
    </div>
  );
}

export default TaskCard;