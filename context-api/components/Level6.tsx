import { useTheme } from "@/context/ThemeContext";
import Level7 from "./Level7";

export default function Level6() {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg border-2 transition-colors ${
        isDark
          ? "bg-gray-300 border-gray-200"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <h3 className="text-lg font-bold mb-4">
        Level 6 Component
      </h3>
      <p className={`mb-4 text-sm ${isDark ? "text-gray-900" : "text-gray-700"}`}>
        Compare this to the prop-drilling example - no component needs to accept props it doesn't use!
      </p>
      <Level7 />
    </div>
  );
}
