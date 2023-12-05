// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `<img src="https://img.shields.io/badge/license-${license}-orange.svg"/>`
    } else {
        return " "
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "None") {
        return `* [License](#license)`
    } else {
        return " "
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        return `## License)

        This project is licensed under ${license} license.`
    } else {
        return " "
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ${renderLicenseBadge(data.license)}
  
    ## Description
  
    ${data.description}
  
    ## Table of Contents
  
    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseLink(data.license)}
    * [Contribition](#contribution)
    * [Tests](#tests)
    * [Questions](#questions)
    
  
    ## Installation
  
    ${data.installation}
  
    ## Usage
  
    ${data.usage}
  
    ${renderLicenseSection(data.license)}
  
    ## Contribution
  
    ${data.contribution}
  
    ## Tests
  
    ${data.test}
  
    ## Questions
  
    If you have any questions and would like to reach me, please email me at ${data.email}.
    If you would like to see other projects I've created, feel free to chechout my github at [${data.github}](https://github.com/${data.github}).
  
  `;
  }

module.exports = generateMarkdown;
