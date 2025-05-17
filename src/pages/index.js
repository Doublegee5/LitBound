import Navbar from '../lib/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to LitBound</h1>
      </div>
    </main>
  );
}
