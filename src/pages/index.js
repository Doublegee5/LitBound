import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>LitBound</title>
        <meta name="description" content="Empowering creators with Web3 and beyond." />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">LitBound</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Features</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">Welcome to LitBound</h2>
        <p className="text-lg mb-6 text-gray-700">
          Empowering creators with Web3 and beyond. Build, connect, and grow your digital future.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</button>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <h3 className="text-2xl font-bold text-center mb-12">Why LitBound?</h3>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h4 className="text-xl font-semibold mb-2">Decentralized Access</h4>
            <p className="text-gray-600">Secure and open for everyone, powered by blockchain.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Creative Ownership</h4>
            <p className="text-gray-600">Keep full control of your content and its value.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Built for Growth</h4>
            <p className="text-gray-600">Scalable, responsive, and easy to expand as your community grows.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900 text-white">
        © 2025 LitBound. All rights reserved.
      </footer>
    </div>
  );
}
