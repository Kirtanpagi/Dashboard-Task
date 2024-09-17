import './style.scss'
import Login from './components/Login'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import Map from './components/Map'

function App() {

  return (
    <Router>
     
      <Routes>
      
      <Route path='/' element={<Login/>} />

      <Route path='/dash' element={<Header/>} />
        
      </Routes>
    </Router>
  )
}

export default App
