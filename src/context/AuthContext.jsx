import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load saved user, or default guest user
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      name: "Student User",
      email: "student@example.com",
    }
  );

  // Load profile picture
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem("profilePic") || null
  );

  const updateProfilePic = (img) => {
    setProfilePic(img);
    localStorage.setItem("profilePic", img);
  };

  // Save user changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // Login function
  const login = (email, password) => {
    const loggedUser = { name: "Student User", email };
    setUser(loggedUser);
    localStorage.setItem("user", JSON.stringify(loggedUser));
  };

  // Signup function
  const signup = (name, email, password) => {
    const newUser = { name, email };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // -----------------------------
  // 🎯 Learning Progress System
  // -----------------------------
  const [completedLessons, setCompletedLessons] = useState(
    JSON.parse(localStorage.getItem("completedLessons")) || []
  );

  const markLessonCompleted = (id) => {
    if (!completedLessons.includes(id)) {
      const updated = [...completedLessons, id];
      setCompletedLessons(updated);
      localStorage.setItem("completedLessons", JSON.stringify(updated));
    }
  };

  const isLessonCompleted = (id) => completedLessons.includes(id);

  const getCompletedCount = () => completedLessons.length;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        profilePic,
        updateProfilePic,
        setUser,

        // Progress functions
        completedLessons,
        markLessonCompleted,
        isLessonCompleted,
        getCompletedCount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

