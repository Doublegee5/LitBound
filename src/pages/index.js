// pages/index.js

export default function Home() {
  return (
    <div style={{
      maxWidth: '600px',
      margin: '3rem auto',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h1>Welcome to LitBound</h1>
      <p>Empowering creators with Web3 and beyond. Build, connect, and grow your digital future.</p>
      <button
        style={{
          marginTop: '1.5rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={() => alert('Get Started Clicked!')}
      >
        Get Started
      </button>
    </div>
  )
}
