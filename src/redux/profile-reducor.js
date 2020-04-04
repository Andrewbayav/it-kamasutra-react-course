const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id : 1, message : 'Hi, how are you?', likesCount : 12},
        {id : 2, message : 'H!', likesCount : 12},
        {id : 3, message : 'He!', likesCount : 12},
        {id : 4, message : 'Hel!', likesCount :  12},
        {id : 5, message : 'Helly!', likesCount : 12},
        {id : 6, message : 'Hello!', likesCount : 12}],
    newPostText: ""
}


export const profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 7,
                    message: state.newPostText,
                    likesCount: 0
                }
                state.posts.push(newPost);
                debugger
                state.newPostText = '';
                //state.newPostText = action.newText;
            case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
            default:
                return state;
        }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;