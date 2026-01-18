import Level7 from "./Level7";

interface Level6Props {
  isDark: boolean;
}

export default function Level6({ isDark }: Level6Props) {
  return (
    <div
      className={`p-6 rounded-lg border-2 transition-colors ${
        isDark ? "bg-gray-300 border-gray-200" : "bg-gray-50 border-gray-200"
      }`}
    >
      <h3 className="text-lg font-bold mb-4">Level 6 Component</h3>
      <p
        className={`mb-4 text-sm ${isDark ? "text-gray-900" : "text-gray-700"}`}
      >
        One more level! Level 6 passes to Level 7. Notice how the prop has to be
        manually threaded through each component.
      </p>
      <Level7 isDark={isDark} />
    </div>
  );
}
