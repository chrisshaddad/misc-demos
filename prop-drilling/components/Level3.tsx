import Level4 from "./Level4";

interface Level3Props {
  isDark: boolean;
}

export default function Level3({ isDark }: Level3Props) {
  return (
    <div
      className={`p-6 rounded-lg border-2 transition-colors ${
        isDark ? "bg-gray-600 border-gray-500" : "bg-white border-gray-100"
      }`}
    >
      <h3 className="text-lg font-bold mb-4">Level 3 Component</h3>
      <p
        className={`mb-4 text-sm ${isDark ? "text-gray-200" : "text-gray-600"}`}
      >
        Still drilling down! The prop chain continues: page → Level1 → Level2 →
        Level3 → Level4.
      </p>
      <Level4 isDark={isDark} />
    </div>
  );
}
