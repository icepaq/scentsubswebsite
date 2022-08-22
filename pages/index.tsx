import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './components/header'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <div className={styles.body}>
                <div className={styles.banner}>
                    <div className={styles.bannerTextWrapper}>
                        <div className={styles.bannerTitle}>
                            Find Your Next Scent
                        </div>
                        <div className={styles.bannerSubtitle}>
                            Discover your favorite fragrance. Starting at $5 / month.
                        </div>
                        <div className={styles.bannerButtonWrapper}>
                            <Link href={"https://myaccount.scentsubs.com/getstarted/1"}>
                                <div className={styles.bannerButton} role={'button'}>
                                    Get Started
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.howItWorks}>
                    <div className={styles.title}>
                        How it works
                    </div>
                    <div className={styles.row}>
                        <div className={styles.item}>
                            <div className={styles.itemTitle}>
                                Step 1
                            </div>
                            <div className={styles.itemContent}>
                                Take a 2 minute quiz to we know what products to recommend
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemTitle}>
                                Step 2
                            </div>
                            <div className={styles.itemContent}>
                                See your recommendations and subscribe
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemTitle}>
                                Step 3
                            </div>
                            <div className={styles.itemContent}>
                                Get your monthly scents. You will also have the choice to modify your subscription
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.favoriteBrands}>
                    <div className={styles.title}>Your Favorite Brands</div>
                    <div className={styles.text}>
                        We carry all of your favorite brands and products. Don&apos;t see what you like? Let us know by sending an email
                        to products@scentsubs.com
                    </div>
                    <div className={styles.brandBanner}>
                        <Image src={'/brandbanner.png'} width={3000} height={1000} />
                        A complete list of available products can be found here
                    </div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.footerrow}>
                        <div className={styles.column}>
                            <div className={styles.columnTitle}>
                                Catalogue
                            </div>
                            <div className={styles.columnContent}>
                                <Link href={'/catalogue'}>Cologne</Link>
                            </div>
                            <div className={styles.columnContent}>
                                <Link href={'/catalogue'}>Perfume</Link>
                            </div>
                            <div className={styles.columnContent}>
                                <Link href={'/catalogue'}>Other Fragrances</Link>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.columnTitle}>
                                Scent Subs
                            </div>
                            <div className={styles.columnContent}>
                                <Link href={'/catalogue'}>About Us</Link>
                            </div>
                            <div className={styles.columnContent}>
                                <Link href={'/catalogue'}>Support</Link>
                            </div>
                            <div className={styles.columnContent}>
                                <Link href={'https://scent-subs-careers.notion.site/Scent-Subs-ae462695a456476d8987317fd9ae8955'}>Careers</Link>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.columnTitle}>
                                Stay Connected
                            </div>
                            <div className={styles.columnContent}>
                                <Link href={'/catalogue'}>Instagram</Link>
                            </div>
                            <div className={styles.columnContent}>
                                <Link href={'/catalogue'}>Twitter</Link>
                            </div>
                            <div className={styles.columnContent}>
                                <Link href={'https://scent-subs-careers.notion.site/Scent-Subs-ae462695a456476d8987317fd9ae8955'}>Newsletter</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerrow}>
                        <div className={styles.copyright}>ScentSubs 2022. Proudly Canadian.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
