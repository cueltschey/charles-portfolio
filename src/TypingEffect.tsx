import { useState, useEffect } from 'react';
import './components/Home/Home.css'

interface Props{
  text: string;
  typingSpeed: number;
}

const TypingEffect = ({ text, typingSpeed }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            setIsVisible(true)
        }
        });
    });
  let current = document.getElementsByClassName(text)
  if(current[0] != undefined)observer.observe(current[0])

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
  }, [currentIndex, text, typingSpeed, isVisible]);

  return (
    <div id="typewriter" className={text}>
      {displayText}
    </div>
  );
};

TypingEffect.defaultProps = {
  typingSpeed: 100, // Default typing speed in milliseconds per character
};

export default TypingEffect;
