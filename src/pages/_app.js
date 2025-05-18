// This is the root app component that wraps all pages

import '../styles/globals.css'  // Make sure this file exists or comment this out

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
