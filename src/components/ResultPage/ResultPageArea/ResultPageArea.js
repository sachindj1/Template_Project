import React from 'react';
import { useLocation , useNavigate } from 'react-router-dom';

function ResultPageArea({ Result }) {
  const result = Result;
  const isAnswerCorrect = result.selectedAll.isAnswerCorrect;

  const passThreshold = Math.ceil(isAnswerCorrect.length / 2);
  const passCount = isAnswerCorrect.filter((value) => value).length;

  const isPass = passCount >= passThreshold;
  const location =useLocation();

  const testData = location.state;
  const navigate = useNavigate();

  console.log("----->", testData.selectedAll.subjectid);
  const subjectid = testData.selectedAll.subjectid;
  

  const handleSave=()=>{
   console.log("data saved to backend")
   navigate('/')
    
  }

  function handleRetest(){

    navigate("/startedexam" , {state : {subjectid}})
  }

  return (
    <div >
     


<div style={containerStyle}>
      <div style={contentStyle}>
      <div >
      <h2 style={{color : "black" , textAlign:"center"}}>Result </h2>
      {isPass ? (
       <div> 
        <p style={{color : "black"}}>Congratulations! You have passed the exam.</p>
        <button style={buttonStyle1} onClick={handleSave}>Save Result</button><br></br>
        <button style={buttonStyle} onClick={handleRetest}>Try Again</button>
        
       </div>
      ) : (
        <div>
          <p style={{color : "black"}}>Sorry! You have failed the exam.</p>
          <button style={buttonStyle} onClick={handleRetest}>Try Again</button>
        </div>
        
      )}
    </div> 
      </div>
    </div>


    </div>
  );
}




const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#37517e',
};

const contentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: "10px"
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
};



const buttonStyle = {
  backgroundColor: 'red',
  color: '#333',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  marginTop: '20px',
  cursor: 'pointer',
  display: 'block',
  margin: '0 auto',

  transition: 'background-color 0.3s ease', // Add transition effect for smooth animation
  

 
};

const buttonStyle1 = {
  backgroundColor: 'green',
  color: '#333',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  marginTop: '20px',
  cursor: 'pointer',
  display: 'block',
  margin: '0 auto',

  transition: 'background-color 0.3s ease', // Add transition effect for smooth animation
  

 
};

export default ResultPageArea;
