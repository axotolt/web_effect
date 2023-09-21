import React, { useState, useEffect } from 'react';
import Image from './Image';
import './App.css';

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const handleOnDown = e => {
      document.getElementById("image-track").dataset.mouseDownAt = e.clientX;
    }

    const handleOnUp = () => {
      document.getElementById("image-track").dataset.mouseDownAt = "0";
      document.getElementById("image-track").dataset.prevPercentage = percentage;
    }

    const handleOnMove = e => {
      const track = document.getElementById("image-track");
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + (mouseDelta / maxDelta) * -100;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      setPercentage(nextPercentage);

      track.dataset.percentage = nextPercentage;

      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });
    }

    window.onmousedown = e => handleOnDown(e);
    window.ontouchstart = e => handleOnDown(e.touches[0]);
    window.onmouseup = e => handleOnUp(e);
    window.ontouchend = e => handleOnUp(e.touches[0]);
    window.onmousemove = e => handleOnMove(e);
    window.ontouchmove = e => handleOnMove(e.touches[0]);
  }, [percentage]);

  return (
    <>
      <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
        <Image percentage = {percentage} className = "image" src ="https://images.unsplash.com/photo-1516882058351-3601a7f420cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lkZSUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" draggable = "false"/>
        <Image percentage = {percentage} className = "image" src ="https://www.vershinin.biz/thumbs/960/black-sands-opera.jpg" draggable = "false"/>
        <Image percentage = {percentage} className = "image" src ="https://www.opticalhardware.co.uk/wp-content/uploads/2019/04/landscape2.jpg" draggable = "false"/>
        <Image percentage = {percentage} className = "image" src ="https://www.vershinin.biz/thumbs/960/infinity.jpg" draggable = "false"/>
        <Image percentage = {percentage} className = "image" src ="https://vastphotos.com/files/uploads/photos/10311/very-high-resolution-mountain-landscape-photo-l.jpg?v=20220712073521" draggable = "false"/>
        <Image percentage = {percentage} className = "image" src ="https://www.picturecorrect.com/wp-content/uploads/2017/02/tips-for-tripod-long-exposure-landscape-photos.jpg" draggable = "false"/>
        <Image percentage = {percentage} className = "image" src ="https://images.hdqwalls.com/wallpapers/long-exposure-reflection-landscape-lake-pink-sky-xv.jpg" draggable = "false"/>
        <Image percentage = {percentage} className = "image" src ="https://images.unsplash.com/photo-1643029891412-92f9a81a8c16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNDUxNDU3fHxlbnwwfHx8fHw%3D&w=1000&q=80" draggable = "false"/>
      </div>
    </>
  );
}

export default App;
