import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import QuizStarted from './pages/QuizStarted'
import Login from './pages/Login'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/quizstarted' element = {<QuizStarted/>}/>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
