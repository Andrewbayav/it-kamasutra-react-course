import profileReducer from "./profile-reducor";
import dialogsReducer from "./dialogs-reducor";
import sidebarReducer from "./sidebar-reducor";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id : 1, message : 'Hi, how are you?', likesCount : 12},
                {id : 2, message : 'H!', likesCount : 12},
                {id : 3, message : 'He!', likesCount : 12},
                {id : 4, message : 'Hel!', likesCount :  12},
                {id : 5, message : 'Helly!', likesCount : 12},
                {id : 6, message : 'Hello!', likesCount : 12},],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Olga'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Ksusha'}
            ],
            messages: [
                {id: 1, message: 'heyJey'},
                {id: 2, message: 'Hi!'},
                {id: 3, message: 'How?'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        sidebar:{}
    },
    _callSubscriber(store) {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState () {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

window.state = store._state;
export default store;
