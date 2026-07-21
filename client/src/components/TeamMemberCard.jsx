function TeamMemberCard({ member }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
      }}
    >
      <h3>{member.name}</h3>

      <p>{member.email}</p>

      <p>
        <strong>Role:</strong> {member.role}
      </p>
    </div>
  );
}

export default TeamMemberCard;