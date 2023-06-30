import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const user = localStorage.getItem('username');

    function handleLogin(){
        navigate('/login')

    }

    function handleHome(){
        navigate('/')

    }

    function handleRegister(){
        navigate('/register')

    }

    const handleLogout = () => {
        // Clear user data from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('userID');
    
    
        // Perform any additional cleanup or redirection as needed
        // For example, you can redirect the user to the login page
        navigate("/");
        window.location.reload();
      };


  return (
    <div>
  <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a  onClick={handleHome}>Arsha</a></h1>
     
       <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          {user ? ( <li><a class="getstarted scrollto" style={{color : "red"}} onClick={handleLogout}>LogOut</a></li>):( <ul><li><a class="getstarted scrollto"  onClick={handleLogin}>Login</a></li>
          
          <li><a class="getstarted scrollto"  onClick={handleRegister}>Register</a></li></ul>
          )}
         
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

    </div>
  )
}

export default Navbar