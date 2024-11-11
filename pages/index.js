import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../components/Counter';
import Link from 'next/Link';
import Github from "../components/Github";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className={styles.title}>
                Nathan DeKeyrel welcomes <a href="https://nextjs.org" target="_blank">Next.js!</a>
            </h1>

            <Counter name={"Pablo"} mult={1} size={2} />
            <Counter name={"Pia"} mult={2} size={0.5} />

            <hr
                style={{
                    width: '80%',
                    marginTop: '1em'
                }}
            />

            <Github />

            <hr
                style={{
                    width: '80%',
                    marginTop: '1em'
                }}
            />

            <p>Checkout my <Link href="/store">Fake Store</Link></p>

        </div>
    );
}
