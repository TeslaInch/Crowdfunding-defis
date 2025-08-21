import { useState } from "react";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
    } catch (error) {
      console.log("Error creating campaign:", error);
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3228766/pexels-photos-3228766.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1200"
          alt="background"
          className="object-cover w-full h-full opacity-30"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Left Section: Title and Description */}
          <div className="w-full max-w-xl lg:w-7/12">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
               Crowd Funding
              <br className="hidden md:block" />
              Platform
             
            </h2>
            <p className="max-w-xl text-lg text-gray-300 sm:text-xl">
              Empower your projects with decentralized funding. Start your cryptocurrency campaign today.
            </p>
          </div>

          {/* Right Section: Campaign Form */}
          <div className="w-full max-w-xl lg:w-5/12">
            <div className="p-8 bg-gray-900 rounded-xl shadow-xl">
              <h3 className="mb-6 text-2xl font-semibold text-center text-white sm:text-3xl">
                Create a Campaign
              </h3>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-200"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter campaign title"
                    required
                    onChange={(e) =>
                      setCampaign({ ...campaign, title: e.target.value })
                    }
                    className="w-full px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-200"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    placeholder="Describe your campaign"
                    required
                    onChange={(e) =>
                      setCampaign({ ...campaign, description: e.target.value })
                    }
                    className="w-full px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="amount"
                    className="block mb-2 text-sm font-medium text-gray-200"
                  >
                    Target Amount (ETH)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter target amount"
                    required
                    onChange={(e) =>
                      setCampaign({ ...campaign, amount: e.target.value })
                    }
                    className="w-full px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="deadline"
                    className="block mb-2 text-sm font-medium text-gray-200"
                  >
                    Deadline
                  </label>
                  <input
                    type="date"
                    required
                    onChange={(e) =>
                      setCampaign({ ...campaign, deadline: e.target.value })
                    }
                    className="w-full px-4 py-3 text-white bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>

                <button
                  onClick={(e) => createNewCampaign(e)}
                  className="w-full px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                >
                  Create Campaign
                </button>

                <p className="mt-4 text-sm text-center text-gray-400">
                  Start your campaign and raise funds with ease!
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero
