import React from 'react'
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import SignUp from './auth/signup';
import Login from './auth/login';
import Searchbar from './searchbar';
import Products from './products';
import Navbar from './navbar';
import Text from './Test';
const Header = () => {
  return (
    <Router>
      <div className="App">
        {/* <Searchbar /> */}
        <div className="navbar-container">
          {/* <Navbar /> */}
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/test' element={<Text/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default Header
