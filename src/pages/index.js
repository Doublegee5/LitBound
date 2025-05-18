'use client';
import ConnectWallet from '../components/ConnectWallet';

export default function Home() {
  const handleGetStarted = () => {
    alert('Get Started Clicked!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white max-w-2xl w-full p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to LitBound</h1>
        <p className="text-gray-600 text-lg mb-6">
          Empowering creators with Web3 and beyond. Build, connect, and grow your digital future.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition mb-6"
        >
          Get Started
        </button>

        <hr className="my-6" />

        <ConnectWallet />

        <div className="mt-10 text-sm text-gray-500">
          <p>© 2025 LitBound. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
