import React, { useEffect, useImperativeHandle } from 'react';
import styles from './Users.module.css'
let Users = (props) => {
    if (props.users.length === 0) {    
    props.setUsers([
        {
            id: 1, avatarUrl: 'https://s1.vcdn.biz/static/f/2313887311/image.jpg',
            followed: false, fullname: 'Arthur K.', status: 'Hello, Im new here',
            location: { city: 'London', country: 'UK' }
        },
        {
            id: 2, avatarUrl: 'https://memepedia.ru/wp-content/uploads/2018/06/unnamed.jpg',
            followed: true, fullname: 'Misha D.', status: 'Finally Im senior!', location: { city: 'Kyiv', country: 'Ukraine' }
        },
        {
            id: 3, avatarUrl: 'https://static.news.ru/photo/850a0240-9f89-11ea-88ba-fa163e074e61_660.jpg',
            followed: false, fullname: 'Dmytro G.', status: 'Obama?', location: { city: 'Kyiv', country: 'Ukraine' }
        },
        {
            id: 4, avatarUrl: 'https://shikimori.one/system/characters/original/6194.jpg',
            followed: true, fullname: 'Miamoto M.', status: 'There is only one path of true warior', location: { city: 'Osaka', country: 'Japan' }
        }
    ]
    ) }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatarUrl} className={styles.avatar} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
    </div>;
}
export default Users;