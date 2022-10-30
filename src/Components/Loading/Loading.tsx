import styles from '../../styles/Components/Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
