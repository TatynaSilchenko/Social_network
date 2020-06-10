import sidebarReducer from "./sidebarReducer";
import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
/*

const store = {
    _state: {
        profilePage: {
            profile: [
                {id: 1, name: 'Tatyana', address: 'Minsk', dob: '19 november'}

            ],
            posts: [
                {id: 1, message: 'Good night', likeCount: 123},
                {id: 2, message: 'This good idea', likeCount: 12},
                {id: 3, message: 'Second post', likeCount: 1},
                {id: 4, message: 'This my first post', likeCount: 118}
            ],
            newPostText: ' '
        },
        dialogsPage: {
            dialogs: [
                {id: 1, dialogName: 'Max'},
                {id: 2, dialogName: 'Anna'},
                {id: 3, dialogName: 'Dmitry'},
                {id: 4, dialogName: 'Vlad'},
                {id: 5, dialogName: 'Tany'},
                {id: 6, dialogName: 'Ira'}
            ],
            messages: [
                {id: 1, message: 'Hi, dear friend!'},
                {id: 2, message: 'It is my first project'}
            ],
            newTextMessage: ' '

        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Irina',
                    ava: 'http://s.gama-gama.ru/userupload/138/2c4bb3089f7905628b272dc1b855e83c.jpg'
                },
                {id: 2, name: 'Nata', ava: 'https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg'},
                {id: 3, name: 'Stas', ava: 'https://pixelbox.ru/wp-content/uploads/2018/02/spiderman_steam_avatar.jpg'}
            ]
        }
    },
    getState() {
        return this._state;
    },

    _stateChanged() {
    },

    subscribe(someFunction:any) {
        this._stateChanged = someFunction;
    },

  /!*  dispatch(action:any) {
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar=sidebarReducer(this._state.sidebar, action);
        this._stateChanged(this._state);

        // switch (action.type) {
        //     case ADD_POST :
        //         let newPost = {
        //             id: 5,
        //             message: this._state.profilePage.newPostText,
        //             likeCount: 0
        //         };
        //         this._state.profilePage.posts.unshift(newPost);
        //         this._state.profilePage.newPostText = '';
        //         this._stateChanged();
        //         break;
        //
        //     case ADD_MESSAGE:
        //         let newMessage = {
        //             id: 3,
        //             message: this._state.dialogsPage.newTextMessage
        //         };
        //         this._state.dialogsPage.messages.push(newMessage);
        //         this._state.dialogsPage.newTextMessage = '';
        //         this._stateChanged();
        //         break;
        //
        //     case UPDATE_NEW_POST_TEXT:
        //         this._state.profilePage.newPostText = action.newText;
        //         this._stateChanged();
        //         break;
        //     case 'UPDATE-DIALOG-MESSAGE':
        //         this._state.dialogsPage.newTextMessage = action.newText;
        //
        //         this._stateChanged();
        //         break;
        //     default:
        //         break;
        //
        //
        // }
    }*!/
};

export default store;*/
