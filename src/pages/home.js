import React from "react";
import Content from "../components/content";
import Maps from "../components/maps";
import Navbar from "../components/navbar";
import { SideBar } from "../components/sidebar";
import "../assets/style/home.css";

const Home = () => {
  return (
    <div className="h-screen relative">
      <Navbar />
      <Content />
      <SideBar />
      <Maps />
    </div>
  );
};

export default Home;
