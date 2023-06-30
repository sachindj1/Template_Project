import React from 'react';

function ResultPageArea({ Result }) {
  const result = Result;
  const isAnswerCorrect = result.selectedAll.isAnswerCorrect;

  const passThreshold = Math.ceil(isAnswerCorrect.length / 2);
  const passCount = isAnswerCorrect.filter((value) => value).length;

  const isPass = passCount >= passThreshold;

  return (
    <div >
      <div style={{backgroundColor: '#37517e'}}><br></br><br></br><br></br>
      <h2 style={{color : "white"}}>Result Page</h2>
      {isPass ? (
        <p style={{color : "white"}}>Congratulations! You have passed the exam.</p>
      ) : (
        <p style={{color : "white"}}>Sorry! You have failed the exam.</p>
      )}
    </div>
    </div>
  );
}

export default ResultPageArea;
