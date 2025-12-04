import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Logged in user
  const [user, setUser] = useState(null);

  // Completed lessons stored in localStorage
  const [completedLessons, setCompletedLessons] = useState([]);

  // Load stored values on refresh
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("ssp_user"));
    const storedLessons = JSON.parse(localStorage.getItem("ssp_completed")) || [];

    if (storedUser) setUser(storedUser);
    setCompletedLessons(storedLessons);
  }, []);

  // Save completed lessons to storage
  useEffect(() => {
    localStorage.setItem("ssp_completed", JSON.stringify(completedLessons));
  }, [completedLessons]);

  // --- AUTH FUNCTIONS ---

  function signup(name, email, password) {
    const newUser = { name, email };
    localStorage.setItem("ssp_user", JSON.stringify(newUser));
    setUser(newUser);
  }

  function login(email, password) {
    const storedUser = JSON.parse(localStorage.getItem("ssp_user"));
    if (!storedUser) return false;

    if (storedUser.email === email) {
      setUser(storedUser);
      return true;
    }
    return false;
  }

  function logout() {
    setUser(null);
  }

  // --- COURSE SYSTEM FUNCTIONS ---

  function markLessonCompleted(id) {
    if (!completedLessons.includes(id)) {
      const updated = [...completedLessons, id];
      setCompletedLessons(updated);
      localStorage.setItem("ssp_completed", JSON.stringify(updated));
    }
  }

  function isLessonCompleted(id) {
    return completedLessons.includes(id);
  }

  function getCompletedCount() {
    return completedLessons.length;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,

        completedLessons,
        markLessonCompleted,
        isLessonCompleted,
        getCompletedCount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

