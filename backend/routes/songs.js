// routes/songs.js
const express = require('express');
const mongoose = require('mongoose');
const Song = require('../models/Song');
const router = express.Router();

// Create a song
router.post('/', async (req, res) => {
    try {
        const newSong = new Song(req.body);
        const savedSong = await newSong.save();
        res.status(201).json(savedSong);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all songs
router.get('/', async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single song
router.get('/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) {
            return res.status(404).json({ message: 'Song not found' });
        }
        res.json(song);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid song ID' });
        }
        res.status(500).json({ message: err.message });
    }
});

// Update a song
router.put('/:id', async (req, res) => {
    const { title, artist, album, genre } = req.body;
    if (!title || !artist || !album || !genre) {
        return res.status(400).json({ message: 'Invalid payload' });
    }
    try {
        const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedSong) {
            return res.status(404).json({ message: 'Song not found' });
        }
        res.json(updatedSong);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a song
router.delete('/:id', async (req, res) => {
    try {
        const deletedSong = await Song.findByIdAndDelete(req.params.id);
        if (!deletedSong) {
            return res.status(404).json({ message: 'Song not found' });
        }
        res.status(204).send(); // No content
    } catch (err) {
        console.error('Error deleting song:', err);
        res.status(500).json({ message: 'Failed to delete song' });
    }
});

module.exports = router;