import Head from 'next/head';
// import styles from '../src/styles/pages/Dashboard.module.scss';

/**
 * This is the Dashboard page
 * @return {JSX.Element} The JSX code for Dashboard page
 */
export default function Dashboard(): JSX.Element {
  return (
    <>
      <Head>
        <title>App-Oint | Panel</title>
      </Head>
      <div className="dashboard wrapper">
        <h1 className="header-title">Panel</h1>
        <div className="cards"></div>
      </div>
    </>
  );
}
