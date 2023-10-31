import React, { useState, useEffect } from 'react';
import './Home.css'

interface Props{
  text: string;
  typingSpeed: number;
}

const TypingEffect = ({ text, typingSpeed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    };

    const typingInterval = setInterval(typeNextCharacter, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, text, typingSpeed]);

  return (
    <div id="typewriter">
      {displayText}
    </div>
  );
};

TypingEffect.defaultProps = {
  typingSpeed: 100, // Default typing speed in milliseconds per character
};

export default TypingEffect;
