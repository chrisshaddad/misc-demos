import Level2 from "./Level2";

interface Level1Props {
  isDark: boolean;
}

export default function Level1({ isDark }: Level1Props) {
  return (
    <div
      className={`p-6 rounded-lg border-2 transition-colors ${
        isDark ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Level 1 Component</h2>
      <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        This is Level 1. The{" "}
        <code className="bg-opacity-20 px-2 py-1 rounded bg-gray-400">
          isDark
        </code>{" "}
        prop is passed down from the parent.
      </p>
      <Level2 isDark={isDark} />
    </div>
  );
}
