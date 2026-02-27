require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'SkillMatch India API is running smoothly' });
});

// Import Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/seeker', require('./routes/seekerRoutes'));
app.use('/api/recruiter', require('./routes/recruiterRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!', details: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
