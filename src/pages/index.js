import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to LitBound</h1>
        <p className="mb-6 text-gray-700">
          Empowering creators with Web3 and beyond. Build, connect, and grow your digital future.
        </p>
        <Link href="/get-started">
          <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Get Started
          </a>
        </Link>
      </div>

      <div className="mt-12 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <div className="space-y-4 text-gray-700">
          <p><strong>Web3 Tools:</strong> Access decentralized tools to power your creativity in a borderless economy.</p>
          <p><strong>Creator Network:</strong> Collaborate and grow with a community of like-minded builders and artists.</p>
          <p><strong>Education & Growth:</strong> Learn, adapt, and grow with resources tailored for the modern digital economy.</p>
        </div>
        <p className="mt-10 text-sm text-gray-500">© 2025 LitBound. All rights reserved.</p>
      </div>
    </div>
  );
}
