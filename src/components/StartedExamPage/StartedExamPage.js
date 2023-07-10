import React from 'react'
import Navbar from '../Navbar/Navbar'
import StartedExamPageArea from './StartedExamPageArea/StartedExamPageArea'
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom'

function StartedExamPage() {

    const location = useLocation();

    const data = location.state;

    const subjectIDD = location.state.subjectIDD ;

    const subid = location.state.subjectid;

    console.log("data from result page >>>>>>",subid)

    console.log("1>>>>>", subjectIDD)
  return (
    <div>
     {/* <Navbar /><br></br><br></br><br></br> */}
     <StartedExamPageArea subjectid={subjectIDD ? (subjectIDD):(subid)}/>
     <Footer />

    </div>
  )
}

export default StartedExamPage