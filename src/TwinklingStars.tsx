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
        const type = Math.floor(Math.random() * 3);
        const newStar : string[] = [`${randomY}vh`,`${randomX}vw`,`${Number(type)}`]; 
        stars.push(newStar);
      }
      setStarStyles(stars)
  }, []);

  return (
    <div>
      {starStyles.map((style, index) => (
        <div
          key={index}
          className={style[2] === "0"? "twinkling-stars first":style[2] === "1"? "twinkling-stars second" : "twinkling-stars third"}
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
