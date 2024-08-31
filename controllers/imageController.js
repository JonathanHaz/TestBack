const axios = require('axios');
const apiKey = '45655463-b9d89473c51cdb4e8f16e1e40';

const cache = {};

// Search Images
const fetchImages = async (req, res) => {
    const searchTerm = req.query.q;

    if (cache[searchTerm]) {
        return res.json(cache[searchTerm]);
    }

    try {
        const response = await axios.get(`https://pixabay.com/api/`, {
            params: {
                key: apiKey,
                q: searchTerm,
                image_type: 'photo',
                per_page: 10,
            },
        });

        cache[searchTerm] = response.data;
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch images' });
    }
};

// Random Images
const fetchRandomImages = async (req, res) => {
    const randomKey = 'random';

    if (cache[randomKey]) {
        return res.json(cache[randomKey]);
    }

    try {
        const response = await axios.get(`https://pixabay.com/api/`, {
            params: {
                key: apiKey,
                image_type: 'photo',
                per_page: 10,
            },
        });

        cache[randomKey] = response.data;
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch random images' });
    }
};

module.exports = {
    fetchImages,
    fetchRandomImages,
};
