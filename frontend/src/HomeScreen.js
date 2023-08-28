import React, { useState } from "react";
import "./HomeScreen.css";
import MenuItem from "./MenuItem";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Settings, ShowChart } from "@mui/icons-material";

function HomeScreen() {
  const [imageHover, setImageHover] = useState(false);
  const [sectionImage, setSectionImage] = useState(null);
  const defaultImage = './images/test2.jpg'
  return (
    <div className="homeScreen">
      <div className="header">
        <h2>Welcome, User.</h2>
      </div>
      <div className="container">
        <div className="menuImage">
          {imageHover && sectionImage && (
            <img src={sectionImage} alt="Hovered Image" />
          )}
          {!imageHover && (
            <img src={defaultImage} alt="Hovered Image" />

          )}
        </div>
        <div className="menu">
          <MenuItem
            setImageHover={setImageHover}
            imageHover={imageHover}
            setSectionImage={setSectionImage}
            sectionImage={sectionImage}
            icon={<AccountBalanceIcon />}
            sectionName={"Budget"}
          />
          <MenuItem icon={<ShowChart />} sectionName={"Portfolios"} />
          <MenuItem icon={<Settings />} sectionName={"Settings"} />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
