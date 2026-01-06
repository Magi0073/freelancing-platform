export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex flex-col">
      <span className="text-gray-500 text-sm">{title}</span>
      <span className="text-2xl font-bold mt-2">{value}</span>
    </div>
  );
}
