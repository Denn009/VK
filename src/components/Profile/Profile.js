import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {

    return(
        <main className={s.main}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </main>
)
};

export default Profile;