import { Route, Routes } from 'react-router-dom'
import Headers from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
