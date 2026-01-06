export default function JobCard({ job, actionText }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow mb-4">
      <h3 className="font-semibold text-lg">{job.title}</h3>
      <p className="text-gray-500 text-sm mt-1">
        Budget: ₹{job.budget}
      </p>
      <button className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
        {actionText}
      </button>
    </div>
  );
}
