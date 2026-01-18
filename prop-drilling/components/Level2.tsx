import Level3 from "./Level3";

interface Level2Props {
  isDark: boolean;
}

export default function Level2({ isDark }: Level2Props) {
  return (
    <div
      className={`p-6 rounded-lg border-2 transition-colors ${
        isDark ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-200"
      }`}
    >
      <h3 className="text-xl font-bold mb-4">Level 2 Component</h3>
      <p
        className={`mb-4 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}
      >
        Drilling down the props: Level 2 receives the{" "}
        <code className="bg-opacity-20 px-2 py-1 rounded bg-gray-400">
          isDark
        </code>{" "}
        prop and passes it to Level 3.
      </p>
      <Level3 isDark={isDark} />
    </div>
  );
}
