import {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
} from '../models/jobModel.js';

export const fetchAllJobs = async (req, res) => {
    try {
        const jobs = await getAllJobs();
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const fetchJobById = async (req, res) => {
    try {
        const job = await getJobById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const addJob = async (req, res) => {
    try {
        const job = await createJob(req.body);
        res.status(201).json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const modifyJob = async (req, res) => {
    try {
        const job = await updateJob(req.params.id, req.body);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const removeJob = async (req, res) => {
    try {
        await deleteJob(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
