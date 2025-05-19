import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">LitBound</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/wallet">Wallet</Link>
      </nav>
    </header>
  );
}
