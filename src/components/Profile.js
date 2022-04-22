import React from "react";

const Profile = () => {
    return(
        <main className={"main"}>
            <img src="https://i0.wp.com/www.techjunkie.com/wp-content/uploads/2018/09/pexels-photo-66997.jpeg?resize=738%2C320&ssl=1&is-pending-load=1" alt="sunset" className="img-main"/>
            <div className="main-content">
                <div className="main-profile">
                    <div className="main-profile-item">
                        <img src="https://s3.cdn.teleprogramma.pro/wp-content/uploads/2022/02/0b30f228b8a44d111b08bd84724da285.jpg" alt="my" className="profile-img"/>
                    </div>
                    <div className="main-profile-info">
                        <p className="main-text-header">Denis S.</p>
                        <p className="main-text">Date of Birth: 31 May</p>
                        <p className="main-text">City: Kirov</p>
                        <p className="main-text">Education: VTGU</p>
                        <p className="main-text">Web Site: None</p>
                    </div>
                    <div className="main-posts">
                        <p className="main-post-header">My post</p>
                        <div className="main-input">
                            <textarea type="text" value="your news.." className="main-text-input"/>
                        </div>
                        <div className="main-button">
                            <button className="main-send-button">Send</button>
                        </div>
                        <div className="main-older-posts">
                            <div className="main-older-post">
                                <div className="main-older-post-marker"> </div>
                                <p className="main-older-post-text">Hey, why nobody love me?</p>
                            </div>
                            <div className="main-older-post">
                                <div className="main-older-post-marker"> </div>
                                <p className="main-older-post-text">I dont' know anything</p>
                            </div>
                            <div className="main-older-post">
                                <div className="main-older-post-marker"> </div>
                                <p className="main-older-post-text">It's my first program in jsx!</p>
                            </div>
                            <div className="main-older-post">
                                <div className="main-older-post-marker"> </div>
                                <p className="main-older-post-text">It's my first program in jsx!</p>
                            </div>
                            <div className="main-older-post">
                                <div className="main-older-post-marker"> </div>
                                <p className="main-older-post-text">It's my first program in jsx!</p>
                            </div>
                            <div className="main-older-post">
                                <div className="main-older-post-marker"> </div>
                                <p className="main-older-post-text">It's my first program in jsx!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Profile;