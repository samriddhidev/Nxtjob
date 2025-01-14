import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Destructure Pool from the pg package
const { Pool } = pkg;

// Create a new pool instance for the NeonDB connection
const pool = new Pool({
    user: process.env.DB_USER, // Your NeonDB username
    password: process.env.DB_PASSWORD, // Your NeonDB password
    host: process.env.DB_HOST, // Your NeonDB host (e.g., ep-withered-sunset-a5t6cmhv.us-east-2.aws.neon.tech)
    port: process.env.DB_PORT, // Default is 5432 for PostgreSQL
    database: process.env.DB_NAME, // Your NeonDB database name (e.g., postgresql)
    ssl: {
        rejectUnauthorized: false, // This allows SSL connections even without a trusted certificate
    },
});

// Export the pool instance to be used in other parts of the application
export default pool;
