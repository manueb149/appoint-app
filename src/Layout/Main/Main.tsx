import styles from '../../styles/Layout/Main.module.scss';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/**
 * Set the layout for the Main section
 * @return {JSX.Element} Main section jsx
 */
export default function Main({ children, ...rest }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <main {...rest}>{children}</main>
    </div>
  );
}
