import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useGlobalContext} from "../context"
import {logo,heroImg} from '../assets';
import {CustomButton} from '../components'
import Alert from './Alert';
import styles from "../styles";
const PageHOC = (Component,title,description) =>()=> {
    const navigate = useNavigate();
    const {showAlert,updateCurrentWalletAddress} = useGlobalContext();
    const connectWallet = async()=>{
        updateCurrentWalletAddress();
    }
  return (
    <div className={styles.hocContainer}>
        {showAlert?.status && <Alert type={showAlert.type} message={showAlert.message} />}
        <div className={styles.hocContentBox}>
            <img src={logo} alt='logo' className={styles.hocLogo} onClick={()=>navigate('/')} />
            <div className={styles.hocBodyWrapper}>
                <div className='flex flex-row w-full'>
                    <h1 className={`flex ${styles.headText} head-text`}>{title}</h1>
                </div>
                <p className={`${styles.normalText} my-10`}>{description}</p>

                <Component />

            </div>
            <p className={styles.footerText}>Made With love</p>
        </div>
        <div className='flex flex-1 '>
            <img src={heroImg} alt="hero-img" className='w-full xl:full object-cover' />
        </div>
        <CustomButton 
        title="Connect"
        handleClick={connectWallet}
        restStyles = "mt-6 absolute right-10"        
        />
    </div>
  )
}

export default PageHOC