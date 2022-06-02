import React from 'react'
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

const Advisor = ({ advisor, job, imagen, type }) => {

    const newAdvisor = { advisor, job, imagen, type }
    return (
        <div className={utilStyles.advisorDiv}>
            <Image
            className={utilStyles.advisorImg}
            src={newAdvisor.imagen} 
            width={100}
            height={70}
            />
            <div className={utilStyles.advisorDiv2}>
                <p className={utilStyles.advisorH2}>{newAdvisor.advisor}</p>
                <p className={utilStyles.advisorH3}>{newAdvisor.type}</p>
            </div>
            <div className={utilStyles.advisorDiv3}>
                <p className={utilStyles.advisorH4}>{newAdvisor.job}</p>
            </div>
        </div>
    )
}

export default Advisor;