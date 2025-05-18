'use client';

import React, { ReactNode } from 'react';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://pc.anki.com/${chain.id}`, // Replace with your own RPC provider or fallback
      }),
    }),
  ]
);

const config = getDefaultConfig({
  appName: 'LitBound',
  chains,
  publicClient,
  walletConnectProjectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Replace with your actual project ID
});

export function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
