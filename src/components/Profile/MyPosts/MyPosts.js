import React from "react";
import s from "./MyPosts.module.css";
import MyPost from "./MyPost/MyPost";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <MyPost post = {p.post} id={p.id} likesCount = {p.likesCount}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
    }


    return (
        <div className={s.posts}>
            <p className={s.post_header}>My post</p>
            <div className={s.wrapper_input}>
                <textarea ref={newPostElement} placeholder="your news.." className={s.text_input}/>
            </div>
            <div className={s.wrapper_button}>
                <button onClick={addPost} className={s.send_button}>Send</button>
            </div>
            {postsElement}
        </div>
)
};

export default MyPosts;