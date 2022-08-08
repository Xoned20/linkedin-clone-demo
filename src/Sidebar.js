import React from "react"
import "./Sidebar.css"
import Avatar from "@material-ui/core/Avatar"

const recentItem = (topic) => (
    <div className="sidebar__recentItem">
       <span className="sidebar__hash">#</span>
       <p>{topic}</p> 
    </div>
)

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://static7.depositphotos.com/1222912/788/i/450/depositphotos_7887354-stock-photo-stars-background-01.jpg" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Cyril Jephery</h2>
                <h4>jephery.cyriljeph@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1,004</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                <p className="sidebar__statNumber">967</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactJS")}
                {recentItem("programming")}
                {recentItem("coding")}
                {recentItem("javascript")}
                {recentItem("softwareengineering")}
                {recentItem("computerscience")}
            </div>
        </div>
    )
}

export default Sidebar