import { useTheme } from "@/context/ThemeContext";
import Level5 from "./Level5";

export default function Level4() {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg border-2 transition-colors ${
        isDark
          ? "bg-gray-500 border-gray-400"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <h3 className="text-lg font-bold mb-4">
        Level 4 Component
      </h3>
      <p className={`mb-4 text-sm ${isDark ? "text-gray-100" : "text-gray-600"}`}>
        We're getting deeper, but Level 4 still accesses the theme directly from Context without any intermediate props.
      </p>
      <Level5 />
    </div>
  );
}
