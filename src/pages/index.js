import Navbar from '../lib/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">Welcome to LitBound!</h1>
      </div>
    </main>
  );
}
