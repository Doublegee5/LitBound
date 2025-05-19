import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-12">
      {/* Header Navigation */}
      <nav className="w-full max-w-5xl flex justify-end space-x-6 mb-10 text-gray-700">
        <Link href="/about" legacyBehavior>
          <a className="hover:text-blue-600">About</a>
        </Link>
        <Link href="/tools" legacyBehavior>
          <a className="hover:text-blue-600">Tools</a>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl bg-white p-8 rounded shadow text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to LitBound</h1>
        <p className="mb-8 text-gray-700 text-lg">
          Empowering creators with Web3 and beyond. Build, connect, and grow your digital future.
        </p>
        <Link href="/get-started" legacyBehavior>
          <a className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition">
            Get Started
          </a>
        </Link>

        <section className="mt-16 text-left">
          <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>
              <strong>Web3 Tools:</strong> Access decentralized tools to power your creativity in a borderless economy.
            </li>
            <li>
              <strong>Creator Network:</strong> Collaborate and grow with a community of like-minded builders and artists.
            </li>
            <li>
              <strong>Education & Growth:</strong> Learn, adapt, and grow with resources tailored for the modern digital economy.
            </li>
          </ul>
        </section>

        <footer className="mt-12 text-sm text-gray-500">
          © 2025 LitBound. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
