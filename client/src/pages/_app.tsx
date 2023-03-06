import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { worker } from "../mock/worker";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
