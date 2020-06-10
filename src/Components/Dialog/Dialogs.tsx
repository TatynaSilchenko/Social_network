import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import  {Field,reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../features/validates/validates";
import {TextAria} from "../../features/formControls/formControls";

const maxLength=maxLengthCreator(50)

const Dialogs = (props: any) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map((d: any) =>
        <DialogItem id={d.id} name={d.dialogName} key={d.id}/>);

    let messagesElements = state.messages.map((m: any) =>
        <Message key={m.id} message={m.message}/>);

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessage);
        values.newMessage=''
    };

    return <div className={s.dialogs}>

        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>

    </div>

}
const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field component={TextAria}
                       name={'newMessage'}
                       placeholder='enter your message'
                       className={s.newMessage}
                validate={[required,maxLength]}/>
            </div>
            <div className={s.addMessageBtn}>
                <button type='submit'> Send</button>
            </div>

        </form>
    )
}
const AddMessageReduxForm=reduxForm({
    form:'dialog'
    }
)(AddMessageForm)

export default Dialogs;