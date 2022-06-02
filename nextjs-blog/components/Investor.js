import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

const Investor = ({ investor, pic, tw }) => {

    const newInvestor = { investor, pic, tw }
    return (
        <div className={utilStyles.investorDiv}>
            <Image
            className={utilStyles.investorImg}
            src={newInvestor.pic} 
            width={50}
            height={50}
            />
            <p className={utilStyles.investorH2}>{newInvestor.investor}</p>
            <p className={utilStyles.investorH3}>{newInvestor.tw}</p>
        </div>
    )
}

export default Investor;