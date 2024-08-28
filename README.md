# Node.js School Management API

This project implements a simple API for managing school data using Node.js, Express.js, and MySQL. The API allows users to add new schools and retrieve a list of schools sorted by proximity to a specified location.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
  - [Add School](#add-school)
  - [List Schools](#list-schools)
- [Database Schema](#database-schema)
- [Testing](#testing)
- [Notes](#notes)
- [License](#license)

## Features

- **Add School**: Allows adding new schools to the database.
- **List Schools**: Retrieves a list of schools sorted by proximity to a specified location.

## Requirements

- Node.js
- MySQL
- Postman (for testing)

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   cd YOUR_REPOSITORY

2. npm install

3. Create and Configure .env File (MYSQL_DATABASE_URL="mysql://root:YOUR_PASSWORD@YOUR_HOST:YOUR_PORT/YOUR_DATABASE"
PORT=3000)

### Note: The Railway MySQL database URL will expire after 24 hours. If you are testing the API after this period, you will need to update the URL in the .env file.

4. npm start


### API Endpoints
1. Add School
    Endpoint: /addSchool
    Method: POST
    Request Body:

    {
    "name": "Example School",
    "address": "123 Example St, Example City, EX 12345",
    "latitude": 40.7128,
    "longitude": -74.0060
    }

    Success (201 Created):
        {
            "message": "School added successfully",
            "id": 1
        }
    
    Error (400 Bad Request):
        {
            "message": "All fields are required"
        }

2. List Schools
    Endpoint: /listSchools

    Method: GET

    Query Parameters:

    latitude: User's latitude
    longitude: User's longitude
    Responses:

    Success (200 OK):
        [
            {
                "id": 1,
                "name": "Example School 1",
                "address": "123 Example St, Example City, EX 12345",
                "latitude": 40.7128,
                "longitude": -74.0060
            },
            {
                "id": 2,
                "name": "Example School 2",
                "address": "456 Another Rd, Another City, AN 67890",
                "latitude": 34.0522,
                "longitude": -118.2437
            }
        ]
    
    Error (400 Bad Request):
        {
            "message": "Latitude and longitude are required"
        }

### Database Schema
The schools table has the following columns:

id (INT, Auto Increment, Primary Key)
name (VARCHAR(255))
address (VARCHAR(255))
latitude (FLOAT)
longitude (FLOAT)

### Testing
Use Postman to test the API endpoints. You can import the Postman collection file included in this project to quickly test the endpoints.

### Notes
Make sure to update your .env file with the correct database URL. The URL provided by Railway will expire after 24 hours, so you might need to regenerate and update it if testing beyond this period.



