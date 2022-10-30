import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { LayoutProps } from '../models/interfaces.model';
import Main from './Main/Main';
import Sidenav from './Sidenav/Sidenav';

/**
 * Set the Layout for the entire app
 */
const Layout: React.FC<LayoutProps> = ({ children, ...rest }) => {
  const session = useSession();
  const router = useRouter();
  const { status } = session;
  useEffect(() => {
    if (status === 'unauthenticated') router.replace('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>
      <Sidenav />
      <Main {...rest}>{children}</Main>
    </>
  );
};

export default Layout;
