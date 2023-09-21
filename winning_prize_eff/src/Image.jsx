import React from 'react';

function Image({ percentage, src }) {
  
  const style = {
    objectPosition: `${100 + percentage}% 50%` 
  };

  return (
    <img
      style={style}
      className="image"
      src={src}
      draggable="false"
    />
  );
}

export default Image;
