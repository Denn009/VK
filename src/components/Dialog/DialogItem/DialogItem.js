import React from "react";
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";
import avatar from "../../../avatar.jpg"

const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <img src={avatar} alt="avatar" className={s.avatar}/>
            <NavLink to={"/dialogs/" + props.id} className = { navData => navData.isActive ? s.active : s.link }>{props.dialog}</NavLink>
        </div>
    )
}

export default DialogItem;