require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const songsRouter = require('./routes/songs');
const statisticsRouter = require('./routes/statistics');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/songs', songsRouter);
app.use('/api/statistics', statisticsRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the backend of the MERN app!');
});
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

