import React from 'react';

const Navbar = () => {
  return (
    <div className="jumbotron" style={{ backgroundImage: 'url(images.jpeg)',padding:'50px' }}>
    <h1 className="display-4" style={{color:'white',padding:'10px' }}>Hello, world!</h1>
    <p className="lead" style={{color:'white',padding:'10px' }}>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr className="my-4" />
    <p style={{color:'white',padding:'10px' }}>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  </div>
  );
};
export  default Navbar
