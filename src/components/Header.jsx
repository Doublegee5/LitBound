// src/components/Header.jsx

import Link from 'next/link';
import ConnectWallet from './ConnectWallet'; // import your wallet connect component here

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Brand */}
        <Link href="/">
          <a className="text-xl font-bold text-blue-600 hover:text-blue-800">LitBound</a>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <Link href="/">
              <a className="hover:text-blue-600">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="hover:text-blue-600">About</a>
            </Link>
          </li>
          <li>
            <Link href="/tools">
              <a className="hover:text-blue-600">Tools</a>
            </Link>
          </li>
          <li>
            <Link href="/network">
              <a className="hover:text-blue-600">Creator Network</a>
            </Link>
          </li>
          <li>
            <Link href="/education">
              <a className="hover:text-blue-600">Education</a>
            </Link>
          </li>
        </ul>

        {/* Wallet Connect Button */}
        <div className="ml-4">
          <ConnectWallet />
        </div>
      </nav>
    </header>
  );
}
