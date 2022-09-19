import React from "react";
import { RiCloseCircleFill, RiSettings5Fill } from "react-icons/ri";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useSetRecoilState } from "recoil";
import { dataAtom } from "../store/atom/dataAtom";

const Navbar = () => {
  const setData = useSetRecoilState(dataAtom);

  // function for close content
  const setCloseHandler = () => {
    setData({ clicked: false });
  };
  return (
    <div className="navbar bg-white fixed z-[999]">
      <div className="grid grid-cols-3 justify-center text-center w-full">
        <div className="span-1"></div>
        <div className="text-black font-bold">TOP-RATED TOURIST ATTRACTIONS IN SINGAPORE</div>
        <div className="flex flex-row w-full justify-end pr-10">
          <button>
            <RiSettings5Fill size={24} style={{ color: "#313541", opacity: 0.8 }} />
          </button>
          <button>
            <AiFillQuestionCircle size={24} className="mx-3" style={{ color: "#313541", opacity: 0.8 }} />
          </button>
          <button onClick={setCloseHandler}>
            <RiCloseCircleFill size={24} style={{ color: "#313541", opacity: 0.8 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
