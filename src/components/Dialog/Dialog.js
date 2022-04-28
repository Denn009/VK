import React from "react";
import s from "./Dialog.module.css"
import App from "../../App";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={"/dialogs/" + props.id} className = { navData => navData.isActive ? s.active : s.link }>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
            <div className={s.message}>{props.text}</div>
    )
}


const Dialog = () => {

    let dialogData = [
        {name: "Витя", id: "1"},
        {name: "Алексей", id: "2"},
        {name: "Оксана", id: "3"},
        {name: "Денис", id: "4"},
        {name: "Олег", id: "5"},
        {name: "Света", id: "6"},
    ]

    return (
        <div className={s.wrapper}>
            <div className={s.user_names}>
                <div className={s.item_name}><DialogItem name = {dialogData[0].name} id = {dialogData[0].id}/></div>
                <div className={s.item_name}><DialogItem name = {dialogData[1].name} id = {dialogData[1].id}/></div>
                <div className={s.item_name}><DialogItem name = {dialogData[2].name} id = {dialogData[2].id}/></div>
                <div className={s.item_name}><DialogItem name = {dialogData[3].name} id = {dialogData[3].id}/></div>
                <div className={s.item_name}><DialogItem name = {dialogData[4].name} id = {dialogData[4].id}/></div>
                <div className={s.item_name}><DialogItem name = {dialogData[5].name} id = {dialogData[5].id}/></div>
            </div>
            <div className={s.messegers}>
                <div className={s.item_message}><Message text={"hi"}/></div>
                <div className={s.item_message}><Message text={"hi"}/></div>
                <div className={s.item_message}><Message text={"hi"}/></div>
                <div className={s.item_message}><Message text={"hi"}/></div>
                <div className={s.item_message}><Message text={"hi"}/></div>
                <div className={s.item_message}><Message text={"hi"}/></div>
            </div>
        </div>
    )
}

export default Dialog;