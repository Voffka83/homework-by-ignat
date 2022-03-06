import React from 'react'
import m from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessagePropsType) {
    return (
        <div className={m.messageBox}>
            <div className={m.ava}>
                <img src={props.avatar} alt={"Foto"}/>
            </div>

            <div className={m.dialog}>

                <div className={m.dialogInf}>
                    <h2>{props.name}</h2>
                    <p>{props.message}</p>
                </div>

                <div className={m.timeWindow}>{props.time}</div>

            </div>


        </div>
    )
}

export default Message
