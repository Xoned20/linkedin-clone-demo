import React, { useEffect, useState } from "react"
import "./Feed.css"
import "./Post"
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "./InputOption";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from "./Post";
import { db } from "./firebase";
import firebase from 'firebase/compat/app';

function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
                }))
            )
        );
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection("posts").add({
            name: "Cyril Jephery",
            description: "this is a test",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    };


    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
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
            {posts.map(({ id, data: {name, description, message,
            photoUrl }}) => (
                <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed