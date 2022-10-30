import type { GetServerSideProps } from 'next';
import { unstable_getServerSession as getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import Head from 'next/head';
import Layout from '../src/Layout';
import axios from 'axios';
// import styles from '../src/styles/pages/Schedule.module.scss';

/**
 * This is the Schedule page
 */
const Schedule = () => {
  return (
    <>
      <Head>
        <title>AppOint | Calendario</title>
      </Head>
      <div className="schedule wrapper">
        <h1 className="header-title">Calendario</h1>
        <div className="cards"></div>
      </div>
    </>
  );
};

Schedule.layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);
  await axios(process.env.NEXTAUTH_URL + '/api/jwt');

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

export default Schedule;
