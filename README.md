# API Project README

This README provides instructions for setting up, running, and using the API created with Express.js, MongoDB, and Mongoose.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB database or MongoDB Atlas account
- Git (optional)

## Installation

1. Clone this repository (if not already done):

   ```bash
   git clone <repository-url>

    cd <project-directory>
2. Install project dependencies:

   ```bash
    npm install

## Configuration

1. Create a .env file in the project root and define the following environment variables:
 
   ```env
    DATABASE_URL=<your-mongodb-uri>
   
<!-- Replace <your-mongodb-uri> with your MongoDB Atlas connection URI. -->

## Running the API
To start the API, run the following command:

    npm start

The API will be available at http://localhost:3005 by default. You can modify the port in the index.js file if needed.

## API Endpoints

   The API provides the following endpoints:

   1. POST /api: Create a new data entry.
   2. GET /api/getAll: Retrieve all data entries.
   3. GET /api/:id: Retrieve data by ID.
   4. PATCH /api/:id: Update data by ID.
   5. DELETE /api/:id: Delete data by ID.

## Usage Examples
   Here are some examples of how to use the API endpoints:

   inside your rest file, you can send requests by clicking on the send requests
   ![image](https://github.com/joanita-51/HGNx-Internship/assets/82649346/d1bb2492-c3cf-40ae-bde1-5b1c8f4a656c)
   
   or if you would like to use Postman, you can use the following endpoints
   
  #### Create a new data entry
   http://localhost:3005/api
    
   {
      "name": "John",
      "age": 30
   }

#### Retrieve All Data Entries

   http://localhost:3005/api/getAll

#### Retrieve Data by ID
Replace <data-id> with the actual ID of the data entry:
   http://localhost:3005/api/user_id

#### Update Data by ID
Replace <data-id> with the actual ID of the data entry and provide the updated data:
http://localhost:3005/api/user_id

{
   "name": "Updated Name", 
   "age": 35
}


#### Delete Data by ID
Replace <data-id> with the actual ID of the data entry:

DELETE http://localhost:3005/api/user_id

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with clear commit messages.
- Push your branch to your forked repository.
- Open a pull request to the original repository.

