import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signIn, getCsrfToken, getProviders } from 'next-auth/react';
import Image from 'next/image';
import styles from '../src/styles/Pages/Signin.module.scss';

const Signin = ({
  csrfToken,
  providers,
}: {
  csrfToken: any;
  providers: { name: string; id: string }[];
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.cardWrapper}>
        <Image
          priority
          src="/calendar.svg"
          alt="App Logo"
          width={200}
          height={200}
          style={{ height: '100px', marginBottom: '20px' }}
        />
        <div className={styles.cardContent}>
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name} style={{ marginBottom: 0 }}>
                <button
                  onClick={() =>
                    signIn(provider.id, {
                      callbackUrl: '/dashboard',
                    })
                  }
                  style={{ height: 'max-content' }}
                >
                  <FontAwesomeIcon
                    icon={faGoogle}
                    style={{ padding: '10px', height: '40px' }}
                  />
                  {`Acceder con ${provider.name}`}
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Signin;

// eslint-disable-next-line require-jsdoc
export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}
