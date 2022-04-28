import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={s.main}>
            <img
                src="https://i0.wp.com/www.techjunkie.com/wp-content/uploads/2018/09/pexels-photo-66997.jpeg?resize=738%2C320&ssl=1&is-pending-load=1"
                alt="sunset" className={s.img_main}/>
            <div className={s.main_profile}>
                <div className={s.main_profile_item}>
                    <img
                        src="https://s3.cdn.teleprogramma.pro/wp-content/uploads/2022/02/0b30f228b8a44d111b08bd84724da285.jpg"
                        alt="my" className={s.profile_img}/>
                </div>
                <div className={s.main_profile_item}>
                    <p className={s.main_text_header}>Denis S.</p>
                    <p className={s.main_text}>Date of Birth: 31 May</p>
                    <p className={s.main_text}>City: Kirov</p>
                    <p className={s.main_text}>Education: VTGU</p>
                    <p className={s.main_text}>Web Site: None</p>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;