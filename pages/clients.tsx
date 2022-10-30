import type { GetServerSideProps } from 'next';
import { unstable_getServerSession as getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import Head from 'next/head';
import Layout from '../src/Layout';
// import styles from '../src/styles/pages/Clients.module.scss';

/**
 * This is the Clients page
 */
const Clients = () => {
  return (
    <>
      <Head>
        <title>AppOint | Clientes</title>
      </Head>
      <div className="clients wrapper">
        <h1 className="header-title">Clientes</h1>
        <div className="cards"></div>
      </div>
    </>
  );
};

Clients.layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default Clients;
