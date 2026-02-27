const express = require('express');
const router = express.Router();
const seekerController = require('../controllers/seekerController');

// @route   POST api/seeker/resume
// @desc    Upload resume
// @access  Private
router.post('/resume', seekerController.uploadResume);

// @route   GET api/seeker/dashboard
// @desc    Get seeker dashboard data
// @access  Private
router.get('/dashboard', seekerController.getDashboard);

module.exports = router;
