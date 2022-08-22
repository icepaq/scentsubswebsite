import styles from '../styles/Support.module.css'
import Header from './components/header'
import Image from 'next/image'
import Link from 'next/link'
import Footer from './components/footer'

const About = () => {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    About Us
                </div>
                <div className={styles.text}>
                    Scent subs was created in 2022 by Anton, a student from Ottawa, Canada.
                    Fragrances are a big part of one's appearance. However, many people are unsure where 
                    to start. Scent subs was created to help you explore different fragrances without
                    having to worry about upfront costs.

                    While based in Canada, we ship internationally and offer free shipping within North America.
                </div>
                <div className={styles.title}>
                    Social Media
                </div>
                <div className={styles.imagerow}>
                    <a href="https://www.instagram.com/scentsubs_/" target="_blank">
                        <span><Image src={'/ig.png'} height={'30px'} width={'30px'} /></span>
                    </a>
                    <a href="https://www.twitter.com/scentsubs/" target="_blank">
                        <span><Image src={'/twitter.png'} height={'30px'} width={'30px'} /></span>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About