import React, { useState, useEffect } from "react";
import "./EntranceBranding.css";
import LogoAnimation from "../LogoAnimation/LogoAnimation";

function EntranceBranding() {
  const [visible, setVisible] = useState(false);
  const [itemTransformX, setItemTransformX] = useState({});
  const [itemTransformY, setItemTransformY] = useState({})

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true); // triggers fade-out
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  

  const handleMouseOver = (event, index) => {
    const letter = event.target;
    const rect = letter.getBoundingClientRect();
  
    // center of the letter
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
  
    // mouse position
    const x = event.clientX;
    const y = event.clientY;
  
    // vector from center to mouse
    const dx = x - centerX;
    const dy = y - centerY;
  
    // normalize vector
    const length = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / length;
    const uy = dy / length;
  
    // scale movement
    const distance = 12;
    const moveX = ux * distance * -1;
    const moveY = uy * distance * -1;
  
    // ✅ increment stored values
    setItemTransformX((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + moveX,
    }));
    setItemTransformY((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + moveY,
    }));
  
    // use updated values directly
    const newX = (itemTransformX[index] || 0) + moveX;
    const newY = (itemTransformY[index] || 0) + moveY;
  
    letter.style.transform = `translate(${newX}px, ${newY}px)`;
  
    // reset after delay (optional — if you still want snap back)
    setTimeout(() => {
      setItemTransformX((prev) => ({ ...prev, [index]: 0 }));
      setItemTransformY((prev) => ({ ...prev, [index]: 0 }));
    }, 250);
  };

  const brandText = "BLANK";

  return (
    <div
      className="entrance-branding"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <LogoAnimation />
      {visible && (
        <div
          className="brand-name"
          style={{
            color: "#3e2513",
            fontFamily: "Times New Roman",
            transform: "translateX(3vw)",
            display: "flex",
            gap: "0.2em",
            cursor: "default",
            position : "fixed"
          }}
        >
          {brandText.split("").map((letter, index) => (
            <span key={index} className="brand-letter" onMouseOver={(event) => handleMouseOver(event)}>
              {letter}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default EntranceBranding;
