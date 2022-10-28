import Head from 'next/head';
// import styles from '../src/styles/pages/Schedule.module.scss';

/**
 * This is the Schedule page
 * @return {JSX.Element} The JSX code for Schedule page
 */
export default function Schedule(): JSX.Element {
  return (
    <>
      <Head>
        <title>App-Oint | Calendario</title>
      </Head>
      <div className="schedule wrapper">
        <h1 className="header-title">Calendario</h1>
      </div>
    </>
  );
}
