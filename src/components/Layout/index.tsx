import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import * as S from "./styles";

function Layout({ children }) {
    return (
        <S.Layout>
            <Sidebar />
            <S.Body>
                <Navbar />
                {children}
            </S.Body>
        </S.Layout>
    )
}
export default Layout;