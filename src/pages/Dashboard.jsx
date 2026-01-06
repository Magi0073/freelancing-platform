import { useLocation, Navigate } from "react-router-dom";
import FreelancerDashboard from "./freelancer/FreelancerDashboard";
import ClientDashboard from "./client/ClientDashboard";

export default function Dashboard() {
  const location = useLocation();

  const role =
    location.state?.role || localStorage.getItem("userRole");

  if (!role) {
    return <Navigate to="/" />;
  }

  return role === "client" ? (
    <ClientDashboard />
  ) : (
    <FreelancerDashboard />
  );
}
