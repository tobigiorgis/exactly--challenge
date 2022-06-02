import React from 'react'
import data from '../data/data'
import Avatar from './Avatar'

const AvatarList = () => {
    return (
        <div>
        <ul>
            {data?.map((avatar) => (
                <Avatar {...avatar} key={avatar.name}/>
            ))}
        </ul>
        </div>
    )
}

export default AvatarList
