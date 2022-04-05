import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
import Routes from './routes/routes'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
          <ToastContainer />          
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App;
