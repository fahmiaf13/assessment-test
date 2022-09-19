import React from "react";
import { useRecoilValue } from "recoil";
import { dataSelector } from "../store/selector/dataSelector";
import { MdLocationOn } from "react-icons/md";
import { GoGlobe } from "react-icons/go";
import "../assets/style/content.css";

const Content = () => {
  const setValue = useRecoilValue(dataSelector);

  return (
    // validating state from button click
    <div>
      {setValue.clicked ? (
        <div className="content bg-black">
          <img src={setValue.img} alt="" />
          <div className="bg-cyan">
            <div className="font-bold mx-7 py-3">{setValue.place}</div>
          </div>
          <div className="mx-7 my-5 text-sm">{setValue.desc}</div>
          <div className="text-sm mt-7 mx-7 flex items-center">
            <MdLocationOn style={{ color: "#72cdd2" }} />
            <p className="ml-3">10 Bayfront Avenue, Singapore</p>
          </div>
          <div className="text-sm mx-7 flex items-center">
            <GoGlobe style={{ color: "#92d72e" }} />
            <p className="ml-3">http://www.marinabaysands.com</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Content;
