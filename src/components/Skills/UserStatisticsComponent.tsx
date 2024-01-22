<<<<<<< HEAD
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

=======
import { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
  username : string
}

const UserStatisticsComponent = ({ username }:Props) => {
  const [userData, setUserData] = useState<any>(null);
  const graphqlQuery = `
    query userProblemsSolved($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username}) {
        problemsSolvedBeatsStats {
          difficulty
          percentage
        }
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
    `;
  const apiUrl = 'https://localhost:1232/graphql';

  useEffect(() => {
    const fetchData = async () => {
      response = await axios.post(apiUrl, {
        query: graphqlQuery,
        variables: {username: "chaseuelt"}
      },
      { 
          httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
      console.log(response)
      setUserData(response.data.data)
    };
    fetchData()
  }, []);

  return (
    <div>
      <h2 style={{fontSize: 25, textAlign: "center"}}>User Statistics for {username}</h2>
      {userData? 
        <div>
          {userData}
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
       : <div>No data found</div>}
    </div>
  );
};

>>>>>>> 8015ebae19f581deb42537f476b56f5ce7642eb0
export default UserStatisticsComponent;
