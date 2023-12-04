# Express.js Application

This is a simple Express.js application that serves as a backend for react-client application, this server is responsible to fetch data from an external API and send the fetched data as response. The application is built using Node.js and MongoDB.

# Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB

# Installation

1. Clone the repository: git clone --recursive git@github.com:nabinelnino/lab-repo.git
2. Install dependencies: npm install

# Configuration

Create a .env file in the root directory and provide the necessary environment variables. You can use the provided .env.example as a template.

# Usage

Start the server: node app.js

- By default, the server will be running at http://localhost:5000. If you want to specify a different port, you can set the PORT environment variable in your .env file. For example:
  PORT=5001

# Endpoints

GET /: to test the server, return Hello, World! message.
GET /api/psets: Fetch data from an external API for PSETS.
GET /api/psets-database: Fetch PSETS data from the local MongoDB database.
