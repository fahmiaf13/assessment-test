import React from "react";
import "../../assets/style/sidebar.css";

const SideMenu = () => {
  return (
    <div className="h-screen bg-black font-medium text-sm" id="sidemenu">
      <div className="py-5">
        <div className="py-3 px-3">
          <div tabIndex={0} className="collapse collapse-arrow pl-5 py-1 border border-black3">
            <div className="collapse-title px-0 font-light">filter by favourite</div>
            <div className="collapse-content">
              <p className="font-light text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid text-start px-3" id="browse-content">
        <div className="py-1 border-y border-black3">
          <button className="text-start px-5 py-1 text-white w-full">Merlion</button>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow pl-5 py-2 border-b border-black3">
          <div className="collapse-title px-0 text-white">Marina Bay Sands</div>
          <div className="collapse-content">
            <p className="font-light">ArtScience Museum</p>
            <p className="font-light">Marina Bay Sands Skypark</p>
            <p className="font-light">Double Helix Bridge</p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow pl-5 py-2 border-b border-black3">
          <div className="collapse-title px-0 text-white">Garden by the bay</div>
          <div className="collapse-content">
            <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, inventore.</p>
          </div>
        </div>
        <div tabIndex={0} className="collapse collapse-arrow pl-5 py-2 border-b border-black3">
          <div className="collapse-title px-0 text-white">China Town</div>
          <div className="collapse-content">
            <p className="font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, odit?</p>
          </div>
        </div>
        <div className="py-1 border-b border-black3">
          <button className="text-start px-5 py-1 text-white w-full">Asian Civilisations Museum</button>
        </div>
        <div className="py-1 border-b border-black3">
          <button className="text-start px-5 py-1 text-white w-full">Clarke Quay</button>
        </div>
        <div className="py-1 border-b border-black3">
          <button className="text-start px-5 py-1 text-white w-full">Fort Canning Park</button>
        </div>
        <div className="py-1 border-b border-black3">
          <button className="text-start px-5 py-1 text-white w-full">Singapore Flyer</button>
        </div>
        <div className="py-1 border-b border-black3">
          <button className="text-start px-5 py-1 text-white w-full">Orchard Road</button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
