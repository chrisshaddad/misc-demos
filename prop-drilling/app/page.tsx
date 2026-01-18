"use client";

import { useState } from "react";
import Level1 from "@/components/Level1";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto p-8">
        {/* Header with Toggle Button */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Prop Drilling Demo</h1>
            <p
              className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Theme is passed down through nested components using props
            </p>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              isDark
                ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Pass isDark prop to nested components */}
        <Level1 isDark={isDark} />
      </div>
    </div>
  );
}
