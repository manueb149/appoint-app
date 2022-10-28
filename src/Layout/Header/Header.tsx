import styles from '../../styles/Layout/Header.module.scss';

/**
 * Set the layout for the Header section
 * @return {JSX.Element}
 */
export default function Header(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>Header</header>
    </div>
  );
}
