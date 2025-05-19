import '../styles/globals.css';
import { LensProvider } from '@lens-protocol/react-web';
import { ConnectKitProvider } from 'connectkit';

function MyApp({ Component, pageProps }) {
  return (
    <LensProvider apiUrl="https://api.lens.dev">
      <ConnectKitProvider>
        <Component {...pageProps} />
      </ConnectKitProvider>
    </LensProvider>
  );
}

export default MyApp;
