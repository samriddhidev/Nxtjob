Job Postings API
Welcome to the Job Postings API! 🎉 This is a simple and lightweight backend application that allows you to manage job postings. Whether you're a recruiter, developer, or just exploring APIs, this project provides all the basics for creating, retrieving, updating, and deleting job postings.

🌟 Features
Add a Job Posting: Create new job postings with all the details you need (title, company, location, salary, and description).
View All Jobs: See all available job postings in one place.
View a Single Job: Retrieve details of a specific job by its unique ID.
Update a Job: Make changes to an existing job posting.
Delete a Job: Remove a job posting from the database.
🛠️ Getting Started
Follow these steps to set up and run the project on your local machine or in a Docker container.

Prerequisites
Before you begin, make sure you have the following installed:

Node.js (v18 or later)
Docker (if you want to run the app in a container)
A NeonDB Account for your database
Thunder Client or Postman (optional, for testing the API)
Step 1: Clone the Repository
First, get a copy of the project by running:

bash
Copy code
git clone <repository-url>
cd jobposting
Step 2: Install Dependencies
Next, install all the required dependencies using npm:

bash
Copy code
npm install
Step 3: Configure Your Environment
Create a .env file in the root directory to securely store your database credentials. Here’s an example:

plaintext
Copy code
DB_USER=postgresql_owner
DB_PASSWORD=<your_password>
DB_HOST=ep-withered-sunset-a5t6cmhv.us-east-2.aws.neon.tech
DB_PORT=5432
DB_NAME=postgresql
Step 4: Start the Application
Run Locally:
You can start the application with:

bash
Copy code
npm run dev
Visit http://localhost:3000 in your browser or API client to access the endpoints.

Step 5: Run with Docker
If you prefer using Docker, you’re all set! Here’s how:

Build the Docker Image:

bash
Copy code
docker build -t job-posting-api .
Run the Docker Container:

bash
Copy code
docker run -p 3000:3000 --env-file .env job-posting-api
Visit http://localhost:3000 to access the API.

🚀 API Endpoints
Here’s a quick guide to the available endpoints:

1. Create a Job
POST /jobs
Body (JSON):

json
Copy code
{
    "title": "Software Engineer",
    "company": "TechCorp",
    "location": "Remote",
    "salary": "100000",
    "description": "Build amazing software!"
}
2. Get All Jobs
GET /jobs

3. Get a Specific Job
GET /jobs/:id

4. Update a Job
PUT /jobs/:id
Body (JSON):

json
Copy code
{
    "title": "Senior Software Engineer",
    "company": "TechCorp",
    "location": "San Francisco",
    "salary": "120000",
    "description": "Lead a team of developers."
}
5. Delete a Job
DELETE /jobs/:id

