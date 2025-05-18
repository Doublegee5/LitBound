"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function ConnectWallet() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div>
      {isConnected ? (
        <button onClick={() => disconnect()}>
          Disconnect Wallet ({address?.slice(0, 6)}...{address?.slice(-4)})
        </button>
      ) : (
        <button onClick={() => connect()}>Connect Wallet</button>
      )}
    </div>
  );
}