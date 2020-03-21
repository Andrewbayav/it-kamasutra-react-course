import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img
                src='https://avatars.mds.yandex.net/get-pdb/2264533/76a92258-9d53-467d-861e-e1fd2abc17a2/s1200?webp=false'></img>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;