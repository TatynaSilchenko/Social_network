import React, {Component} from "react";

interface IState {
    editMode: boolean;
    status: string,
    isOwner:boolean
}

interface IProps {
    profile: any,
    status: string,
    updateUserStatus:Function,
    isAuth:Function,
    userInfo:any
}

class ProfileStatus extends Component<IProps, IState> {
    state: any = {
        editMode: false,
        status:this.props.status,
        isOwner:false
    };

    activateEditeMode =()=>  {
        this.setState({
            editMode: true
        });
    }
    deActivateEditeMode =(e:any)=>  {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    };

    onStatusChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status: e.currentTarget.value
            }
        )

    }
    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>): void {
        if (prevProps.status!==this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return <div>
            {(!this.state.editMode)&& <div>
                <span className="no_current_info"
                           onDoubleClick={this.activateEditeMode}>
                    {this.props.status||'No status'}
                 </span>
                </div>}
            {/*{(this.state.isOwner)&&(this.state.editMode)&& <div>*/}
            {(this.state.editMode)&& <div>
                    <input  autoFocus={true} onBlur={this.deActivateEditeMode}
                        type="text" value={this.state.status} onChange={this.onStatusChange}
                           />
                </div>}
        </div>

    }
}

export default ProfileStatus
