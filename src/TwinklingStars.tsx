import { useEffect, useState } from 'react';
import './stars.css'

const TwinklingStars = () => {
  const [starStyles, setStarStyles] = useState([{}]);

  useEffect(() => {
      const numberOfStars = 1000; // You can adjust the number of stars as needed
      let stars: [{}] = [{}]
      for (let i = 0; i < numberOfStars; i++) {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 700;
        const duration = Math.random() * 20;
        let newStar : {} = { "top": `${randomY}vh`, "left": `${randomX}vw`, "color": `rgb(${randomX * 2},${(randomY / 7) * 2},${duration * 10})` }
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
            top: style["top"],
            left: style["left"],
            background: style["color"]
          }}
        />
      ))}
    </div>
  );
};

export default TwinklingStars;
