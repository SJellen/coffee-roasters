import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Context } from '../context/Context'
import { useContext } from 'react'

export default function Footer() {

    const {dimmerStyle, handleTurnDimmerOffClick, showOrderSummary} = useContext(Context)

    return (
        <div className={styles.container} style={dimmerStyle} onClick={showOrderSummary ? handleTurnDimmerOffClick : null}>
          <div className={styles.greyContainer} >
            <div className={styles.leftFlexContainer}>
                <div>
                   <Image src="/assets/shared/desktop/logo-footer.svg" alt="coffee roasters logo" width="236" height="26" /> 
                </div>
                
                <nav className={styles.nav}>
                    <Link href="/">
                        <a className={styles.a}>HOME</a>
                    </Link>
                    <Link href="/about">
                        <a className={styles.a}>ABOUT US</a>
                    </Link>
                    <Link href="/subscribe">
                        <a className={styles.a}>CREATE YOUR PLAN</a>
                    </Link>
                </nav>
            </div>
            <div className={styles.rightFlexContainer}>
                <Image src="/assets/shared/desktop/icon-facebook.svg" alt="coffee roasters logo" width="24" height="24"  className={styles.svg}/>
                <Image src="/assets/shared/desktop/icon-twitter.svg" alt="coffee roasters logo" width="24" height="24"  className={styles.svg}/>
                <Image src="/assets/shared/desktop/icon-instagram.svg" alt="coffee roasters logo" width="24" height="24"  className={styles.svg}/>
            </div>
        </div>  
        </div>
        
    )
}