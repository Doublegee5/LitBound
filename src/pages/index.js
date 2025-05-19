import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>LitBound</div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/tools">Tools</Link>
        </nav>
      </header>

      {/* Main content */}
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to LitBound</h1>
        <p className={styles.description}>
          Empowering creators with Web3 and beyond. Build, connect, and grow your digital future.
        </p>
        <Link href="/get-started" className={styles.btn}>
          Get Started
        </Link>

        <section className={styles.offerings}>
          <h2>What We Offer</h2>
          <ul>
            <li><strong>Web3 Tools:</strong> Access decentralized tools to power your creativity in a borderless economy.</li>
            <li><strong>Creator Network:</strong> Collaborate and grow with a community of like-minded builders and artists.</li>
            <li><strong>Education & Growth:</strong> Learn, adapt, and grow with resources tailored for the modern digital economy.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        © 2025 LitBound. All rights reserved.
      </footer>
    </div>
  );
}
