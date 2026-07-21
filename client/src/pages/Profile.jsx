import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Profile() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px" }}>
          <h1>Profile</h1>

          <p>Name : Admin</p>

          <p>Email : admin@gmail.com</p>

          <p>Role : Admin</p>
        </div>
      </div>
    </>
  );
}

export default Profile;