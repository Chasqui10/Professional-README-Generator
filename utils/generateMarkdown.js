// This function that returns a license badge based on which license is passed in from the index questionaire
// If there are no license then the return for the function is an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `[![${license} License](https://img.shields.io/badge/License-${license}-blue)](${renderLicenseLink(license)})`
  }
};

// This function returns the license link that will be attached to the badges
// If there are no license then the return for the function is an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return `https://choosealicense.com/licenses/mit/#`
  }
  if (license === "GNU_AGPLv3"){
    return `https://choosealicense.com/licenses/agpl-3.0/`
  }
  if (license === "Mozilla_Public_License_2.0"){
    return `https://choosealicense.com/licenses/mpl-2.0/`
  }
};

// This function returns the license section of README.md 
// If there are no license then the return for the function is an empty string
function renderLicenseSection(license) {
  if (!license){
    return ``;
  } else {
    return `## License
    This project utilize this ${license}.`
  }
}

// This function generates the markdown for README.md file still implementing the data from the inquirer prompt 
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  
  ## Description 
  ${data.description}

  ## Table of Content
  [Description](#description)<br>
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [License](#license)<br>
  [Contribution](#contribution)<br>
  [Test](#test)<br>
  [Questions](#questions)<br>

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  
  ## Contribution
  ${data.contribution}
  
  ## Test
  ${data.test} <br>

  **Example of README.md name change for test purposes:** <br>
  ![Example of README.md name change for test purposes](./assets/images/md-name-change.jpg)

  **Example of Node Index in Terminal:** <br>
  ![Example of Node Index in Terminal](./assets/images/inquirer-node-input.jpg)

  **Example of README12345.md Test Purpose Pt.1:** <br>
  ![Example of README12345.md Test Purpose Pt.1](./assets/images/preview-md-part1.jpg)

  **Example of README12345.md Test Purpose Pt.2:** <br>
  ![Example of README12345.md Test Purpose Pt.2](./assets/images/preview-md-part2.jpg)



  
  ## Questions
  Thank you again for reviewing this README.md. <br>
  If you have additional questions please feel free to email me and feel free to check out my other repos. <br>
  GitHub: [${data.githubName}](https://github.com/${data.githubName}) <br>
  Email:  [${data.email}](${data.email})<br>
`;
};

module.exports = generateMarkdown;
