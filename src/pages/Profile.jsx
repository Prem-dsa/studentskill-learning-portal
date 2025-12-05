import React, { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { Camera } from "lucide-react";

export default function Profile() {
  const { user, profilePic, updateProfilePic } = useAuth();
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      updateProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-2xl font-semibold mb-6">Your Profile</h1>

        <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/10 shadow-xl flex items-center gap-6">

          {/* Profile Image */}
          <div className="relative">
            <img
              src={profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border border-white/10 shadow-lg"
            />

            {/* Upload Button */}
            <button
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-1 right-1 bg-purple-600 hover:bg-purple-500 p-2 rounded-full shadow-lg"
            >
              <Camera className="w-4 h-4" />
            </button>

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>

          {/* Profile Info */}
          <div>
            <h2 className="text-lg font-semibold">{user?.name || "Student User"}</h2>
            <p className="text-slate-300 text-sm mt-1">
              Email: {user?.email || "guest@example.com"}
            </p>
            <p className="text-slate-400 text-xs mt-1">Learning Level: Beginner</p>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/10">
            <h3 className="text-sm font-semibold mb-2 text-purple-300">Your Progress</h3>
            <p className="text-xs text-slate-300">0% completed • Keep going! 🚀</p>
          </div>

          <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/10">
            <h3 className="text-sm font-semibold mb-2 text-purple-300">Badges</h3>
            <p className="text-xs text-slate-300">No badges yet. Complete lessons to earn badges! 🏅</p>
          </div>
        </div>

      </div>
    </div>
  );
}

