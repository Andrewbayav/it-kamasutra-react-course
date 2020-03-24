let state = {
    profilePage: {
        postData: [
            {id : 1, message : 'Hi, how are you?', likesCount : 12},
            {id : 2, message : 'H!', likesCount : 12},
            {id : 3, message : 'He!', likesCount : 12},
            {id : 4, message : 'Hel!', likesCount :  12},
            {id : 5, message : 'Helly!', likesCount : 12},
            {id : 6, message : 'Hello!', likesCount : 12},

        ]
    },
    messagesPage: {
        messagesData: [{id: 1, name: 'Dimych'},
            {id: 2, message: 'Hi!'},
            {id: 3, message: 'How?'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'}
        ],
        dialogsData: [{id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Olga'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Ksusha'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 7,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost);
}

export default state;

// let postData = [
//     {id : 1, message : 'Hi, how are you?', likesCount : 12},
//     {id : 2, message : 'H!', likesCount : 12},
//     {id : 3, message : 'He!', likesCount : 12},
//     {id : 4, message : 'Hel!', likesCount :  12},
//     {id : 5, message : 'Helly!', likesCount : 12},
//     {id : 5, message : 'Hello!', likesCount : 12},
//
// ];
//
// let dialogsData = [{id: 1, name: 'Dimych'},
//     {id: 2, name: 'Andrew'},
//     {id: 3, name: 'Sveta'},
//     {id: 4, name: 'Olga'},
//     {id: 5, name: 'Victor'},
//     {id: 6, name: 'Ksusha'}]
//
// let messagesData = [{id: 1, name: 'Dimych'},
//     {id: 2, message: 'Hi!'},
//     {id: 3, message: 'How?'},
//     {id: 4, message: 'Yo'},
//     {id: 5, message: 'Yo'},
//     {id: 6, message: 'Yo'}]
