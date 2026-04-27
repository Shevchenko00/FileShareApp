import styles from './PasteItems.module.scss';

const PasteItems = ({ pastes }) => {
    return (
        <div className={styles.list}>
            {pastes.map((paste) => (
                <div
                    key={paste.id}
                    className={`${styles.card} ${
                        paste.is_expired ? styles.expired : ''
                    }`}
                >
                    <h3 className={styles.title}>{paste.title}</h3>
                    <p className={styles.text}>{paste.text}</p>

                    <div className={styles.footer}>
            <span
                className={`${styles.badge} ${
                    paste.is_expired ? styles.badgeExpired : styles.badgeActive
                }`}
            >
              {paste.is_expired ? 'Expired' : 'Active'}
            </span>

                        <span className={styles.date}>
                            expires at {new Date(paste.expires_at).toLocaleString()}
            </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PasteItems;