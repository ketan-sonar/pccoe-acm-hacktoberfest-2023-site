// AOS.init();
// const username = "Mastermind730";
// const repository = "Pccoe-Hacktoberfest-2023";

// // Function to fetch repository information
// async function fetchRepoInfo() {
// try {
// // Fetch repository details
// const repoResponse = await fetch(`https://api.github.com/repos/${username}/${repository}`);
// const repoData = await repoResponse.json();

// // Fetch pull requests details
// const pullRequestsResponse = await fetch(`https://api.github.com/repos/${username}/${repository}/pulls`);
// const pullRequestsData = await pullRequestsResponse.json();

// // Log the number of forks and pull requests
// let pull_requests=document.getElementById("pull_requests");
// let no_of_forks=document.getElementById("no_of_forks");


// console.log(`Forks: ${repoData.forks_count}`);
// console.log(`Pull Requests: ${pullRequestsData.length}`);
// pull_requests.textContent=pullRequestsData.length;
// // no_of_forks.textContent=repoData.forks_count;
// console.log("Connected with the h1 tag and displaying data");
// console.log(pull_requests.textContent);
// } catch (error) {
// console.error("Error fetching repository information:", error);
// }
// }

// // Call the function to fetch repository information
// fetchRepoInfo();

const fetch = require('node-fetch');

async function getRepoInfo(orgName, repoName) {
  const apiUrl = `https://api.github.com/repos/${orgName}/${repoName}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(`Repository: ${orgName}/${repoName}`);
    console.log(`Pull Requests: ${data.pulls_url}`);
    console.log(`Forks: ${data.forks_count}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Replace 'yourOrg' and 'yourRepo' with the actual organization and repository names
getRepoInfo('PCCOE ACM Hacktoberfest 2023', 'yourRepo');
