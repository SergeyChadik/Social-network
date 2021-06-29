import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../images/user-profile.png'

let Users = (props) => {
    let getUsers = () =>
    {
        if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger;
            props.setUsers(response.data.items)
        });}


        /* props.setUsers(
             [
                 {
                     id: 1,
                     photoUrl: 'https://www.meme-arsenal.com/memes/4e4e3eca35797638c567d55e62dc392e.jpg',
                     followed: false,
                     fullName: 'Sergey',
                     status: 'lok at me',
                     location: {city: "Minsk", country: 'Belarus'}
                 },
                 {
                     id: 2,
                     photoUrl: 'https://www.meme-arsenal.com/memes/4e4e3eca35797638c567d55e62dc392e.jpg',
                     followed: true,
                     fullName: 'Valery',
                     status: 'lok at me',
                     location: {city: "Mans", country: 'Russia'}
                 },
                 {
                     id: 3,
                     photoUrl: 'https://www.meme-arsenal.com/memes/4e4e3eca35797638c567d55e62dc392e.jpg',
                     followed: false,
                     fullName: 'Artem',
                     status: 'lok at me',
                     location: {city: "Min", country: 'ukr'}
                 },
             ]
         )
     }*/
    }
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => { props.unfollow(u.id)}}> unFollow</button>
                            : <button onClick={ () => { props.follow(u.id)}} >Follow</button>}

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
                        <div></div>
                    </span>
                </span>
            </div>)
        }
    </div>
}



export default Users;


