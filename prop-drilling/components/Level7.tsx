interface Level7Props {
  isDark: boolean;
}

export default function Level7({ isDark }: Level7Props) {
  return (
    <div
      className={`p-6 rounded-lg border-2 transition-colors ${
        isDark ? "bg-gray-200 border-gray-100" : "bg-white border-gray-100"
      }`}
    >
      <h3 className="text-lg font-bold mb-4">Level 7 Component (Final)</h3>
      <p
        className={`mb-3 text-sm ${isDark ? "text-gray-900" : "text-gray-700"}`}
      >
        ✅ We've reached Level 7! The{" "}
        <code className="bg-opacity-20 px-2 py-1 rounded bg-gray-400">
          isDark
        </code>{" "}
        prop made it all the way down from the root.
      </p>
      <div
        className={`p-4 rounded-lg ${isDark ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-900"}`}
      >
        <p className="font-semibold">
          Current Theme:{" "}
          <span className="font-bold">{isDark ? "🌙 Dark" : "☀️ Light"}</span>
        </p>
        <p className="text-sm mt-2">
          Try clicking the toggle button at the top to see the entire component
          tree update!
        </p>
      </div>
    </div>
  );
}
