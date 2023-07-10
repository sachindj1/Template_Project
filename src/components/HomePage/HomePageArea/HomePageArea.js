import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState , useEffect} from 'react'

function HomePageArea() {
    const [userName , setUserName]= useState('')
    
    const navigate = useNavigate();
    const user = localStorage.getItem('username');
    const userIDD = localStorage.getItem('userID' );
    const userr = userName.toUpperCase();

    const handleRegister =()=>{
        navigate('/register')
    }

    const handleLogin =()=>{
        navigate('/login')
    }
    const handleUserLandingPage =()=>{
        navigate('/userlandingpage')
    }

    
    useEffect(()=>{
        const fetchUserData = async()=>{
                const userID = userIDD ;
            try{
                const response = await fetch(`http://localhost:5000/api/get/userdata/${userID}`);
                const data = await response.json();
                console.log(data.result[0].user_name);
                setUserName(data.result[0].user_name);



            }catch (err){
              console.log("error in fetching data", err)

            }}
            fetchUserData();

    }, [])


  return (
    <div>

   {userIDD ?(<section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row">
    <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>Hello {userr}</h1>
      <h2>We are team of talented people providing you a platform where you can test your knowledge</h2>
      <div class="d-flex justify-content-center justify-content-lg-start">
        <a onClick={handleUserLandingPage} class="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src="assets/img/hero-img.png" class="img-fluid animated" alt="" />
    </div>
  </div>
</div>

</section>
):(<section id="hero" class="d-flex align-items-center">

<div class="container">
  <div class="row">
    <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h1>Welcome {userr}</h1>
      <h2>We are team of talented people providing you a platform where you can test your knowledge</h2>
      <div class="d-flex justify-content-center justify-content-lg-start">
        <a onClick={handleUserLandingPage} class="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
      <img src="assets/img/hero-img.png" class="img-fluid animated" alt="" />
    </div>
  </div>
</div>

</section>
)}


    </div>
  )
}

export default HomePageArea