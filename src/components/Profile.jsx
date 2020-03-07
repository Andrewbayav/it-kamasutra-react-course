import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className='content'>
        <img src='https://avatars.mds.yandex.net/get-pdb/2264533/76a92258-9d53-467d-861e-e1fd2abc17a2/s1200?webp=false'></img>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                new post
            </div>
            <div className={s.content}>
                Post 1
            </div>
            <div className={s.content}>
                Post 2
            </div>
        </div>
    </div>
}

export default Profile;