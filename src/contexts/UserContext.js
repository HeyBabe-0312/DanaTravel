import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to fetch user data
  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // If no token exists, clear user data immediately
      setUser(null);
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get("/auth/me", config);

      if (response.status === 200) {
        setUser(response.data.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Function to update user data (for Settings component)
  const updateUserData = (newUserData) => {
    setUser((prev) => ({
      ...prev,
      ...newUserData,
    }));
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  // Fetch user data on mount
  useEffect(() => {
    fetchUserData();
  }, []);

  // The context value that will be supplied to any descendants of this provider
  const value = {
    user,
    isAuthenticated,
    loading,
    fetchUserData,
    updateUserData,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Custom hook for using the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default UserContext;
