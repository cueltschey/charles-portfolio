import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface Props {
  username : string
}

const UserStatisticsComponent = ({ username }:Props) => {
  const [userData, setUserData] = useState<any>(null);

  const fetchData = async () => {
        const apiUrl = 'https://leetcode.com/graphql';
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
        let response = null
        try{
          response = await axios.post(apiUrl, {
            query: graphqlQuery,
            variables: { username: username },
          });
          setUserData(response.data.data);
        } 
        catch (error : any) {
          console.log(error)
          if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Response error:', error.response.data);
            console.error('Status code:', error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('Request error:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error message:', error.message);
          }
      }
  }


  useEffect(() => {
    fetchData();
  }, [username]);

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
