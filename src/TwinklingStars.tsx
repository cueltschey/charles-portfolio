import { useEffect, useState } from 'react';
import './stars.css'

const TwinklingStars = () => {
  const [starStyles, setStarStyles] = useState([{}]);

  useEffect(() => {
      const numberOfStars = 100; // You can adjust the number of stars as needed
      let stars: [{}] = [{}]
      for (let i = 0; i < numberOfStars; i++) {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 700;
        const duration = Math.random() * 10;
        let newStar : {} = { "top": `${randomY}vh`, "left": `${randomX}vw`, "duration": `${duration}s` }
        stars.push(newStar);
      };
      setStarStyles(stars)
  }, []);

  return (
    <div className="wrapper">
      {starStyles.map((style, index) => (
        <div
          key={index}
          className="twinkling-stars"
          style={{
            top: style["top"],
            left: style["left"],
            animationDuration: style["duration"]
          }}
        />
      ))}
    </div>
  );
};

export default TwinklingStars;
