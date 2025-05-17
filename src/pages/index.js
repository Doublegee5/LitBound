import Navbar from '../../lib/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold">Welcome to LitBound</h1>
      </div>
    </main>
  );
}
