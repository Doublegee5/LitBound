import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li>
          <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/tools" className="hover:text-blue-600">
            Tools
          </Link>
        </li>
      </ul>
    </nav>
  );
}
