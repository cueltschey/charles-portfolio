import { useEffect, useState } from 'react';
import './Home.css';

interface Props{
  text: string;
  typingSpeed: number;
  finalWords: string[];
}

const Title = ({ text, typingSpeed, finalWords }: Props) => {

  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finalWordsindex, setFinalWordsindex] = useState(0);

  useEffect(() => { 
    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
      else if(currentIndex < text.length + finalWords[finalWordsindex].length) {
        setDisplayText(displayText + finalWords[currentIndex - text.length])
        setCurrentIndex(currentIndex + 1);
      }
      else{
        setDisplayText(text);
        setFinalWordsindex(finalWordsindex + 1)
        setCurrentIndex(text.length);
      }
    };
    
    const typingInterval = setInterval(typeNextCharacter, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, text, typingSpeed, finalWords, displayText, finalWordsindex]);

  return (
    <div id="typewriter">
      {displayText}
    </div>
  );
};

Title.defaultProps = {
  typingSpeed: 100, // Default typing speed in milliseconds per character
};

export default Title;