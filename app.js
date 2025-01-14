import express from 'express';
import dotenv from 'dotenv';
import jobRoutes from './routes/jobs.js';
import pool from './config/db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/jobs', jobRoutes);
app.get('/healthcheck', async (req, res) => {
    try {
        const result = await pool.query('SELECT 1 AS test');
        if (result.rows[0].test === 1) {
            res.status(200).json({ status: 'success', message: 'Database connected successfully' });
        } else {
            res.status(500).json({ status: 'error', message: 'Unexpected result from the database' });
        }
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Failed to connect to the database', error: err.message });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
