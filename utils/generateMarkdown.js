// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description 
  ${data.description}

  ## Table of Content
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contribution](#contribution)
  -[Test](#test)
  -[Questions](#questions)

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contribution
  ${data.contribution}
  
  ## Test
  ${data.test}
  
  ## Questions
  Thank you again for reviewing this README.md. 
  If you have additional questions please feel free to email me and feel free to check out my other repos.
  GitHub: [${data.githubName}](https://github.com/${data.githubName})
  Email:  [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
