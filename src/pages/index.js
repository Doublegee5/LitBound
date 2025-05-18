export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-indigo-600">LitBound</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">Features</a>
          <a href="#" className="hover:text-indigo-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 bg-gradient-to-br from-indigo-100 to-purple-100">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to LitBound</h2>
        <p className="max-w-xl text-lg text-gray-700 mb-6">Empowering creators with Web3 and beyond. Build, connect, and grow your digital future.</p>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Get Started</button>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Why LitBound?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Decentralized Access</h4>
              <p>Secure and open for everyone, powered by blockchain.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Creative Ownership</h4>
              <p>Keep full control of your content and its value.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-2">Built for Growth</h4>
              <p>Scalable, responsive, and easy to expand as your community grows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 text-gray-600">
        &copy; {new Date().getFullYear()} LitBound. All rights reserved.
      </footer>
    </div>
  );
}