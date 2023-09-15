# DOCUMENTATION

## Table of Contents

- [API Endpoints](#api-endpoints)
- [Usage Examples](#usage-examples)
- [Known Limitations](#known-limitations)
- [Installation](#installation)
  
## API Endpoints

The API provides the following endpoints:

1. POST /api: Create a new data entry.
2. GET /api/:id: Retrieve data by ID.
3. PATCH /api/:id: Update data by ID.
4. DELETE /api/:id: Delete data by ID.

## Standard Request and Response Formats

### POST /api

#### Request

- **Method:** POST
- **URL:** `/api`
- **Headers:** Default
- **Body:**
  ```json
  {
      "name": "John",
      "age": 30
  }

#### Response
- **Status:** 201 Created
- **Body:**
  ```json
  {
    "_id": "unique_id",
    "name": "John",
    "age": 30
  }

### GET /api/:id

#### Request

- **Method:** GET
- **URL:** /api/:id
- **Headers:** Default
  
#### Response

- **Status:** 200 OK
- **Body:** Single data object

  ```json
  {
    "_id": "unique_id",
    "name": "John",
    "age": 30

  }

### PATCH /api/:id

#### Request

- **Method:** PATCH
- **URL:** /api/:id
- **Headers:** Default
- **Body:**
  ```json
  {
    "name": "Updated Name",
    "age": 35
  }

#### Response

- **Status:** 200 OK
- **Body:** Updated data object
  ```json
  {
    "_id": "unique_id",
    "name": "Updated Name",
    "age": 35,
  }

### DELETE /api/:id

#### Request
- **Method:** DELETE
- **URL:** /api/:id
- **Headers:** None
  
#### Response
- **Status:** 200 OK
- **Text:** Document with Joanita has been deleted

## Usage Examples

Here are some examples of how to use the API endpoints:

1. **Add a new person (POST):**
   - **Endpoint:** https://server-fohg.onrender.com/api
   - **Request:**
     ```json
     {
        "name": "John",
        "age": 30
     }
     ```
   - **Expected Response:**
     - **Status:** 201 Created
     - **Response Body:**
       ```json
       {
           "_id": "unique_id",
           "name": "John",
           "age": 30,
       }
       ```

2. **Fetch details of a person (GET):**
   - **Endpoint:** https://server-fohg.onrender.com/api/user_id
   - **Replace `<user_id>` with the actual ID of the data entry.**
   - **Expected Response:**
     - **Status:** 200 OK
     - **Response Body:**
       ```json
       {
           "_id": "unique_id",
           "name": "John",
           "age": 30,
           "createdAt": "timestamp"
       }
       ```

3. **Modify the details of an existing person (PATCH):**
   - **Endpoint:** https://server-fohg.onrender.com/api/user_id
   - **Replace `<user_id>` with the actual ID of the data entry.
   - **Request:**
     ```json
     {
        "name": "Updated Name", 
        "age": 35
     }
     ```
   - **Expected Response:**
     - **Status:** 200 OK
     - **Response Body:**
       ```json
       {
           "_id": "unique_id",
           "name": "Updated Name",
           "age": 35,
           "createdAt": "timestamp"
       }
       ```

4. **Delete Data by ID (DELETE):**
   - **Endpoint:** https://server-fohg.onrender.com/api/user_id
   - **Replace `<user_id>` with the actual ID of the data entry.
   - **Expected Response:**
   - **Status:** 200 OK
    -**Text:** Document with Joanita has been deleted



## Known Limitations

During the development of this API, the following limitations and assumptions were identified:

1. **Error Handling:** Error handling is minimal, and detailed error messages are not always provided in responses.

2. **Authentication and Authorization:** No authentication or authorization mechanisms are implemented, which may impact the security and access control of the API. Developers should consider implementing appropriate security measures if needed.

3. **Pagination:** The `getAll` endpoint does not implement pagination. As a result, if the dataset is extensive, it may lead to performance issues when retrieving all data at once. Pagination should be considered for large datasets.

These limitations and assumptions should be taken into account when using or further developing this API.

## Instructions for setting up and deploying the API locally or on a server.

### Prerequisites

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

### Configuration

1. Create a .env file in the project root and define the following environment variables:
 
   ```env
    DATABASE_URL=<your-mongodb-uri>
   
<!-- Replace <your-mongodb-uri> with your MongoDB Atlas connection URI. -->

### Running the API
To start the API, run the following command:

    npm start

The API will be available at http://localhost:3005 by default. You can modify the port in the index.js file if needed.


