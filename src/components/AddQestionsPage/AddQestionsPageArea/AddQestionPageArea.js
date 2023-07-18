import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddQestionPageArea({ subId }) {
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');

  const subbId = subId;
  console.log('subId on area page', subbId);

  function handleSubmit() {
    // Prepare the data to be sent to the backend
    const data = {
      subbId: subbId,
      question_text: question,
      options: options,
      answer: answer,
    };

    // Make the HTTP POST request to the backend
    fetch(`http://localhost:5000/api/questions/${subId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Data saved to backend successfully');
          // You can navigate to a success page or perform any other actions here
        } else {
          console.log('Failed to save data to backend');
        }
      })
      .catch((error) => {
        console.error('Error saving data to backend:', error);
      });
  }

  function handleCancle() {
    navigate('/admin');
  }

  return (
    <div>
    <div style={containerStyle}>
      <div style={contentStyle}>
      <div>
        <h2 style={{ textAlign: 'center' }}>Add Question</h2>
      </div>
      <div>
        <div>
          <label>Question:</label>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        <label>Option1:</label>
<input
  value={options[0]}
  onChange={(e) => setOptions([e.target.value, options[1], options[2], options[3]])}
/>
<br></br>
<label>Option2:</label>
<input
  value={options[1]}
  onChange={(e) => setOptions([options[0], e.target.value, options[2], options[3]])}
/>
<br></br>
<label>Option3:</label>
<input
  value={options[2]}
  onChange={(e) => setOptions([options[0], options[1], e.target.value, options[3]])}
/>
<br></br>
<label>Option4:</label>
<input
  value={options[3]}
  onChange={(e) => setOptions([options[0], options[1], options[2], e.target.value])}
/>
<br></br>


        {/* Add similar input elements for Option2, Option3, and Option4 */}

        <label>Answer:</label>
        <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
        <br></br><br></br>

        <button onClick={handleSubmit} style={buttonStyle1}>Next</button>
        <button onClick={handleCancle} style={buttonStyle}>Cancel</button>
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
export default AddQestionPageArea;
