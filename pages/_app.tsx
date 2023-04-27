import { useEffect } from "react";
import NProgress from "nprogress";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { Web3Modal } from "@web3modal/react";
import { ThemeProvider } from "next-themes";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";

import { Transition } from "@/common/Transition";

const Header = dynamic(() => import("@/common/Layout/Header"), {
  ssr: false,
});

import "styles/nprogress.css";

const chains = [arbitrum, mainnet, polygon];
const projectId = "c67fd3643b4bad032774ab4ec3e6c841";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <ThemeProvider>
          <Header />
          <Transition location={router.pathname}>
            <Component {...pageProps} />
          </Transition>
        </ThemeProvider>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
