import React from "react";
import s from "./MyPosts.module.css"
import MyPost from "./MyPost/MyPost";

let postsData = [
    {post: "Hello, how are you?", id:"1"},
    {post: "Hey, why nobody love me?", id:"2"},
    {post: "it's my first program", id:"3"},
]

let postsElement = postsData.map(p => <MyPost post = {p.post} id={p.id}/>)

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
            {postsElement}
        </div>
)
};

export default MyPosts;