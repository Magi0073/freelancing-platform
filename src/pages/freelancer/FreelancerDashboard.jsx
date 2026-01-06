import Jobs from "./Jobs";
import MyBids from "./MyBids";
import StatCard from "../../components/StatCard";

export default function FreelancerDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Freelancer Dashboard</h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <StatCard title="Available Jobs" value="12" />
        <StatCard title="My Bids" value="4" />
        <StatCard title="Ongoing Projects" value="2" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Jobs />
        <MyBids />
      </div>
    </div>
  );
}
