import React from "react";
import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id} className = { navData => navData.isActive ? s.active : s.link }>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;