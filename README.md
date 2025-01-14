Steps to Run the APIs


1. Clone the Repository
Download or clone the project to your local machine.

2. Install Dependencies
Install the necessary dependencies by running npm install. This will set up the required libraries like Express, pg (PostgreSQL), and others.

3. Configure Environment Variables
Create a .env file in the root directory.
Add the required database connection details in the .env file.


4. Start the Application Locally
Run the application using npm run dev to start the server locally.
The API will be available at http://localhost:3000.

5. Access the API Endpoints
Use an API testing tool like Postman or Thunder Client to interact with the API.
The following endpoints are available:
POST /jobs: Create a new job posting.
GET /jobs: Retrieve all job postings.
GET /jobs/:id: Retrieve a job posting by its ID.
PUT /jobs/:id: Update an existing job posting.
DELETE /jobs/:id: Delete a job posting by its ID.
Optional: Run in Docker
Build the Docker Image: Package the app into a Docker container.
Run the Docker Container: Start the application in a container and access the API at http://localhost:3000 or use the DEPLOYED LINK https://jobdb.onrender.com/.
