import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loading from '../src/Components/Loading/Loading';
import Login from '../src/Components/Login/Login';

const Index = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  if (status !== 'unauthenticated') return <Loading />;
  return (
    <>
      <Head>
        <title>AppOint | Login</title>
      </Head>
      <Login />
    </>
  );
};

export default Index;
