import { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const paraRef = useRef(null);
  useEffect(() => {
    const menu = document.getElementById("menu");

    Array.from(document.getElementsByClassName("menu-item")).forEach(
      (item, index) => {
        item.onmouseover = () => {
          menu.dataset.activeIndex = index;
        };
      }
    );
  });
  return (
    <div id="menu">
      <div id="menu-items">
        <a href="/" className="menu-item">
          Home
        </a>
        <a href="/" className="menu-item">
          Shop
        </a>
        <a href="/" className="menu-item">
          About
        </a>
        <a href="/" className="menu-item">
          Contact Us
        </a>
      </div>
      {/* <div id = "menu-background-pattern"></div> */}
      <div id="menu-background-image" ref={paraRef}></div>
    </div>
  );
}

export default App;
