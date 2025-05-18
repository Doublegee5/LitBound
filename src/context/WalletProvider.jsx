// src/context/WalletProvider.jsx
'use client'; // If you use Next.js 13 app directory, else remove this line

import { WagmiConfig, createClient, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectKitProvider } from 'connectkit';

// Configure chains and providers
const { chains, provider } = configureChains(
  [mainnet],
  [publicProvider()]
);

// Create wagmi client
const wagmiClient = createClient({
  autoConnect: true,
  provider,
});

export default function WalletProvider({ children }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <ConnectKitProvider>
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
