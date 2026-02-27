const express = require('express');
const router = express.Router();
const recruiterController = require('../controllers/recruiterController');

// @route   POST api/recruiter/jobs
// @desc    Post a new job
// @access  Private (Recruiter)
router.post('/jobs', recruiterController.postJob);

// @route   GET api/recruiter/applicants/:jobId
// @desc    Get applicants for a job
// @access  Private (Recruiter)
router.get('/applicants/:jobId', recruiterController.getApplicants);

module.exports = router;
