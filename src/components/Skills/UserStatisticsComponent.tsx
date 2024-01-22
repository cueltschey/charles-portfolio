import { useEffect, useState } from 'react';

const UserStatisticsComponent = () => {
  const [total, setTotal] = useState(0);
  const [easy, setEasy] = useState(0);
  const [medium, setMedium] = useState(0);
  const [hard, setHard] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./src/components/Skills/problem_count.json');
        const data = await response.json();
        setTotal(data["total"])
        setEasy(data["easy"])
        setMedium(data["medium"])
        setHard(data["hard"])
        console.log(total)
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once on component mount

  // Render your component based on the jsonData
  return (
    <div>
      {total != 0 ?
        <div><h1>Live Leetcode Problem Count:</h1>
        <ul>
            <li>Total: {total}</li>
            <li>Easy: {easy}</li>
            <li>Medium: {medium}</li>
            <li>Hard: {hard}</li>
        </ul></div> : <p>Error loading data</p>
      }
    </div>
  );
};

export default UserStatisticsComponent;
