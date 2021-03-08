import Head from 'next/head'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push('/diff');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello, Fam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main onClick={handleClick} className={styles.main}>
        <h1 className={styles.title}>
          Hello, Fam!
        </h1>
      </main>
    </div>
  )
}
