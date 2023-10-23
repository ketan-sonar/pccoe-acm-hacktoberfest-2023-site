async function getRepoInfo(orgName, repoName,component) {
  const apiUrl = `https://api.github.com/repos/${orgName}/${repoName}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // console.log(`Repository: ${orgName}/${repoName}`);
    // console.log(`Pull Requests: ${data.numberOfPullRequests}`);
    // console.log(`Forks: ${data.forks_count}`);

    // Get information about pull requests
    const pullRequestsUrl = `${apiUrl}/pulls`;

    const pullRequestsResponse = await fetch(pullRequestsUrl);
    const pullRequestsData = await pullRequestsResponse.json();
    // console.log(pullRequestsData)
    let forks=document.getElementById(`${component}_forks`);
    let prs=document.getElementById(`${component}_prs`);
    let mprs=document.getElementById(`${component}_mprs`);
    
    
    // Filter and count merged pull requests
    let mergedPullRequests = pullRequestsData.filter(pr => pr.state === 'closed' && pr.merged_at);
    // console.log(`Merged Pull Requests: ${mergedPullRequests.length}`);
    forks.innerHTML = data.forks_count;
    prs.innerHTML = pullRequestsData.length;
    mprs.innerHTML = mergedPullRequests.length;

  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function getOrgInfo(orgName) {
    const apiUrl = `https://api.github.com/orgs/${orgName}/repos`;
  
    try {
      const response = await fetch(apiUrl);
      const reposData = await response.json();
      console.log(reposData);
      let totalForks = 0;
      let totalPullRequests = 0;
      let totalMergedPullRequests = 0;
      let count=0;
      for (const repo of reposData) {
        totalForks += repo.forks_count;
        count++;
        // Get information about pull requests for each repository
        const pullRequestsUrl = `${apiUrl}/${repo.name}/pulls`;
        const pullRequestsResponse = await fetch(pullRequestsUrl);
        const pullRequestsData = await pullRequestsResponse.json();
  
        totalPullRequests += pullRequestsData.length;
  
        // Count merged pull requests
        const mergedPullRequests = pullRequestsData.filter(pr => pr.state === 'closed' && pr.merged_at);
        totalMergedPullRequests += mergedPullRequests.length;
      }
  
      // Display the total information
      let no_of_repos=document.getElementById("no_of_repos");
    let total_prs=document.getElementById("total_prs");
    let total_mprs=document.getElementById("total_mprs");
    no_of_repos.innerHTML=count;
    total_prs.innerHTML=totalPullRequests;
    total_mprs.innerHTML=totalMergedPullRequests;
   console.log(count,totalPullRequests,totalMergedPullRequests);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
// Replace 'yourOrg' and 'yourRepo' with the actual organization and repository names
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'animated-components',"animated");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'Travelwebsite',"travelwebsite");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'Data-Structures-and-Algorithms',"dsa");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'eSubmission-App',"esubmission");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'pccoeacm-website',"pcccoeacmweb");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'Starbucks',"starbucks");



  
  // Replace 'yourOrg' with the actual organization name
  getOrgInfo('pccoe-acm-hacktoberfest-2023');
  