import type { NextPage } from 'next'
import styles from '../../styles/Header.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: NextPage = () => {

    const [windowRatio, setWindowRatio] = useState(0);

    const router = useRouter();

    useEffect(() => {
        setWindowRatio(window.innerWidth / window.innerHeight);
        window.addEventListener('resize', updateSize);
    }, [])

    function updateSize() {
        setWindowRatio(window.innerWidth / window.innerHeight);
    }

    const openMenu = () => {
        const menu = document.getElementsByClassName(styles.mobileheader)[0] as HTMLElement;
        menu.style.width = '60%';
        menu.style.padding = '10px 10px';
    }  

    const closeMenu = () => {
        const menu = document.getElementsByClassName(styles.mobileheader)[0] as HTMLElement;
        menu.style.width = '0';
        menu.style.padding = '10px 0px';
    }

    const logout = async () => {
        router.reload();
    }

    const deskTopHeader = 
    <>
        <div className={styles.desktopheader}>
            <div className={styles.logoheader}>
                <Image src="/logo.png" alt="logo" width={150} height={40} /> 
            </div>

            <div className={styles.menuitems}>
                <div className={styles.desktopmenuitem}><Link href="/">Home</Link></div>
                <div className={styles.desktopmenuitem}><Link href="/">Catalogue</Link></div>
                <div className={styles.desktopmenuitem}><Link href="/about">About Us</Link></div>
                <div className={styles.desktopmenuitem}><Link href="https://myaccount.scentsubs.com/manage/main">My Account</Link></div>
            </div>
        </div>
    </>

    const mobileHeader = 
    <>
        <div className={styles.menuButton} onClick={openMenu}>
            <Image src='/menu.png' alt='menu' width={20} height={20} />
        </div>
        <div className={styles.mobileheader}>
            <span className={styles.imagewrapper}>
                <Image src="/logo.png" alt="logo" width={80} height={20} />
            </span>
            <div className={styles.mobileX} onClick={closeMenu}>x</div>
            <div className={styles.mobilemenuitems}>
                <div className={styles.mobilemenuitem}><Link href="/">Home</Link></div>
                <div className={styles.mobilemenuitem}><Link href="/">Catalogue</Link></div>
                <div className={styles.mobilemenuitem}><Link href="/">About Us</Link></div>
                <div className={styles.mobilemenuitem}><Link href="https://myaccount.scentsubs.com/manage/main">My Account</Link></div>
            </div>
        </div>
    </>

    if(windowRatio == 0) {
        return <></>
    }

    return windowRatio > 1.3 ? deskTopHeader : mobileHeader;
}

export default Header