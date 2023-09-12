import React, { useRef, useEffect } from 'react';
import './Blob.css';

function Blob() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, {duration: 3000, fill: "forwards"});
    };

    document.body.addEventListener('pointermove', handleMouseMove);

    return () => {
      document.body.removeEventListener('pointermove', handleMouseMove);
    };
  }, []);

  return <div id="blob" ref={blobRef}></div>;
}

export default Blob;
