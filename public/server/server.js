const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config(); 

const apiKey = process.env.API_KEY; 

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/views/index.html'));  
});

app.post('/api', async (req, res) => {
    const articleUrl = req.body.url;
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${articleUrl}&lang=en`;

    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch data from the API' });
    }
});

app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});
