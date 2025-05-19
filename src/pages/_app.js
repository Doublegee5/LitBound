import '../styles/globals.css';
import { WagmiConfig, createClient, configureChains } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient(
  getDefaultClient({
    appName: 'LitBound',
    chains,
    provider,
    webSocketProvider,
  })
);

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}
