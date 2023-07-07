import React from "react";
import logo from "../../assets/logo/long-logo.png";
import "./style.css";
import InputBar from "./inputbar";
import LanguageIcon from "@mui/icons-material/Language";
import BasicMenu from "./ProfileMenu";

import SimpleBottomNavigation from "./BottomNav";

import MobileSearchBar from "../MobileSearchBar";
function Header() {
    return <div className="navbar">
        <img src={logo} alt="logo" className="navbar-logo" />
        <InputBar />
        <div className="profile-container">
            <div className="airbnb-your-home">Airbnb your home</div>
            <div className="airbnb-your-home">
                <LanguageIcon sx={{ fontSize: "1.3rem" }} />
            </div>
            <div className="profile-div">
                <BasicMenu />
            </div>
        </div>
        <MobileSearchBar />
        <SimpleBottomNavigation />
    </div>
}
export default Header;