import React from "react"
import "./Feed.css"
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "./InputOption";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#378fe9'/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#5f9b41'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='#c37d16'/>
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#e16745'/>
                </div>
            </div>

            {/* Posts */}

        </div>
    )
}

export default Feed