import React from "react";
import { useNavigate } from "react-router-dom";
import { loader } from "../assets";
import { FundCard } from "./index";
const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();
  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };
  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({campaigns.length})
      </h1>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <>
            <img
              src={loader}
              alt="loading"
              className="w-[100px] h-[100px] object-contain"
            ></img>
          </>
        )}
        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns
          </p>
        )}
        {!isLoading && campaigns?.length !== 0
          ? campaigns?.map((campaign, index) => (
              <FundCard
                key={index}
                {...campaign}
                handleClick={() => handleNavigate(campaign)}
              ></FundCard>
            ))
          : ""}
        Hereeeee
      </div>
    </div>
  );
};

export default DisplayCampaigns;