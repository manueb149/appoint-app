import '../styles/globals.css';
import type { AppProps } from 'next/app';

/**
 * App wrapper for global styling
 * @param {AppProps} param0
 * @return {JSX.Element}
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
