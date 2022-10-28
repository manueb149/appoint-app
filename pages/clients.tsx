import Head from 'next/head';
// import styles from '../src/styles/pages/Clients.module.scss';

/**
 * This is the Clients page
 * @return {JSX.Element} The JSX code for Clients page
 */
export default function Clients(): JSX.Element {
  return (
    <>
      <Head>
        <title>App-Oint | Clientes</title>
      </Head>
      <div className="clients wrapper">
        <h1 className="header-title">Clientes</h1>
      </div>
    </>
  );
}
