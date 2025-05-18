import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://rpc.ankr.com/${chain.id}`, // Correct format here
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

export function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
