const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/name', (req, res) => {
    res.send('Abdulhamid Zaro'); 
});


app.get('/', (req, res) => {
    res.send('Welcome to Abdulhamid Zaro\'s Name Server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
