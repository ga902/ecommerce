import React from 'react';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/test'>test</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">about us</a>
          </li><li className="nav-item">
            <a className="nav-link" href="#">contact</a>
          </li><li className="nav-item">
            <Link className='nav-link' to='/login'>login</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to='/signup'>SignUp</Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"></hr></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
         
        </ul>
        <form className="form-inline">
        <div className="form-group d-flex" style={{ padding: '0' }}>
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
      </form>
      </div>
    </div>
  </nav>
  );
};
export default  Searchbar