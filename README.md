# QA_automation_certification_performance
This is a repository of QA Automation Certification performance testing for the web page https://todoist.com/

# Setup

- Clone this repository
  - Navigate to https://github.com/MiguelMoraa/QA_automation_certification_performance.git
  - Click on Clone or Download and copy the project url
  - Open the command line terminal
  - Navigate to the desired directory for the project
  - Execute `git clone [ProjectURL]`
- Run command `npm init`
- Run command `npm install node`
- Run command `npm install artillery`


# Project Structure

    - todoist_performance.yml (contains script for performance testing)
    - reports (Store de html and json reports)
    package.json (Store dependencies and can be used to set scripts)

## Running the tests

- To run artillery use `npm run test-performance`
- To run artillery with the final report use `npm run test-performance-report`
