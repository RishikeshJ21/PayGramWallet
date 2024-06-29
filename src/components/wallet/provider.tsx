"use client";

import { PropsWithChildren } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base,blast } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "PayGram Wallet App",
  projectId: "576f2ed1d1d641e9ba09186fbfad0434", // Better to put in .env.local
  chains: [mainnet, polygon, optimism, arbitrum, base, blast],
  ssr: true,
});

const queryClient = new QueryClient();

export function WalletProvider(props: PropsWithChildren) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{props.children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
