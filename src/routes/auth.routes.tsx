import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'


function AuthRoutes() {
    return (
        <Routes>
            {/* <Route index element={<Login />}></Route> */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Login />} />
        </Routes>
    )
}

export default AuthRoutes
