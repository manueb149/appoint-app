import styles from '../src/styles/pages/Error404.module.scss';

/**
 * This is the home page
 * @return {JSX.Element} The JSX code for home page
 */
export default function Custom404(): JSX.Element {
  return <div className={styles.error404}>404 - Page not found</div>;
}
