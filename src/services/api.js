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
  return axios.put("/profile", profileData, getAuthHeader());
};

export const updatePassword = (passwordData) => {
  return axios.put("/profile/password", passwordData, getAuthHeader());
};

export const uploadProfileImage = (imageFile) => {
  const formData = new FormData();
  formData.append("profileImage", imageFile);

  return axios.put("/profile/upload-image", formData, {
    headers: {
      ...getAuthHeader().headers,
      "Content-Type": "multipart/form-data",
    },
  });
};

// Comment/Review API functions
export const getCommentsBySpot = (spotId, page = 1, limit = 10) => {
  return axios.get(`/comments/${spotId}?page=${page}&limit=${limit}`, {
    headers: {
      Authorization: localStorage.getItem("token")
        ? `Bearer ${localStorage.getItem("token")}`
        : undefined,
    },
  });
};

// Get rating summary for a spot
export const getRatingSummary = (spotId) => {
  return axios.get(`/ratings/${spotId}`);
};

export const createComment = (commentData) => {
  return axios.post("/comments", commentData, getAuthHeader());
};

export const likeComment = (commentId) => {
  return axios.post(`/comments/${commentId}/like`, {}, getAuthHeader());
};

export const dislikeComment = (commentId) => {
  return axios.post(`/comments/${commentId}/dislike`, {}, getAuthHeader());
};

export const unlikeComment = (commentId) => {
  return axios.delete(`/comments/${commentId}/like`, getAuthHeader());
};

export const removeDislikeComment = (commentId) => {
  return axios.delete(`/comments/${commentId}/dislike`, getAuthHeader());
};
