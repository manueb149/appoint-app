import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles/globals.scss';
import { CustomAppProps } from '../src/models/types.model';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

/**
 * App wrapper for global management
 */
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps<{ session: Session }>): JSX.Element {
  if (Component.layout) {
    return (
      <SessionProvider session={session}>
        <Component.layout>
          <Component {...pageProps} />
        </Component.layout>
      </SessionProvider>
    );
  }
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
