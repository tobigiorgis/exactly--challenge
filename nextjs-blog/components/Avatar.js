import React from 'react'
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

const Avatar = ({ name, description, image, twitter }) => {
    const goToTwitter = () => {
        window.open(`www.twitter.com/${twitter}`)
    }
    const newAvatar = { name, description, image }
    return (
        <div onClick={goToTwitter} className={utilStyles.avatarDiv}>
            <Image
            className={utilStyles.avatarImg}
            src={newAvatar.image} 
            width={200}
            height={200}
            />
            <p className={utilStyles.avatarH2}>{newAvatar.name}</p>
            <p className={utilStyles.avatarH3}>{newAvatar.description}</p>
        </div>
    )
}

export default Avatar
