import { useEffect, useState } from 'react';
import './stars.css';

const TwinklingStars = () => {
  const [starStyles, setStarStyles] = useState([[""]])

  useEffect(() => {
      const numberOfStars = 1000; // You can adjust the number of stars as needed
      const stars: [string[]] = [[]]
      for (let i = 0; i < numberOfStars; i++) {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 600;
        const duration = Math.random() * 20;
        const newStar : string[] = [`${randomY}vh`,`${randomX}vw`,`${duration}s`]; 
        stars.push(newStar);
      }
      setStarStyles(stars)
  }, []);

  return (
    <div>
      {starStyles.map((style, index) => (
        <div
          key={index}
          className="twinkling-stars"
          style={{
            top: style[0],
            left: style[1],
          }}
        />
      ))}
    </div>
  );
};

export default TwinklingStars;
