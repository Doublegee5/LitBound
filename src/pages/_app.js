// pages/_app.js

import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { http } from 'wagmi'; // <- THIS is now the correct import

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [http()] // <- use http provider here
);

const { connectors } = getDefaultWallets({
  appName: 'LitBound',
  projectId: 'YOUR_PROJECT_ID', // Use your WalletConnect project ID
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
