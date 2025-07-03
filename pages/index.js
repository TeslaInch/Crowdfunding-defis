import  { useEffect, useState, useContext } from "react";

// Internal import
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PopUp } from "../Components";

const Index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  const [allCampaign, setAllCampaign] = useState([]);
  const [userCampaign, setUserCampaign] = useState([]);
  useEffect(() => {
      const getCampaignData = getCampaigns();
      const userCampaignsData =  getUserCampaigns();
     return async ()=>{
       const allData = await getCampaignData
       const userData = await getUserCampaigns
       setAllCampaign(allData)
       setUserCampaign(userData)
     };
  }, []);

  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState(null);
  console.log(donateCampaign);
  
  
  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />
      <Card
        title="All Listed Campaigns"
        allCampaign = {allCampaign}
        setOpenModel = {setOpenModel}
        setDonate = {setDonateCampaign}
      />
      <Card
        title="Your Created Campaign"
        allCampaign = {userCampaign}
        setOpenModel ={setOpenModel}
        setDonate = {setDonateCampaign}
      />
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
