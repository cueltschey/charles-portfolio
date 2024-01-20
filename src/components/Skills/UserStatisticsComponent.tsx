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

export default UserStatisticsComponent;
