import React from "react";
import s from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";

const Dialog = () => {

    let dialogData = [
        {name: "Витя", id: "1"},
        {name: "Алексей", id: "2"},
        {name: "Оксана", id: "3"},
        {name: "Денис", id: "4"},
        {name: "Олег", id: "5"},
        {name: "Света", id: "6"},
    ]

    let messagesData = [
        {message: "hdddi", id: "1"},
        {message: "hello", id: "2"},
        {message: "What the F..", id: "3"},
        {message: "ololo", id: "4"},
        {message: "Oy, sheet", id: "5"},
    ]

    let dialogsElement = dialogData.map(d => <DialogItem name = {d.name} id = {d.id}/>)
    let messagesElement = messagesData.map(m => <Message message = {m.message} id ={m.id}/>)

    return (
        <div className={s.wrapper}>
            <div className={s.user_names}>
                {dialogsElement}
            </div>
            <div className={s.messegers}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialog;