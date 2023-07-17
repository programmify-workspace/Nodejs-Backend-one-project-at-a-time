# Project 2: Data Import/Export

## User Story: 
As a user, I want to import data from a CSV file into my application and export it in various formats for analysis or sharing.

### Steps:

1. Create a web form to upload a CSV file.
2. Parse the CSV file and extract the data
3. Validate and sanitize the data.
4. Store the data in a database.
5. Implement an export functionality to generate CSV, JSON, or Excel files from the stored data.

## Follow the steps below to get started with the project:
1. Clone the repository: `git clone <repository-url>`.
2. Navigate into it: cd project2.
3. Install the required dependencies: `npm install`.
4. Open XAMPP Control Panel and start the Apache and MySQL servers.
5. Access PHPMyAdmin or a similar database management tool, and create a database named "exceldb" and a table named "user".
6. In the "user" table, create the necessary columns to store the data you need.
7. Run node `index.js`.
8. Use the web form to upload a CSV file. The data from the file will be parsed, validated and stored in the "user" table of the "exceldb" database.