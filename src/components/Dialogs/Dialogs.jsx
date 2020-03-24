import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElements = props.messages
        .map(message => <Message message={message.message}/>);

    let newMessage = React.createRef();
    let sendButton = () => {
        alert(newMessage.current.value);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div><textarea ref={newMessage}></textarea>
                <button onClick={sendButton}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs;