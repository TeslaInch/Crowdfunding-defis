
import { useState } from "react";

const Hero = ({titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
    const data =   await createCampaign(campaign); 
    } catch (error) {
      console.log("Error creating campaign:", error);
    }
  };

  return (
    <div className="relative">
      <span className="coverLine"></span>
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photos-3228766.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1200"
        alt="background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative bg-opacity-75 backgroundMain">
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-row items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-10 font-sans text-3xl font-bold tracking-tight text-white sm:text:5xl sm:leading-none">
                Crypto King <br className="hidden md:block" />
                Crowd Funding
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Start your journey to fund projects with cryptocurrency.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Create a Campaign
                </h3>
                <form>
                  <div className="mb-2">
                    <label
                      htmlFor="title"
                      className="inline-block mb-1 font-medium"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter campaign title"
                      required
                      // value={campaign.title}
                      onChange={(e) =>
                        setCampaign({ ...campaign, title: e.target.value })
                      }
                      className="w-full h-12 px-4 border rounded shadow-sm focus:outline-none"
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="description"
                      className="inline-block mb-1 font-medium"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      placeholder="Describe your campaign"
                      required
                      // value={campaign.description}
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          description: e.target.value,
                        })
                      }
                      className="w-full h-12 px-4 border rounded shadow-sm focus:outline-none"
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="amount"
                      className="inline-block mb-1 font-medium"
                    >
                      Target Amount (ETH)
                    </label>
                    <input
                      type="number"
                      placeholder="Enter target amount"
                      required
                      // value={campaign.amount}
                      onChange={(e) =>
                        setCampaign({ ...campaign, amount: e.target.value })
                      }
                      className="w-full h-12 px-4 border rounded shadow-sm focus:outline-none"
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="deadline"
                      className="inline-block mb-1 font-medium"
                    >
                      Deadline
                    </label>
                    <input
                      type="date"
                      required
                      // value={campaign.deadline}
                      onChange={(e) =>
                        setCampaign({ ...campaign, deadline: e.target.value })
                      }
                      className="w-full h-12 px-4 border rounded shadow-sm focus:outline-none"
                    />
                  </div>

                  <div className="mt-4 mb-2">
                    <button
                      onClick={(e)=>createNewCampaign(e)}
                      className="w-full h-12 px-6 font-medium text-white bg-blue-600 rounded shadow-md hover:bg-blue-700 focus:outline-none"
                    >
                      Create Campaign
                    </button>
                  </div>

                  <p className="text-xs text-gray-600 sm:text-sm">
                    Start your campaign and raise funds!
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
