export default function PostJob() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Post a Job</h2>

      <input
        className="w-full border p-2 rounded mb-3"
        placeholder="Job Title"
      />
      <input
        className="w-full border p-2 rounded mb-3"
        placeholder="Budget"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Post Job
      </button>
    </div>
  );
}
