import { useEffect, useState, useContext } from "react";

// Internal imports
import { CrowdFundingContext } from "../Context/CrowdFunding";
// import { Hero, Card, PopUp } from "../Components";
import Hero from "../components/Hero"
import Card from "../components/Card"
import PopUp from "../components/PopUp"

const Index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
    currentAccount
  } = useContext(CrowdFundingContext);

  const [allCampaign, setAllCampaign] = useState([]);
  const [userCampaign, setUserCampaign] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getCampaigns();
      const userData = await getUserCampaigns();

      // Optional: Remove user campaigns from the all campaigns list
      const filteredAllCampaigns = allData.filter(
        (campaign) => !userData.some((user) => user.pId === campaign.pId)
      );

      setAllCampaign(filteredAllCampaigns);
      setUserCampaign(userData);
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />

      {/* All Listed Campaigns (excluding yours) */}
      <Card
        title="All Listed Campaigns"
        allCampaign={allCampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
        address={currentAccount}
      />

      {/* Only your campaigns */}
      <Card
        title="Your Created Campaigns"
        allCampaign={userCampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
        address={currentAccount}
      />

      {/* Donation Pop-Up */}
      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default Index;
