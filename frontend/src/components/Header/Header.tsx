import { useAuth } from "@/hooks/useAuth";
import styles from "./Header.module.scss";
import {useNavigate} from "react-router-dom";

export default function Header({}) {
    const { logout } = useAuth();
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <div onClick={() => navigate('/')} className={styles.left}>Paste Share App</div>

            <div className={styles.action}>
                <button
                    className={styles.logoutButton}
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
        </header>
    );
}