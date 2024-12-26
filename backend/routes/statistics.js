// routes/statistics.js
const express = require('express');
const Song = require('../models/Song');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const totalSongs = await Song.countDocuments();
        const totalArtists = await Song.distinct('artist').then((artists) => artists.length);
        const totalAlbums = await Song.distinct('album').then((albums) => albums.length);
        const totalGenres = await Song.distinct('genre').then((genres) => genres.length);

        res.status(200).json({
            success: true,
            data: { totalSongs, totalArtists, totalAlbums, totalGenres },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
});

module.exports = router;
