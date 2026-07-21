import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#1f2937",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>Menu</h2>

      <hr />

      <p>
        <Link
          to="/dashboard"
          style={{ color: "white", textDecoration: "none" }}
        >
          Dashboard
        </Link>
      </p>

      <p>
        <Link
          to="/projects"
          style={{ color: "white", textDecoration: "none" }}
        >
          Projects
        </Link>
      </p>

      <p>
        <Link
          to="/tasks"
          style={{ color: "white", textDecoration: "none" }}
        >
          Tasks
        </Link>
      </p>

      <p>
        <Link
          to="/team"
          style={{ color: "white", textDecoration: "none" }}
        >
          Team
        </Link>
      </p>

      <p>
        <Link
          to="/profile"
          style={{ color: "white", textDecoration: "none" }}
        >
          Profile
        </Link>
      </p>
    </div>
  );
}

export default Sidebar;