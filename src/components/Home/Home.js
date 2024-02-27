import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import HomeNav from "../HomeNav/HomeNav";
import { MdArrowDropDown } from "react-icons/md";
import { FaFilter } from "react-icons/fa";

import "./Home.css";
import HomeMiddle from "../HomeMiddle/HomeMiddle";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Sidebar />
      <div className="home-contents">
        <HomeNav />
        <div className="home-middle-container">
          {/* home middle navbar */}
          <div className="middel-nav">
            {/* home middle left content */}

            <div className="home-middle-left">
              <p>Live(30)</p>
              <p className="green-respon">Responded(30)</p>
              <p className="red-respon">UnResponded(30)</p>
            </div>

            {/* home middle left content */}
            <div className="home-middle-right">
              <p className="bid-bleack">Bid Created</p>
              <p>Today</p>
              <p>Yesterday</p>
              <div className="calendar-btn">
                Calendar
                <MdArrowDropDown />
              </div>
              <FaFilter className="filter" />
            </div>
          </div>
          {/* home middle content*/}
          <HomeMiddle />
        </div>
      </div>
    </div>
  );
};

export default Home;