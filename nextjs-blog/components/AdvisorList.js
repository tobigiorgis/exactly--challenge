import React from 'react'
import advisors from '../data/advisors'
import Advisor from './Advisor'

const AdvisorList = () => {
    return (
        <div>
        <ul>
            {advisors?.map((adv) => (
                <Advisor {...adv} key={adv.advisor}/>
            ))}
        </ul>
        </div>
    )
}

export default AdvisorList;