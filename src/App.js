import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Home, CampaignDetails, CreateCampaign, Profile } from "./pages";
import { Navbar, Sidebar } from "./components";
const App = () => {
  useEffect(() => {}, []);
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} index></Route>
          <Route path="/create-campaign" element={<CreateCampaign />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/campaign-details/:id"
            element={<CampaignDetails />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
