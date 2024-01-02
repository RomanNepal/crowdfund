import React, { useState } from "react";
import { logo, sun } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { navlinks } from "../constants.js";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => {
    return (
      <div
        onClick={handleClick}
        className={`w-[48px] h-[48px] rounded-[10px] ${
          isActive && isActive === name && `bg-[#2c2f32]`
        } flex justify-center items-center ${
          !disabled && "cursor-pointer"
        } ${styles}`}
      >
        {isActive === name ? (
          <img src={imgUrl} className="w-1/2 h-1/2" />
        ) : (
          <img
            src={imgUrl}
            alt="fund_logo"
            className={`w-1/2 h-1/2 grayscale`}
          />
        )}
      </div>
    );
  };
  return (
    <div className="flex justify-between flex-col sticky top-5 h-[93vh]">
      <Link to={"/"}>
        <Icon
          styles={`bg-[#2c2f32] w-[52px] h-[52px]`}
          imgUrl={logo}
          isActive={isActive}
        />
      </Link>
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            ></Icon>
          ))}
        </div>
        <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun}></Icon>
      </div>
    </div>
  );
};

export default Sidebar;
