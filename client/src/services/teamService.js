import api from "./api";

// Get Team Members
export const getTeamMembers = async () => {
  const response = await api.get("/team");
  return response.data;
};

// Add Team Member
export const addTeamMember = async (member) => {
  const response = await api.post("/team", member);
  return response.data;
};

// Update Team Member
export const updateTeamMember = async (id, member) => {
  const response = await api.put(`/team/${id}`, member);
  return response.data;
};

// Delete Team Member
export const deleteTeamMember = async (id) => {
  const response = await api.delete(`/team/${id}`);
  return response.data;
};