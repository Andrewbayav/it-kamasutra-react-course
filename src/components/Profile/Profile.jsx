import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return <div>
        <img src='https://avatars.mds.yandex.net/get-pdb/2264533/76a92258-9d53-467d-861e-e1fd2abc17a2/s1200?webp=false'></img>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;