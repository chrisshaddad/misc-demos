import { useTheme } from "@/context/ThemeContext";
import Level4 from "./Level4";

export default function Level3() {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg border-2 transition-colors ${
        isDark
          ? "bg-gray-600 border-gray-500"
          : "bg-white border-gray-100"
      }`}
    >
      <h3 className="text-lg font-bold mb-4">
        Level 3 Component
      </h3>
      <p className={`mb-4 text-sm ${isDark ? "text-gray-200" : "text-gray-600"}`}>
        Each component can independently access the theme via <code className="bg-opacity-20 px-2 py-1 rounded bg-gray-400">useTheme()</code>. Much cleaner than prop drilling!
      </p>
      <Level4 />
    </div>
  );
}
