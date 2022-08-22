import Header from './components/header'
import styles from '../styles/Support.module.css'
import Footer from './components/footer';

const Support = () => {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <div className={styles.title}>
                    Support
                </div>
                <div className={styles.text}>
                    If you have any questions, feel free to reach us at help@scentsubs.com or by using the form below.
                </div>
                <div className={styles.form}>
                    <div className={styles.formTitle}>
                        Contact Us
                    </div>
                    <div className={styles.row}>
                        <div className={styles.flexWrapper}>
                            <div className={styles.formItem}>
                                <input type={'text'} placeholder={'Name'} className={styles.input}/>
                            </div>
                            <div className={styles.formItem}>
                                <input type={'text'} placeholder={'Email'} className={styles.input}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <textarea placeholder={'Message'} className={styles.textarea}/>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.formButton} role={'button'}>
                            Send
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Support;