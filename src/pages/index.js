// pages/index.jsx

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <main className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to LitBound</h1>
        <p className="text-lg text-gray-700 mb-8">
          Empowering creators with Web3 and beyond. Build, connect, and grow your digital future.
        </p>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          onClick={() => alert('Get Started Clicked!')}
        >
          Get Started
        </button>

        <section className="mt-16 text-left space-y-10">
          <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>

          <div>
            <h3 className="text-xl font-semibold mb-1">Web3 Tools</h3>
            <p className="text-gray-600">
              Access decentralized tools to power your creativity in a borderless economy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Creator Network</h3>
            <p className="text-gray-600">
              Collaborate and grow with a community of like-minded builders and artists.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">Education & Growth</h3>
            <p className="text-gray-600">
              Learn, adapt, and grow with resources tailored for the modern digital economy!
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6 text-center text-gray-500 text-sm">
        © 2025 LitBound. All rights reserved.
      </footer>
    </div>
  )
}
