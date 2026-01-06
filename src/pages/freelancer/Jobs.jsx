import JobCard from "../../components/JobCard";

const jobs = [
  { id: 1, title: "React Website", budget: 5000 },
  { id: 2, title: "Node API Development", budget: 3500 },
];

export default function Jobs() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} actionText="Apply Bid" />
      ))}
    </div>
  );
}
