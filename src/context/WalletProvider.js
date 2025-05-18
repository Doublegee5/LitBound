import React from 'react';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://pc.anki.com/${chain.id}`, // Use backticks here
      }),
    }),
  ]
);

const config = getDefaultConfig({
  appName: 'LitBound',
  chains,
  publicClient,
  walletConnectProjectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
});

export function WalletProvider({ children }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
