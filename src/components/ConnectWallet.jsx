import { useRef } from 'react';

export default function Home() {
  const offerRef = useRef(null);

  const handleScroll = () => {
    offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-lg shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to LitBound</h1>
        <p className="text-lg mb-6">
          Empowering creators with Web3 and beyond. Build, connect, and grow your digital future.
        </p>
        <button
          onClick={handleScroll}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </button>
      </section>

      {/* What We Offer Section */}
      <section
        ref={offerRef}
        className="max-w-3xl mx-auto my-16 p-8 bg-gray-50 rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-8">What We Offer</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium">Web3 Tools</h3>
            <p className="text-gray-600">
              Access decentralized tools to power your creativity in a borderless economy.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Creator Network</h3>
            <p className="text-gray-600">
              Collaborate and grow with a community of like-minded builders and artists.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Education & Growth</h3>
            <p className="text-gray-600">
              Learn, adapt, and grow with resources tailored for the modern digital economy!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4">
        © 2025 LitBound. All rights reserved.
      </footer>
    </div>
  );
}
