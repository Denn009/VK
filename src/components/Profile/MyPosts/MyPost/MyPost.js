import React from "react";
import s from "./MyPost.module.css"

const MyPosts = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.post}>
                <div className={s.post_marker}></div>
                <p className={s.post_text}>
                    {props.post}
                </p>
                <div className={s.likesCounter}>
                    {props.likesCount}
                </div>
            </div>
        </div>
    )
};

export default MyPosts;