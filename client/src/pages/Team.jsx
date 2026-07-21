import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TeamMemberCard from "../components/TeamMemberCard";

function Team() {

  const members = [
    {
      name: "Admin",
      email: "admin@gmail.com",
      role: "Admin",
    },
  ];

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px" }}>
          <h1>Team Members</h1>

          {members.map((member, index) => (
            <TeamMemberCard
              key={index}
              member={member}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;