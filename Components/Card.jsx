import React from "react";

const Card = ({ title, allCampaign, setOpenModel, setDonate, address }) => {
  return (
    <div className="py-8 px-4 md:px-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCampaign.length === 0 ? (
          <p className="text-gray-500 col-span-full">No campaigns found.</p>
        ) : (
          allCampaign.map((campaign, i) => {
            const isOwner =
              address &&
              campaign?.owner &&
              address.toLowerCase() === campaign.owner.toLowerCase();

            return (
              <div
                key={i}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {campaign.description}
                  </p>
                  <div className="text-gray-600 text-sm mb-2">
                    <strong>Target:</strong> {campaign.target} ETH
                  </div>
                  <div className="text-gray-600 text-sm mb-4">
                    <strong>Raised:</strong> {campaign.amountCollected} ETH
                  </div>

                  {/* Disable donation if this is the user's own campaign */}
                  {isOwner ? (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-600 cursor-not-allowed px-4 py-2 rounded-md"
                    >
                      Cannot Donate to Your Own Campaign
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setDonate(campaign);
                        setOpenModel(true);
                      }}
                      className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                    >
                      Donate
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Card