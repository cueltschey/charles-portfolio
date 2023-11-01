import { useEffect, useState } from 'react';
import './stars.css'

const TwinklingStars = () => {
  const [starStyles, setStarStyles] = useState([[""]])

  useEffect(() => {
      const numberOfStars = 1000; // You can adjust the number of stars as needed
      let stars: [string[]] = [[]]
      for (let i = 0; i < numberOfStars; i++) {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 700;
        const duration = Math.random() * 20;
        let newStar : string[] = [`${randomY}vh`,`${randomX}vw`,`rgb(${randomX * 2} ${(randomY / 7) * 2} ${duration * 10})`] 
        stars.push(newStar);
      };
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
            background: style[2]
          }}
        />
      ))}
    </div>
  );
};

export default TwinklingStars;
