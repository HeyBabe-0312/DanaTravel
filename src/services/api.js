import axios from "axios";

// Set up default headers for authentication
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const registerUser = (userData) => {
  return axios.post("/auth/register", userData);
};

export const loginUser = (credentials) => {
  return axios.post("/auth/login", credentials);
};

export const getMe = () => {
  return axios.get("/auth/me", getAuthHeader());
};

export const updateProfile = (profileData) => {
  return axios.put("/api/profile", profileData, getAuthHeader());
};

export const updatePassword = (passwordData) => {
  return axios.put("/api/profile/password", passwordData, getAuthHeader());
};
