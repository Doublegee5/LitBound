import { WagmiConfig, createClient, configureChains } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    publicProvider(),
    // or if you want to use jsonRpcProvider with a proper URL, do:
    // jsonRpcProvider({
    //   rpc: (chain) => ({
    //     http: `https://rpc.ankr.com/${chain.id}`, // note backticks for template literals
    //   }),
    // }),
  ]
);

const client = createClient(
  getDefaultClient({
    appName: "LitBound",
    chains,
    provider,
    webSocketProvider,
    walletConnectProjectId: "YOUR_WALLETCONNECT_PROJECT_ID",
  })
);

export function WalletProvider({ children }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
