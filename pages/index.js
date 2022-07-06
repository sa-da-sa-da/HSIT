import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title> 宝藏在线资源库 </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="\"> T M </a>
                </h1>

                <p className={styles.description}>
                    宝藏在线资源库{' '}
                    <code className={styles.code}>在线预览版</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://moodle.serverlessframe.com/"
                        className={styles.card}
                    >
                        <h2>Python趣味编程入门</h2>
                        <p>Python趣味编程入门实践</p>
                    </a>

                    <a href="http://mk.serverlessframe.com/"
                        className={styles.card}
                    >
                        <h2>Markdown 教程</h2>
                        <p>Markdown 学习知识手册</p>
                    </a>

                    <a
                        href="https://bz.sakaay.com/gz-hk-xj-B1/"
                        className={styles.card}
                    >
                        <h2>数据与计算</h2>
                        <p>沪科版-高中信技-必修1</p>
                    </a>

                    <a
                        href="https://bz.sakaay.com/gz-hk-xj-B2/"
                        className={styles.card}
                    >
                        <h2>信息系统与社会</h2>
                        <p>沪科版-高中信技-必修2</p>
                    </a>
                    <a
                        href="https://bz.sakaay.com/gz-hk-xj-X1/"
                        className={styles.card}
                    >
                        <h2>数据与数据结构</h2>
                        <p>沪科版-高中信技-选修1</p>
                    </a>
                    <a
                        href="https://bz.sakaay.com/gz-hk-xj-X2/"
                        className={styles.card}
                    >
                        <h2>网络基础</h2>
                        <p>沪科版-高中信技-选修2</p>
                    </a>
                    <a
                        href="https://bz.sakaay.com/gz-hk-xj-X3/"
                        className={styles.card}
                    >
                        <h2>数据管理与分析</h2>
                        <p>沪科版-高中信技-选修3</p>
                    </a>
                    <a
                        href="https://bz.sakaay.com/gz-hk-xj-X4/"
                        className={styles.card}      
                    >
                        <h2>人工智能初步</h2>
                        <p>沪科版-高中信技-选修4</p>
                    </a>
                    <a
                        href="https://bz.sakaay.com/gz-hk-xj-X5/"
                        className={styles.card}
                    >
                        <h2>三维设计与创意</h2>
                        <p>沪科版-高中信技-选修5</p>
                    </a>
                    <a
                        href="https://bz.sakaay.com/gz-hk-xj-X6/"
                        className={styles.card}
                    >
                        <h2>开源硬件项目设计</h2>
                        <p>沪科版-高中信技-选修6</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </div>
    )
}
