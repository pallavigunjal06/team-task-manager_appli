import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";

function Tasks() {

  const tasks = [
    {
      title: "Create Login",
      description: "Build Login Page",
      status: "Pending",
      assignedTo: "Admin",
    },
  ];

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px" }}>
          <h1>Tasks</h1>

          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Tasks;