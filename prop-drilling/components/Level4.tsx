import Level5 from "./Level5";

interface Level4Props {
  isDark: boolean;
}

export default function Level4({ isDark }: Level4Props) {
  return (
    <div
      className={`p-6 rounded-lg border-2 transition-colors ${
        isDark ? "bg-gray-500 border-gray-400" : "bg-gray-50 border-gray-200"
      }`}
    >
      <h3 className="text-lg font-bold mb-4">Level 4 Component</h3>
      <p
        className={`mb-4 text-sm ${isDark ? "text-gray-100" : "text-gray-600"}`}
      >
        We're getting deeper! Level 4 passes the{" "}
        <code className="bg-opacity-20 px-2 py-1 rounded bg-gray-300">
          isDark
        </code>{" "}
        prop to Level 5.
      </p>
      <Level5 isDark={isDark} />
    </div>
  );
}
