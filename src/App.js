import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Homepage from './Components/Homepage';
import Loginpage from './Components/Loginpage';
import Registration from './Components/Registration'; // Import the Registration component

function App() {
  return (
    <>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to='/' class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/two">Link</Link>
                </li>
                <li class="nav-item">
                  <Link to='/register' class="nav-link">Register</Link> {/* Add Registration link */}
                </li>
                {/* Other links... */}
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<Loginpage />} />
                <Route path='/register' element={<Registration />} /> {/* Route for Registration */}
             
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
