import React from 'react';
import s from './../Dialogs.module.css';
import PropTypes from 'prop-types';

const Message = (props:any) => {
    return (
        <div className={s.message}>
            <div>
            {props.message}
            </div>

        </div>
    )
}

Message.propTypes={
    message: PropTypes.string,
}
export default Message;