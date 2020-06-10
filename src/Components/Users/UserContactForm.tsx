import React from "react";
import {Field} from "redux-form";
import styles from "./userform.module.css";

let Input = ({input, meta, ...props}:any) => {

    return <div>
        <input {...input} type={props.type} {...props} />

    </div>
}

let UserContactForm = (props:any) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={styles.nameUser}>
            <b>Full name:</b>

                <Field component={Input} type='text'
                   name={'fullName'}/>
        </div>
        <div><b>About me:</b>
            <Field component={Input} type='text'
                   name={'aboutMe'}/>
        </div>

        <div className={styles.contacts}>
        {(!!props.profile.contacts) && Object.keys(props.profile.contacts).map((key) =>
            <div><b>{key}:</b>

               <Field component={Input} type='text' key={key}
                            name={`contacts.${key}`}/>

            </div>)
        }
        </div>

        <div className={styles.lookingForAJob}>
            <b>lookingForAJob:</b>
            <Field component={Input} type='checkbox'
                   name={'lookingForAJob'}/>
        </div>
        <div className={styles.lookingForAJobDescription}>
            <b>lookingForAJobDescription:</b>
            <Field component={Input} type='text'
                   name={'lookingForAJobDescription'}/>
        </div>

        <button type="submit"> Save</button>
    </form>

}
export default UserContactForm