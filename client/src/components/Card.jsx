import React from 'react'
import Tilt from 'react-parallax-tilt'

import styles from '../styles'
import {allCards} from '../assets'

const generateRandomCardImage = () => allCards[Math.floor(Math.random() * (allCards.length -1))];

const img1 = generateRandomCardImage();
const img2 = generateRandomCardImage();
console.log(img1,img2);

const Card = ({card,title,resStyles,cardRef,playerTwo}) => {
  console.log(playerTwo);
  return (
    <Tilt>
    <div ref={cardRef} className="relative sm:w-[250px] w-[250px] sm:h-[250px] h-[250px] z-0 transition-all undefined ">
      <img src={ playerTwo ? img2 : img1} alt="card" className={styles.cardImg} />
      <div className={`${styles.cardPointContainer} sm:left-[25.2%] top-[55%] left-[20%] ${styles.flexCenter}`}>
        <p className={`${styles.cardPoint} text-yellow-400`}>
            {card.att}
        </p>
      </div>
      <div className={`${styles.cardPointContainer} sm:right-[20.2%] top-[55%] right-[15%] ${styles.flexCenter}`}>
        <p className={`${styles.cardPoint} text-red-700`}>
            {card.def}
        </p>
      </div>
      <div className={`${styles.cardTextContainer} ${styles.flexCenter}`}>
        <p className={styles.cardText}>{title}</p>

      </div>
    </div>
    </Tilt>
  )
}

export default Card