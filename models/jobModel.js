import pool from '../config/db.js';

export const getAllJobs = async () => {
    const { rows } = await pool.query('SELECT * FROM jobs');
    return rows;
};

export const getJobById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM jobs WHERE id = $1', [id]);
    return rows[0];
};

export const createJob = async (job) => {
    const { title, company, location, salary, description } = job;
    const { rows } = await pool.query(
        'INSERT INTO jobs (title, company, location, salary, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [title, company, location, salary, description]
    );
    return rows[0];
};

export const updateJob = async (id, job) => {
    const { title, company, location, salary, description } = job;
    const { rows } = await pool.query(
        `UPDATE jobs SET title = $1, company = $2, location = $3, salary = $4, description = $5 WHERE id = $6 RETURNING *`,
        [title, company, location, salary, description, id]
    );
    return rows[0];
};

export const deleteJob = async (id) => {
    await pool.query('DELETE FROM jobs WHERE id = $1', [id]);
};
