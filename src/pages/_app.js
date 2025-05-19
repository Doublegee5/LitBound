// pages/_app.jsx

import '../styles/globals.css';  // your Tailwind CSS import
import Header from '../components/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
