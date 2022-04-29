import React from "react";
import s from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";

const Dialog = (props) => {



    let dialogsElement = props.dialog.map(d => <DialogItem dialog = {d.dialog} id = {d.id}/>)
    let messagesElement = props.message.map(m => <Message message = {m.message} id ={m.id}/>)

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