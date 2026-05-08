import PlusButton from "@/components/PlusButton/PlusButton.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import Header from "@/components/Header/Header.tsx";
import PasteItems from "@/components/PasteItems/PasteItems";
import { useGetPasteQuery } from "@/services/pasteApi.ts";
import {useAuth} from "@/hooks/useAuth.ts";
import {Loader} from "@/components/Loader/Loader.tsx";

const RootPage = () => {
    const {
        data: pastes,
        isLoading,
        isError,
        error
    } = useGetPasteQuery();
    if (isLoading) return <Loader/>;
    return (
        <>
            <Header />

            <main style={{ padding: "24px" }}>

                {isError && (
                    <p style={{ color: "red" }}>
                        Loading error
                    </p>
                )}

                {!isLoading && !isError && pastes && (
                    <PasteItems pastes={pastes} isExpired={pastes.expired} />
                )}
            </main>

            <PlusButton />
            <Footer />
        </>
    );
};

export default RootPage;