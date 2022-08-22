import styles from '../styles/Support.module.css'
import Header from './components/header'


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
            </div>
        </>
    )
}

export default About