import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

// LocalStorage keys
const LS_USER = "ssl_user";
const LS_COMPLETED = "ssl_completed_lessons";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]); // array of course IDs
  const [loading, setLoading] = useState(true);

  // Load from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem(LS_USER);
    const storedCompleted = localStorage.getItem(LS_COMPLETED);

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedCompleted) {
      setCompletedLessons(JSON.parse(storedCompleted));
    }

    setLoading(false);
  }, []);

  // ---------- AUTH ----------

  const signup = ({ name, email, password }) => {
    const newUser = { name, email, password, createdAt: new Date().toISOString() };
    setUser(newUser);
    localStorage.setItem(LS_USER, JSON.stringify(newUser));
  };

  const login = (email, password) => {
    const stored = localStorage.getItem(LS_USER);
    if (!stored) return false;

    const savedUser = JSON.parse(stored);
    if (savedUser.email === email && savedUser.password === password) {
      setUser(savedUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    // you can keep completedLessons for same device, so not clearing here
  };

  // ---------- LESSON COMPLETION ----------

  const markLessonCompleted = (courseId) => {
    if (!completedLessons.includes(courseId)) {
      const updated = [...completedLessons, courseId];
      setCompletedLessons(updated);
      localStorage.setItem(LS_COMPLETED, JSON.stringify(updated));
    }
  };

  const isLessonCompleted = (courseId) => completedLessons.includes(courseId);

  const getCompletedCount = () => completedLessons.length;

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        logout,
        markLessonCompleted,
        isLessonCompleted,
        getCompletedCount,
        completedLessons,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
