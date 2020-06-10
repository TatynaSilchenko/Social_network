import React, {useEffect, useState} from "react";

interface IProps {
    status: string,
    updateUserStatus: Function
}

const ProfileStatusHook: React.FC<IProps> = React.memo((props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const activateEditeMode = () => {
        setEditMode(true);
    };

    const deActivateEditeMode = (e: any) => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value);
    };
    useEffect(() => {
            setStatus(props.status);
        }, [props.status]
    );
    return <div>
        {(!editMode) && <div>
                <span className="no_current_info"
                      onDoubleClick={activateEditeMode}>
                    {props.status || 'No status'}
                 </span>
        </div>}
        {(editMode) && <div>
            <input autoFocus={true} onBlur={deActivateEditeMode}
                   type="text" value={status} onChange={onStatusChange}
            />
        </div>}
    </div>


});
export default ProfileStatusHook;
