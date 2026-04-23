import styles from './CreatePage.module.scss';
import {useState} from "react";
import {useCreatePasteMutation} from "@/services/createApi.ts";

const CreatePage = () => {
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [createPaste] = useCreatePasteMutation()

    const handlePasteCreate = async () => {
        await createPaste({ title, text }).unwrap();
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Create New Paste</h1>

                <input
                    className={styles.input}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Paste title..."
                />

                <textarea
                    className={styles.textarea}
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    placeholder="Write your code or text here..."
                />

                <div className={styles.actions}>
                    <button onClick={() => {
                        setText('');
                        setTitle('');
                    }} className={styles.buttonSecondary}>
                        Clear
                    </button>
                    <button onClick={ handlePasteCreate} className={styles.buttonPrimary}>
                        Create Paste
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePage;