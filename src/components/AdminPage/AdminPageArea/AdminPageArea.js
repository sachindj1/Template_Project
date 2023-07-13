import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminPageArea() {
    const [subjects, setSubjects] = useState([]);

    const navigate = useNavigate();
    const userIDD = localStorage.getItem('userID' );
   
  function handlSubject(subjectID) {

    if(  userIDD ){

      navigate('/', { state: { subjectID } });
    }
    else{
      navigate('/login')
    }
   
  }

     // Fetch list of subjects from backend
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/get/subjects');
        const data = await response.json();
        console.log(data.result);
        setSubjects(data.result);
      } catch (err) {
        console.log('error in getting subjects', err);
      }
    };

    fetchSubjects();
  }, []);


  return (
    <div>
        <div style={containerStyle}>

      <div style={contentStyle}>
      <h2 style={{textAlign:"center"}}>Select Subject</h2>
        <div style={buttonContainerStyle}>
          {subjects.map((subject) => (
            <button
              key={subject.subject_id}
              style={buttonStyle}
              onClick={() => handlSubject(subject.subject_id)}
            >
              {subject.subject_name}
            </button>
          ))}
        </div>
     
      </div>
        </div>
        
        </div>
  )
}

const buttonContainerStyle = {
    marginTop: '20px',
  };
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


  const buttonStyle = {
    backgroundColor: '#f2f2f2',
    color: '#333',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    marginRight: '10px',
    cursor: 'pointer',
    width: '100px',
  };

export default AdminPageArea