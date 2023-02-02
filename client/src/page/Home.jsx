import React,{useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageHOC,CustomInput,CustomButton } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
  const {contract , walletAddress,setErrorMessage,setShowAlert,gameData} = useGlobalContext();
  const navigate = useNavigate();
  const [playerName,setPlayerName] = useState('');
  console.log(walletAddress);
  const handleClick = async ()=>{
    try{
      const playerExists = await contract.isPlayer(walletAddress);
      console.log(playerExists);
      if(!playerExists){
        await contract.registerPlayer(playerName,playerName);
        setShowAlert({
          status:true,
          type:'info',
          message: `${playerName} is being summoned!`
        })
      }
    }
    catch(error){
      setErrorMessage(error);
      // alert(error);
    }
  }
  useEffect(()=>{
    const checkForPlayerToken = async()=>{
      const playerExists = await contract.isPlayer(walletAddress);
      const playerTokenExists = await contract.isPlayerToken(walletAddress);
      console.log(
        {playerExists,playerTokenExists}
      )
      if(playerExists && playerTokenExists) navigate('/create-battle')
      
    }
    
    if(contract){
      checkForPlayerToken();
    };
    
  },[walletAddress])

  useEffect(()=>{
    if(gameData.activeBattle){
      navigate(`/battle/${gameData.activeBattle.name}`)
    }
  })
  return (
    <div className='flex flex-col'>
        <CustomInput 
        label='Name'
        placeholder='Enter Your Name'
        value={playerName}
        handleValueChange = {setPlayerName}
        />
        <CustomButton 
        title="Register"
        handleClick={handleClick}
        restStyles = "mt-6"        
        />
    </div>

   
  )
};

export default PageHOC(
  Home,
  <>Welocme to AVAX Gods <br /> A Web3 NFT Game</>,
  <>Connect Yout Wallet to satrt playing <br /> The Ultimate Web3 Battle Game</>
);