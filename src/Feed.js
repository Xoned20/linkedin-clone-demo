import React, { useState } from "react"
import "./Feed.css"
import "./Post"
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "./InputOption";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from "./Post";

function Feed() {
    const [posts, setPosts] = useState([]);

    const sendPost = e => {
        e.preventDefault();
        
    };


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
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
            {posts.map((post) => (
                <Post />
            ))}
            <Post 
            name="Cyril Jephery"
            description="This is a test"
            messages="WOW this worked"
            />   
        </div>
    )
}

export default Feed