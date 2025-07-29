import React, { useState, useEffect } from "react";

const PopUp = ({ setOpenModel, donate, donateFunction, getDonations }) => {
  const [amount, setAmount] = useState("");
  const [allDonationData, setAllDonationData] = useState([]);

  const createDonation = async () => {
    try {
      const data = await donateFunction(donate.pId, amount);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchDonations = async () => {
      const donationData = await getDonations(donate.pId);
      setAllDonationData(donationData);
    };
    fetchDonations();
  }, [donate.pId, getDonations]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 relative">
        {/* Close Button */}
        <button
          onClick={() => setOpenModel(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-2xl font-semibold">{donate.title}</h3>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <p className="mb-4 text-gray-600">{donate.description}</p>
          <input
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount (ETH)"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:border-blue-400"
          />

          {Array.isArray(allDonationData) && allDonationData.length > 0 ? (
            allDonationData.map((donate, i) => (
              <p key={i} className="text-gray-500 text-sm mb-1">
                {i + 1}: {donate.donation} ETH —{" "}
                {donate.donator.slice(0, 35)}...
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No donations yet.</p>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-end gap-2">
          <button
            className="text-gray-600 hover:text-black px-4 py-2"
            onClick={() => setOpenModel(false)}
          >
            Close
          </button>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            onClick={createDonation}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
