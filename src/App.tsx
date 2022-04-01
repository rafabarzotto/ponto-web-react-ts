import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Routes from './routes/routes'
import './App.css'


function App() {

  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App;
