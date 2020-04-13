const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    // stateCopy.dialogs = {...state.dialogs};
    // stateCopy.messages = {...state.messages};
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy.messages = [...state.messages, {id: 7, message: body}];
            stateCopy.newMessageBody = '';
            return stateCopy;
        default:
            return stateCopy;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;