import { useTheme } from "@/context/ThemeContext";
import Level2 from "./Level2";

export default function Level1() {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg border-2 transition-colors ${
        isDark
          ? "bg-gray-800 border-gray-700"
          : "bg-gray-100 border-gray-300"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">
        Level 1 Component
      </h2>
      <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        This is Level 1. The <code className="bg-opacity-20 px-2 py-1 rounded bg-gray-400">useTheme()</code> hook retrieves the theme from Context.
      </p>
      <Level2 />
    </div>
  );
}
