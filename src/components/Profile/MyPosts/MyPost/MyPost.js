import React from "react";
import s from "./MyPost.module.css"

const MyPosts = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.post}>
                <div className={s.post_marker}></div>
                <p className={s.post_text}>
                    {props.message}
                </p>
            </div>
        </div>
    )
};

export default MyPosts;