import { useNavigate } from "react-router-dom";
import styles from './PasteItems.module.scss';
import {useState} from "react";

const PasteItems = ({ pastes }) => {
    const navigate = useNavigate();
    const [copiedId, setCopiedId] = useState(null);

    const handleShare = async (id) => {
        const link = `${window.location.origin}/paste/${id}/read`;

        try {
            await navigator.clipboard.writeText(link);
            setCopiedId(id);

            setTimeout(() => setCopiedId(null), 2000);
        } catch (e) {
            console.error("Copy failed", e);
        }
    }
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
                        <div className={styles.left}>
                            <span
                                className={`${styles.badge} ${
                                    paste.is_expired
                                        ? styles.badgeExpired
                                        : styles.badgeActive
                                }`}
                            >
                                {paste.is_expired ? 'Expired' : 'Active'}
                            </span>

                            <span className={styles.date}>
                                expires at {new Date(paste.expires_at).toLocaleString()}
                            </span>
                        </div>


                        <div className={styles.actions}>
                            <button
                                className={styles.editBtn}
                                onClick={() => navigate(`/paste/${paste.id}/edit`)}
                            >
                                Edit
                            </button>

                            <button
                                className={styles.shareBtn}
                                onClick={() => handleShare(paste.id)}
                            >
                                {copiedId === paste.id ? "Copied ✓" : "Share"}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PasteItems;