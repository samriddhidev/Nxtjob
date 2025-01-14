import express from 'express';
import {
    fetchAllJobs,
    fetchJobById,
    addJob,
    modifyJob,
    removeJob,
} from '../controllers/jobsController.js';

const router = express.Router();

router.get('/', fetchAllJobs);
router.get('/:id', fetchJobById);
router.post('/', addJob);
router.put('/:id', modifyJob);
router.delete('/:id', removeJob);

export default router;
