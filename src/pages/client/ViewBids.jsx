export default function ViewBids() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Bids Received</h2>

      <div className="border p-3 rounded mb-3">
        <p className="font-semibold">Freelancer: Magi</p>
        <p className="text-sm text-gray-500">Bid: ₹4500</p>
        <button className="mt-2 bg-emerald-600 text-white px-4 py-1 rounded-lg">
          Accept
        </button>
      </div>
    </div>
  );
}
