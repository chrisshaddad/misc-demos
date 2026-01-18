import Level6 from "./Level6";

interface Level5Props {
  isDark: boolean;
}

export default function Level5({ isDark }: Level5Props) {
  return (
    <div
      className={`p-6 rounded-lg border-2 transition-colors ${
        isDark ? "bg-gray-400 border-gray-300" : "bg-white border-gray-100"
      }`}
    >
      <h3 className="text-lg font-bold mb-4">Level 5 Component</h3>
      <p
        className={`mb-4 text-sm ${isDark ? "text-gray-900" : "text-gray-600"}`}
      >
        Almost there! Level 5 continues to pass the prop down to Level 6. This
        is prop drilling in action.
      </p>
      <Level6 isDark={isDark} />
    </div>
  );
}
