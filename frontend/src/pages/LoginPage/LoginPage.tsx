import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";
import { useAuth } from "@/hooks/useAuth";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, loginLoading, loginError } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await login(email, password);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h1 className={styles.title}>Welcome back</h1>
                <p className={styles.subtitle}>Login to your account</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <label className={styles.label}>Email</label>
                    <input
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        type="email"
                    />

                    <label className={styles.label}>Password</label>
                    <input
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        type="password"
                    />

                    {loginError && (
                        <div className={styles.error}>
                            Invalid email or password
                        </div>
                    )}

                    <button
                        className={styles.button}
                        disabled={loginLoading}
                        type="submit"
                    >
                        {loginLoading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}