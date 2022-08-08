import React from "react"
import "./Sidebar.css"
import Avatar from "@material-ui/core/Avatar"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Cyril Jephery</h2>
                <h4>cyriljeph@gmail.com</h4>
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
            </div>
        </div>
    )
}

export default Sidebar