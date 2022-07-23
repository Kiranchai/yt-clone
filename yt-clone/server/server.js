const express = require('express');
const app = express();
const {user, videos} = require('./data.js');
app.use(express.json());

const PORT = 5000;

app.get('/videos', (req, res) => {
    res.json(videos);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})