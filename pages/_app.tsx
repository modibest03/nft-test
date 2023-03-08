import '@/styles/globals.css';
import Moralis from 'moralis';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const run = async () => {
      await Moralis.start({
        apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
        // ...and any other configuration
      });
    };
    console.log(`Starting`);
    run();
  }, []);

  return <Component {...pageProps} />;
}
