"use client";

import { useTheme } from "@/context/ThemeContext";
import Level1 from "@/components/Level1";

export default function Home() {
  const { isDark, toggleTheme } = useTheme();

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
            <h1 className="text-4xl font-bold mb-2">Context API Demo</h1>
            <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Theme is managed with React Context API (no prop drilling!)
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              isDark
                ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* No need to pass props! Context does it automatically */}
        <Level1 />
      </div>
    </div>
  );
}
