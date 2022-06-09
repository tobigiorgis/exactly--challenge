import React from 'react'
import investors from '../data/investors'
import Investor from './Investor'


const InvestorList = () => {
    return (
        <div>
        <ul>
            {investors?.map((inv) => (
                <Investor {...inv} key={inv.investor}/>
            ))}
        </ul>
        </div>
    )
}

export default InvestorList;