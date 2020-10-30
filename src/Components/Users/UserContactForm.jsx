import React from "react";
import {Field, reduxForm} from "redux-form";
import styles from "../Profile/ProfileInfo/ProfileInfo.module.css"

let Input = ({input, meta, ...props}) => {

    return <div>
        <input {...input} type={props.type} {...props} />

    </div>
}

const ProfileDataForm = ({profile, error, ...props}) => {

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

        <div>
            <b>Contacts</b>:
            {profile && Object.keys(profile.contacts).map((key) =>
                <div key={key} className={styles.contact}><b>{key}:</b>

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
            <b>My professional skills:</b>
            <Field component={Input} type='text'
                   name={'lookingForAJobDescription'}/>
        </div>

        {error && <div className={styles.summaryError}>
            {error}
        </div>}
        <button type="submit"> Save</button>
    </form>

}
export default reduxForm({
    form: 'user-form'
})(ProfileDataForm)
