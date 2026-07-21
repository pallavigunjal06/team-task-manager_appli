import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px", marginLeft: "20px" }}>
          <h1>Dashboard</h1>

          <h3>Total Projects : 5</h3>

          <h3>Total Tasks : 18</h3>

          <h3>Completed : 10</h3>

          <h3>Pending : 8</h3>
        </div>
      </div>
    </>
  );
}

export default Dashboard;