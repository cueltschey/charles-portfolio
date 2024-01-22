import requests
import json

# Define the endpoint and headers
url = "https://leetcode.com/graphql"
headers = {
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0"  # This is just an example, use your own user agent or any generic one
}

# Define the query and variables
username = "chaseuelt"
data = {
    "query": """
    query userProblemsSolved($username: String!) {
        allQuestionsCount {
            difficulty
            count
        }
        matchedUser(username: $username) {
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
    """,
    "variables": {
        "username": username
    }
}

# Make the POST request
response = requests.post(url, json=data, headers=headers)

if response.status_code == 200:
    response_data = response.json()

    # Extract necessary details
    total_solved = next(item['count'] for item in response_data['data']['matchedUser']['submitStatsGlobal']['acSubmissionNum'] if item['difficulty'] == 'All')
    easy_solved = next(item['count'] for item in response_data['data']['matchedUser']['submitStatsGlobal']['acSubmissionNum'] if item['difficulty'] == 'Easy')
    medium_solved = next(item['count'] for item in response_data['data']['matchedUser']['submitStatsGlobal']['acSubmissionNum'] if item['difficulty'] == 'Medium')
    hard_solved = next(item['count'] for item in response_data['data']['matchedUser']['submitStatsGlobal']['acSubmissionNum'] if item['difficulty'] == 'Hard')

    # Format and print output
    output = dict()
    output["total"] = total_solved
    output["easy"] = easy_solved
    output["medium"] = medium_solved
    output["hard"] = hard_solved

    with open("problem_count.json", "w") as f:
        json.dump(output, f, indent=4)

else:
    print(f"Error {response.status_code}: {response.text}")
