import { useState } from 'react'
import './App.css'

function App() {
  const track = document.getElementById("image-track");

  window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
  }
  window.onmouseup = () => {
    track.dataset.mouseDownAt ="0";
    track.dataset.prevPercentage = track.dataset.percentage;
  }
  window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    track.dataset.percentage = nextPercentage;

    track.style.transform = `translate(${nextPercentage}%, -50%)`;
  }
  return (
    <>
      <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
        <img className = "image" src ="https://images.unsplash.com/photo-1693253987201-edf2e32309d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60" draggable = "false"/>
        <img className = "image" src ="https://plus.unsplash.com/premium_photo-1680543345312-e5f25a1557ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" draggable = "false"/>
        <img className = "image" src ="https://images.unsplash.com/photo-1693761935254-6d1ae28f45ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80" draggable = "false"/>
        <img className = "image" src ="https://images.unsplash.com/photo-1692542871594-bf42eac1964f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" draggable = "false"/>
        <img className = "image" src ="https://images.unsplash.com/photo-1689455231345-54a5126d9826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" draggable = "false"/>
        <img className = "image" src ="https://plus.unsplash.com/premium_photo-1678402544927-ba1a7c74a23c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" draggable = "false"/>
        <img className = "image" src ="https://images.unsplash.com/photo-1693131819413-1acce151d69a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" draggable = "false"/>
        <img className = "image" src ="https://plus.unsplash.com/premium_photo-1692911105053-d4c381c5a9f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" draggable = "false"/>
      </div>
    </>
  )
}

export default App
