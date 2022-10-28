import type { AppProps } from 'next/app';
import Layout from '../src/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles/globals.scss';

/**
 * App wrapper for global styling
 * @param {AppProps} param0
 * @return {JSX.Element} JSX Node element
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
