import React, { useState } from 'react';

const ImageWithHover = ({ src, alt }) => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '50%',
  };

  const imageStyle = {
    display: 'block',
    width: '100%',
    height: 'auto',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    opacity: 0,
    transition: '.5s ease',
    backgroundColor: '#008CBA',
  };

  const textStyle = {
    color: 'white',
    fontSize: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="container"
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className="image" style={imageStyle} />
      <div className="overlay" style={{ ...overlayStyle, opacity: isHovered ? 1 : 0 }}>
        <div className="text" style={textStyle}>
          Hello World
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div>
      <h3 className='mt-4'>Products</h3>
      <div className="row">
        <div className="col-md-3 my-4">
          <ImageWithHover src="img_avatar.png" alt="Avatar 1" />
        </div>
        <div className="col-md-3 my-4">
          <ImageWithHover src="img_avatar.png" alt="Avatar 2" />
        </div>
        <div className="col-md-3 my-4">
          <ImageWithHover src="img_avatar.png" alt="Avatar 3" />
        </div>
        <div className="col-md-3 my-4">
          <ImageWithHover src="img_avatar.png" alt="Avatar 4" />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-3 my-4">
          <ImageWithHover src="img_avatar.png" alt="Avatar 1" />
        </div>
        <div className="col-md-3 my-4">
          <ImageWithHover src="img_avatar.png" alt="Avatar 2" />
        </div>
        <div className="col-md-3 my-4">
          <ImageWithHover src="img_avatar.png" alt="Avatar 3" />
        </div>
        <div className="col-md-3 my-4">
          <ImageWithHover src="img_avatar.png" alt="Avatar 4" />
        </div>
      </div>
    </div>
  );
};

export default Products;
