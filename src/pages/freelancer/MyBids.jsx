const bids = [
  { job: "React Website", amount: 4800, status: "Pending" },
];

export default function MyBids() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Bids</h2>

      {bids.map((bid, i) => (
        <div key={i} className="bg-white p-4 rounded-xl shadow mb-3">
          <p className="font-semibold">{bid.job}</p>
          <p className="text-sm text-gray-500">Bid: ₹{bid.amount}</p>
          <span className="text-yellow-600 text-sm">{bid.status}</span>
        </div>
      ))}
    </div>
  );
}
