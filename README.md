# RESTful API Endpoint Basics

A simple Node.js and Express project to practice creating and running an API with RESTful endpoints.

## Getting Started

### Prerequisites

- Node.js installed
- Basic knowledge of Express.js

### Installation

1. Initialize the project:

   ```bash
   npm init -y

2. Install dependencies:

   ```bash
   npm install express

### Running the API

1. Navigate to your project directory in the terminal.
2. Start the server.

    ```bash
    node .

### API endpoints

`GET /tshirt`
Response:

   ```json
   {
     "tshirt": "red with stripes",
     "size": "large"
   }
   ```

`POST /tshirt/`
Request body:

  ```json
   {
     "logo": "Your custom logo"
   }
  ```
Response:

  ```json
   {
     "tshirt": "Shirt with your logo and ID of 23"
   }
  ```

### Usage
Test the endpoints using a tool like Insomnia or Postman.

