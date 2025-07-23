import { BrowserRouter } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AppRoutes from './routes/AppRoutes';


function App() {
  
  return (
    <>
      <BrowserRouter>
      <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App
