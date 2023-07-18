import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import AddQestionPageArea from './AddQestionsPageArea/AddQestionPageArea'
import { useLocation } from 'react-router-dom'

function AddQestionsPage() {

    const location = useLocation();

    const id = location.state.subjectID ;
    console.log("subject id >>>>", id)
  return (
    <div>

<Navbar />
<AddQestionPageArea subId={id}/>
<Footer />


    </div>
  )
}

export default AddQestionsPage