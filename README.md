# graphql-poc

This project is a GraphQL backend application. Follow the instructions below to set up and run the project on your local machine.

Prerequisites

1. Node.js installed on your machine
2. npm (Node Package Manager) installed on your machine
3. postgres

Getting Started

1. Install Dependencies - Run the following command to install all the necessary dependencies:
   ```
   npm install
   ```
2. Create a .env file using the .env.sample file

3. Create a database [database_name] and then run
   ```
    npm run migrate
   ```
4. Start the Server - After installing the dependencies, start the server with:
   ```
   npm start
   ```
5. Access the Project - You can view the project in your browser at:
   <http://localhost:8080/graphql>

6. Restore Sample Database - If you need to restore the sample GraphQL POC database dump, use the provided graphql_poc.sql file.
   Here is a general example of how you can do this using Postgres:
   ```
   psql -U [username] [database_name] < path/to/graphql_poc.sql
   ```
   Replace [username] with your MySQL username and [database_name] with the name of your database.

7. To query the graphql API in postman follow these steps:
   1. Go to postman and click on the + icon to create new collection
   2. After clicking on the + icon, click on the view more templates link
   3. Then click on GraphQL basics template
   4. Then change the base_url variable value
