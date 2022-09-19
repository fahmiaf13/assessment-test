import React from "react";
import { useState } from "react";
import "../../assets/style/sidebar.css";
import { FaGlobeAmericas } from "react-icons/fa";

import SingaporeIcon from "../../assets/images/singapore-icon.png";
import VideosIcon from "../../assets/images/videos-icon.png";
import BlogIcon from "../../assets/images/blog-icon.png";
import InfoIcon from "../../assets/images/info-icon.png";
import SideMenu from "./sideMenu";

const SideBar = () => {
  const [Show, setShow] = useState(false);

  // show content handling func
  const showHandler = () => {
    setShow((prev) => !prev);
  };
  return (
    <div id="sidebar" className="bg-transparent">
      <div className="grid grid-cols-2">
        <div className="h-screen bg-black2 w-[150px]">
          <button className="wrapper border-b border-black3 hover:bg-cyan hover:text-white focus:bg-cyan focus:text-white group" onClick={showHandler}>
            <FaGlobeAmericas size={45} style={{ color: "#8298a0" }} className="group-hover:fill-white group-focus:fill-white" />
            <div>Browse</div>
          </button>
          <button className="wrapper border-b border-black3 hover:bg-cyan hover:text-white ">
            <img src={SingaporeIcon} alt="" />
            <div>
              Suggest <br /> Attraction
            </div>
          </button>
          <button className="wrapper border-b border-black3 hover:bg-cyan hover:text-white">
            <img src={VideosIcon} alt="" />
            <div>Videos</div>
          </button>
          <button className="wrapper border-b border-black3 hover:bg-cyan hover:text-white">
            <img src={BlogIcon} alt="" />
            <div>Blog</div>
          </button>
          <button className="wrapper border-b border-black3 hover:bg-cyan hover:text-white">
            <img src={InfoIcon} alt="" />
            <div>Info</div>
          </button>
        </div>
        <div>{Show && <SideMenu />}</div>
      </div>
    </div>
  );
};

export default SideBar;
