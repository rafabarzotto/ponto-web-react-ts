import { Route, Routes } from 'react-router-dom'
import ExportPage from '../pages/Export'
import HistoryPage from '../pages/History'
import HomePage from '../pages/Home'

function AppRoutes() {
    return (
        <Routes>
            <Route index element={<HomePage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/history" element={<HistoryPage />}></Route>
            <Route path="/export" element={<ExportPage />}></Route>
            <Route path="*" element={<HomePage />} />
        </Routes>
    )
}

export default AppRoutes
