import styles from './Loader.module.scss';

export const Loader = ({ text = 'Loading...' }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.loader}></div>
                <div className={styles.text}>Loading...</div>
            </div>
        </div>
    );
};