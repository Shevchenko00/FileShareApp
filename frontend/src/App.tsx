import styles from "./App.module.scss";

import {Routes, Route} from "react-router-dom";

import CreatePage from "@/pages/CreatePage/CreatePage.tsx";
import RootPage from "@/pages/RootPage/RootPage.tsx";

function App() {
    return (
        <div className={styles.page}>

            <main className={styles.content}>
                <Routes>
                    <Route path="/create" element={<CreatePage/>}/>
                    <Route path="/" element={<RootPage/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;