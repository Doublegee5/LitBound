import WalletConnectButton from '../src/components/WalletConnectButton';

export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Welcome to LitBound</h1>
      <p style={{ maxWidth: 600, textAlign: 'center', marginBottom: '2rem' }}>
        Empowering creators with Web3 and beyond. Build, connect, and grow your digital future.
      </p>
      
      {/* Wallet connect button */}
      <WalletConnectButton />

      {/* Footer */}
      <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#666' }}>
        © 2025 LitBound. All rights reserved.
      </footer>
    </main>
  );
}
