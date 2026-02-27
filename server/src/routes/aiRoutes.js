const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

// @route   POST api/ai/match
// @desc    Manually trigger AI matching (for testing/specific UI flows)
// @access  Private
router.post('/match', aiController.matchJobs);

// @route   GET api/ai/skill-gap/:jobId
// @desc    Analyze skill gap for a specific job
// @access  Private
router.get('/skill-gap/:jobId', aiController.analyzeSkillGap);

module.exports = router;
