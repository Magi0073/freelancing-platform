import PostJob from "./PostJob";
import ViewBids from "./ViewBids";
import StatCard from "../../components/StatCard";

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Client Dashboard</h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <StatCard title="Jobs Posted" value="5" />
        <StatCard title="Bids Received" value="14" />
        <StatCard title="Active Projects" value="3" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <PostJob />
        <ViewBids />
      </div>
    </div>
  );
}
