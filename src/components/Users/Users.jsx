import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios';
import userPhoto from './../../assets/images/noava.jpg';

let Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
            props.setUsers(responce.data.items);
        });

        // props.setUsers([
        //     {id : 1, photoUrl: 'https://3.bp.blogspot.com/-OSPmxXFlBaY/WgzHQjyRF9I/AAAAAAAALCE/DD_uqKXItDcusOWZKe6pu3c2dyD-N376QCLcBGAs/s320/138.jpg', followed: false, fullName : 'Dmitry', status : 'I am the boss', location: {city: 'Moscow', country: 'Russia'}},
        //     {id : 2, photoUrl: 'https://3.bp.blogspot.com/-OSPmxXFlBaY/WgzHQjyRF9I/AAAAAAAALCE/DD_uqKXItDcusOWZKe6pu3c2dyD-N376QCLcBGAs/s320/138.jpg', followed: true, fullName : 'Alex', status : 'I am the boss2', location: {city: 'StP', country: 'Russia'}},
        //     {id : 3, photoUrl: 'https://3.bp.blogspot.com/-OSPmxXFlBaY/WgzHQjyRF9I/AAAAAAAALCE/DD_uqKXItDcusOWZKe6pu3c2dyD-N376QCLcBGAs/s320/138.jpg', followed: false, fullName : 'Vasya', status : 'I am the boss3', location: {city: 'Kazan', country: 'Russia'}}
        // ]);
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>
}

export default Users;