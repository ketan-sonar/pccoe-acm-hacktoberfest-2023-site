async function getRepoInfo(orgName, repoName, component) {
  const apiUrl = `https://api.github.com/repos/${orgName}/${repoName}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const pullRequestsUrl = `${apiUrl}/pulls`;
    const pullRequestsResponse = await fetch(pullRequestsUrl);
    const pullRequestsData = await pullRequestsResponse.json();

    let forks = document.getElementById(`${component}_forks`);
    let prs = document.getElementById(`${component}_prs`);
    let mprs = document.getElementById(`${component}_mprs`);

    let mergedPullRequests = pullRequestsData.filter(pr => pr.state === 'closed' && pr.merged_at);

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

    let totalForks = 0;
    let totalPullRequests = 0;
    let totalMergedPullRequests = 0;
    let count = 0;

    for (const repo of reposData) {
      totalForks += repo.forks_count;
      count++;

      const apiUrl2 = `https://api.github.com/repos/${orgName}/${repo.name}`;
      const repoResponse = await fetch(apiUrl2);
      const repoData = await repoResponse.json();

      const pullRequestsUrl = `${apiUrl2}/pulls`;
      const pullRequestsResponse = await fetch(pullRequestsUrl);
      const pullRequestsData = await pullRequestsResponse.json();

      totalPullRequests += pullRequestsData.length;

      const mergedPullRequests = pullRequestsData.filter(pr => pr.state === 'closed' && pr.merged_at);
      totalMergedPullRequests += mergedPullRequests.length;
    }

    let no_of_repos = document.getElementById("no_of_repos");
    let total_prs = document.getElementById("total_prs");
    let total_mprs = document.getElementById("total_mprs");
    no_of_repos.innerHTML = count;
    total_prs.innerHTML = totalPullRequests;
    total_mprs.innerHTML = totalMergedPullRequests;

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call getRepoInfo for each repository you want to get information about
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'animated-components', "animated");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'Data-Structures-and-Algorithms', "dsa");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'eSubmission-App', "esubmission");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'pccoeacm-website', "pcccoeacmweb");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'Starbucks', "starbucks");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'flash_chat', "flash");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'Flavor_Find', "flavor");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'Restaurant_website_HacktoberFest', "restaurant");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'GDSC_TextUtils', "textutils");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'GDSC_calculator', "calculator");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'GDSC_Insta_Bot', "insta");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'GDSC_tic_tac_toe', "tic");
getRepoInfo('pccoe-acm-hacktoberfest-2023', 'GDSC_ecommerce_istop_dummywebsite', "ecommerce");









// Call getOrgInfo to get information about the organization
getOrgInfo('pccoe-acm-hacktoberfest-2023');
