// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `[![${license} License](https://img.shields.io/badge/License-${license}-blue)](${renderLicenseLink(license)})`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return `https://choosealicense.com/licenses/mit/#`
  }
  if (license === "GNU AGPLv3"){
    return `https://choosealicense.com/licenses/agpl-3.0/`
  }
  if (license === "Mozilla Public License 2.0"){
    return `https://choosealicense.com/licenses/mpl-2.0/`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return ``;
  } else {
    return `##License
    This project utilize this ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}

  ${renderLicenseBadge(data.license)}
  
  ##Description 
  ${data.description}

  ## Table of Content
  -[Description](#description)<br>
  -[Installation](#installation)<br>
  -[Usage](#usage)<br>
  -[License](#license)<br>
  -[Contribution](#contribution)<br>
  -[Test](#test)<br>
  -[Questions](#questions)<br>

  ##Installation
  ${data.installation}
  
  ##Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  
  ##Contribution
  ${data.contribution}
  
  ##Test
  ${data.test}
  
  ##Questions
  Thank you again for reviewing this README.md. 
  If you have additional questions please feel free to email me and feel free to check out my other repos.
  GitHub: [${data.githubName}](https://github.com/${data.githubName})
  Email:  [${data.email}](${data.email})
`;
};

module.exports = generateMarkdown;
