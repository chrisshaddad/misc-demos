import { useTheme } from "@/context/ThemeContext";
import Level6 from "./Level6";

export default function Level5() {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg border-2 transition-colors ${
        isDark
          ? "bg-gray-400 border-gray-300"
          : "bg-white border-gray-100"
      }`}
    >
      <h3 className="text-lg font-bold mb-4">
        Level 5 Component
      </h3>
      <p className={`mb-4 text-sm ${isDark ? "text-gray-900" : "text-gray-600"}`}>
        Context API eliminates the need to pass the theme through every level. Way more scalable!
      </p>
      <Level6 />
    </div>
  );
}
