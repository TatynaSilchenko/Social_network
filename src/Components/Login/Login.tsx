import React from 'react';
import {statuses} from "../../redux/statuses";
import {Redirect} from "react-router-dom";
import styles from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {required} from "../../features/validates/validates";
import {Input} from "../../features/formControls/formControls";


let Login = (props: any) => {
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }

    let onhandleSubmit = (values: any) => {
        props.loginT(values.email, values.password, values.rememberMe, values.captchaValue);
    }

    return <div className={styles.loginPage}>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onhandleSubmit} {...props} initialValues={props.state}/>
    </div>

}


let sizePasswordWarning = (value: string) => {

    if (value && (value.length < 5)) return 'Field is too short!'
    return undefined
}

let LoginForm = ({state, login, isAuth, ...props}: any) => {
    let {status, captchaUrl} = state;

    let errorMessageBlock = status === statuses.ERROR &&
        <div className='error'>{props.error}</div>


    return <form onSubmit={props.handleSubmit}>
        <div><Field component={Input} type='text'
                    name='email' placeholder='Your e-mail' validate={[required]}/>
        </div>
        <div><Field component={Input} type='password'
                    name='password' placeholder='Your password' validate={[required]}
                    warn={sizePasswordWarning}/>
        </div>

        <div><Field component={Input} type='checkbox'
                    name='rememberMe'/>remember me
        </div>

        {captchaUrl && <>
            <div><Field component={Input} type='text'
                        name='captchaValue' placeholder='Enter captcha'/>
            </div>

            <div><img src={captchaUrl}/></div>
        </>}
        <div>
            <button type='submit' disabled={status === statuses.IN_PROGRESS}>Login
            </button>
        </div>
        <div style={{color: 'red'}}>
            {errorMessageBlock}
        </div>


    </form>
};
let LoginReduxForm = reduxForm({
    form: 'login-form'
})(LoginForm)

export default Login
