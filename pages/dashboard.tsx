import type { GetServerSideProps } from 'next';
import { unstable_getServerSession as getServerSession } from 'next-auth';
import Head from 'next/head';
import Layout from '../src/Layout';
import { authOptions } from './api/auth/[...nextauth]';

/**
 * This is the Dashboard page
 */
const Dashboard = () => {
  return (
    <>
      <Head>
        <title>AppOint | Panel</title>
      </Head>
      <div className="dashboard wrapper">
        <h1 className="header-title">Panel</h1>
        <div className="cards"></div>
      </div>
    </>
  );
};

Dashboard.layout = Layout;

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

export default Dashboard;
