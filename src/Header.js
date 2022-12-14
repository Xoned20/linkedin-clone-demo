import React from "react"
import "./Header.css"
import HeaderOptions from "./HeaderOptions"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img  
                    src="https://w7.pngwing.com/pngs/511/605/png-transparent-in-logo-linkedin-diduco-ab-icon-linkedin-blue-angle-text-thumbnail.png" 
                    alt=""
                />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOptions Icon={ChatIcon} title="Messaging"/>
                <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOptions avatar="https://lh3.googleusercontent.com/ogw/AOh-ky2sOEZJfjjqkUXbYLFODbHRnGnIFbkyBNqAIIan=s32-c-mo" title="Me"/>
            </div> 
        </div>
    )
}

export default Header