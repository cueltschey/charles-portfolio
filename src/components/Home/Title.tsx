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
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => { 
    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        if(isReversed){
          setIsReversed(false)
          if(finalWordsindex == finalWords.length - 1){
            setFinalWordsindex(0)         
          }
          else{
            setFinalWordsindex(finalWordsindex + 1)
          }
        }
        else{
          setCurrentIndex(currentIndex + 1);
        }
      }
      else if(currentIndex < text.length + finalWords[finalWordsindex].length) {
        setDisplayText(text + finalWords[finalWordsindex].slice(0,currentIndex - text.length))
        setCurrentIndex(isReversed? currentIndex - 1 : currentIndex + 1);
      }
      else{
        setIsReversed(true)
        setCurrentIndex(currentIndex - 1)
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
