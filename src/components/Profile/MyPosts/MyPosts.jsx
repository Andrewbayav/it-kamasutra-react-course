import React from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElement = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>
}

export default MyPosts;