import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'

// Example: configure RPC
const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://rpc.ankr.com/${chain.id}`, // Replace with your own RPC or a fallback
      }),
    }),
  ]
)

const wagmiConfig = createConfig(
  getDefaultConfig({
    appName: 'LitBound',
    chains,
    publicClient,
    walletConnectProjectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  })
)
