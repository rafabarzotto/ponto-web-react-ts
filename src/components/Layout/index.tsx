import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import * as S from "./styles";

function Layout({ children }) {
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