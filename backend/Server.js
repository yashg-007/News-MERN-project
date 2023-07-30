const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
const app = express();

app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/news', async (req, res) => {
  try {
    const { country, category, pageSize, page } = req.query;
    const API_KEY = process.env.API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`;
    const response = await axios.get(url);
    const data = response.data;

    res.json(data.articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
