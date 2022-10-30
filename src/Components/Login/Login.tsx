import { signIn } from 'next-auth/react';
import styles from '../../styles/Components/Login.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginLayer}></div>
      <div className={styles.login}>
        <div className={styles.title}>AppOint</div>
        <button
          type="button"
          className="btn btn-primary"
          style={{ fontWeight: 'bold' }}
          onClick={() => signIn()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
