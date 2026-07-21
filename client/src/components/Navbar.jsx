import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#2563eb",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Team Task Manager</h2>

      <div>
        <Link
          to="/dashboard"
          style={{ color: "white", marginRight: "20px" }}
        >
          Dashboard
        </Link>

        <Link
          to="/profile"
          style={{ color: "white" }}
        >
          Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;