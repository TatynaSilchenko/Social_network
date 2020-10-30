import React from 'react';
import styles from './formControl.module.css'


export const  TextAria=(props:any)=>{
    const {input,meta,...restprops}=props
    const hasError=meta.touched&&meta.error
    return <div className={styles.formControl+" "+(hasError?styles.error:'')}>
        <textarea {...input} {...restprops}/>
        <div>{hasError&&<span> {meta.error}</span>}</div>
    </div>
}
export let Input = ({input, meta:{touched,error,warning}, ...props}:any) => {
    const hasError=touched&&error
    return <div className={styles.formControl+" "+(hasError?styles.error:'')}>
        <input {...input} type={props.type} {...props} />

        {hasError && <span> {error}</span>}
        {touched && warning && <span style={{color: 'orange'}}> {warning}</span>}
    </div>
};

