import React, { useState } from 'react';

interface Props {
  content_drop : string;
  href : string;
}

const HoverableDiv = ({content_drop , href} : Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleHover = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <a href={href}>
    <div style={{ position: 'relative' }}>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
      </div>

      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: position.y, // You can adjust the offset
            left: position.x, // You can adjust the offset
            background: 'rgba(34, 34, 34, 0.9)',
            padding: '5px',
            borderRadius: '5px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
          }}
        >
          {content_drop}
        </div>
      )}
    </div>
    </a>
  );
};

export default HoverableDiv;
