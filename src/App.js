import React from 'react'
import HomePage from './components/HomePage/HomePage'
import {Routes , Route ,Link} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import UserLandingPage from './components/UserLandingPage/UserLandingPage'
import ExamPage from './components/ExamPage/ExamPage'
import ResultPage from './components/ResultPage/ResultPage'
import StartedExamPage from './components/StartedExamPage/StartedExamPage'
import AdminPage from './components/AdminPage/AdminPage'

function App() {
  return (
    <div>

     <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={ <Login />} />
      <Route path='/register' element={ <Register />} />
      <Route path='/userlandingpage' element={ <UserLandingPage />} />
      <Route path='/exampage' element={ <ExamPage />} />
      <Route path='/resultpage' element={ <ResultPage />} />
      <Route path='/startedexam' element={ <StartedExamPage />} />
      <Route path='/admin' element={<AdminPage />} />
     </Routes>
       


    </div>
  )
}

export default App