// // const fetch = require('node-fetch');

// async function getRepoInfo(orgName, repoName,component) {
//   const apiUrl = `https://api.github.com/repos/${orgName}/${repoName}`;

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     const numberOfPullRequests = data.length;

//     console.log(`Repository: ${orgName}/${repoName}`);
//     console.log(`Pull Requests: ${data.numberOfPullRequests}`);
//     console.log(`Forks: ${data.forks_count}`);

//     // Get information about pull requests
//     const pullRequestsUrl = `${apiUrl}/pulls`;

//     const pullRequestsResponse = await fetch(pullRequestsUrl);
//     const pullRequestsData = await pullRequestsResponse.json();
//     let forks=document.getElementById(`${component}_forks`);
//     let prs=document.getElementById(`${component}_prs`);
//     let mprs=document.getElementById(`${component}_mprs`);
    
    
//     // Filter and count merged pull requests
//     let mergedPullRequests = pullRequestsData.filter(pr => pr.state === 'closed' && pr.merged_at);
//     console.log(`Merged Pull Requests: ${mergedPullRequests.length}`);
//     forks.innerHTML=data.forks_count;
//     prs.innerHTML=data.numberOfPullRequests;
//     mprs.innerHTML=data.mergedPullRequests;

//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// // Replace 'yourOrg' and 'yourRepo' with the actual organization and repository names
// getRepoInfo('pccoe-acm-hacktoberfest-2023', 'animated-components',"animated");
// getRepoInfo('pccoe-acm-hacktoberfest-2023', 'Travelwebsite',"travelwebsite");
// getRepoInfo('pccoe-acm-hacktoberfest-2023', 'Data-Structures-and-Algorithms',"dsa");
// getRepoInfo('pccoe-acm-hacktoberfest-2023', 'eSubmission-App',"esubmission");
// getRepoInfo('pccoe-acm-hacktoberfest-2023', 'pccoeacm-website',"pcccoeacmweb");
// getRepoInfo('pccoe-acm-hacktoberfest-2023', 'Starbucks',"starbucks");
