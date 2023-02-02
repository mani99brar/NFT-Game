import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from './CustomButton'
import { useGlobalContext } from '../context'
import { player01,player02 } from '../assets'
import styles from '../styles'
const GameLoad = () => {
    const {walletAddress} = useGlobalContext();
    const navigate = useNavigate();
  return (
    <div className={`${styles.flexBetween} ${styles.gameLoadContainer} p-20`}>
        <div className={styles.gameLoadBtnBox}>
            <CustomButton 
            title="Choose BattleGround"
            handleClick={()=> navigate('/battleground')}
            restStyles="mt-6"
            />
        </div>
        <h1 className={`${styles.headText} text-center`}>
                Waiting for a worthy opponent....
            </h1>
            <p className={styles.gameLoadText}>
                Protip: While you're waiting, choose your preferred playground
            </p>
          
       
            
            <div className={styles.gameLoadPlayersBox}>
                <div className={`${styles.flexCenter} flex-col`}>
                    <img src={player01} className={styles.gameLoadPlayerImg} alt="" />
                    <p className={styles.gameLoadPlayerText}>
                    {walletAddress.slice(0,30)}
                </p>
                </div>
                

           
            <h2 className={styles.gameLoadVS}>
                VS
            </h2>
            
                <div className={`${styles.flexCenter} flex-col`}>
                    <img src={player02} className={styles.gameLoadPlayerImg} alt="" />
                    <p className={styles.gameLoadPlayerText}>
                    ?????????????
                </p>
                </div>
                

            </div>
        </div>
    
  )
}

export default GameLoad