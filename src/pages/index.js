import Head from 'next/head';
import ConnectWallet from '../components/ConnectWallet';

export default function Home() {
  return (
    <div>
      <Head>
        <title>LitBound</title>
      </Head>
      
      <header>
        <nav>
          <span>Home</span>
          <span>Features</span>
          <span>Contact</span>
        </nav>
      </header>

      <main>
        <h1>Welcome to LitBound</h1>
        <p>Empowering creators with Web3 and beyond. Build, connect, and grow your digital future.</p>

        {/* Web3 Connect Button */}
        <ConnectWallet />

        <section>
          <h2>Why LitBound?</h2>
          <ul>
            <li><strong>Decentralized Access</strong> — Secure and open for everyone, powered by blockchain.</li>
            <li><strong>Creative Ownership</strong> — Keep full control of your content and its value.</li>
            <li><strong>Built for Growth</strong> — Scalable, responsive, and easy to expand as your community grows.</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2025 LitBound. All rights reserved.</p>
      </footer>
    </div>
  );
}
