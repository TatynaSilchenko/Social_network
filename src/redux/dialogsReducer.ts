const SEND_MESSAGE = 'SN/DIALOGSPAGE/ADD-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, dialogName: 'Max'},
        {id: 2, dialogName: 'Anna'},
        {id: 3, dialogName: 'Dmitri'},
        {id: 4, dialogName: 'Vlad'},
        {id: 5, dialogName: 'Tany'},
        {id: 6, dialogName: 'Ira'}
    ],
    messages: [
        {id: 1, message: 'Hi, dear friend!'},
        {id: 2, message: 'It is my first project'}
    ],
}
const dialogsReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessage;
            return {
                ...state,
                messages: [...state.messages, {id: 3, message: body}],

            };
        }
        default:
            return state
    }
}
export const sendMessage = (newMessage:string) => ({type: SEND_MESSAGE,newMessage});
export default dialogsReducer;