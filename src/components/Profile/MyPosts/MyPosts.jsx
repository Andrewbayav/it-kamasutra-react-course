import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducor";

const MyPosts = (props) => {

    let postsElement = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        //props.addPost(newPostElement.current.value);
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref = {newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost} >Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;