import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footerrow}>
                    <div className={styles.column}>
                        <div className={styles.columnTitle}>Catalogue</div>
                        <div className={styles.columnContent}>
                            <Link href={"/catalogue"}>Cologne</Link>
                        </div>
                        <div className={styles.columnContent}>
                            <Link href={"/catalogue"}>Perfume</Link>
                        </div>
                        <div className={styles.columnContent}>
                            <Link href={"/catalogue"}>Other Fragrances</Link>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.columnTitle}>Scent Subs</div>
                        <div className={styles.columnContent}>
                            <Link href={"/catalogue"}>About Us</Link>
                        </div>
                        <div className={styles.columnContent}>
                            <Link href={"/catalogue"}>Support</Link>
                        </div>
                        <div className={styles.columnContent}>
                            <Link
                                href={
                                    "https://scent-subs-careers.notion.site/Scent-Subs-ae462695a456476d8987317fd9ae8955"
                                }
                            >
                                Careers
                            </Link>
                        </div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.columnTitle}>Stay Connected</div>
                        <div className={styles.columnContent}>
                            <Link href={"/catalogue"}>Instagram</Link>
                        </div>
                        <div className={styles.columnContent}>
                            <Link href={"/catalogue"}>Twitter</Link>
                        </div>
                        <div className={styles.columnContent}>
                            <Link
                                href={
                                    "https://scent-subs-careers.notion.site/Scent-Subs-ae462695a456476d8987317fd9ae8955"
                                }
                            >
                                Newsletter
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.footerrow}>
                    <div className={styles.copyright}>
                        ScentSubs 2022. Proudly Canadian.
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
