import React from "react";
import s from "./MyPosts.module.css"
import MyPost from "./MyPost/MyPost";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <p className={s.post_header}>My post</p>
            <div className={s.wrapper_input}>
                <textarea placeholder="your news.." className={s.text_input}/>
            </div>
            <div className={s.wrapper_button}>
                <button className={s.send_button}>Send</button>
            </div>
            <MyPost message="it's my first program"/>
            <MyPost message="Hello, how are you?"/>
            <MyPost message="Hey, why nobody love me?"/>
        </div>
)
};

export default MyPosts;