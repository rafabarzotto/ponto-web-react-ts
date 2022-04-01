import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import * as S from "./styles";

function Layout({ children }: any) {

    const { getEmployee, userData } = useContext(AuthContext);

    useEffect(() => {
        getEmployee();
    }, []);

    return (
        <S.Layout>
            <S.Header>
                <Navbar />
            </S.Header>
            <S.Aside>
                <Sidebar />
            </S.Aside>
            <S.Main>{children}</S.Main>
            <S.Footer />
        </S.Layout>
    )
}

export default Layout;