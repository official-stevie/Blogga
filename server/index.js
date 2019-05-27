// Required Modules

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create App

const app = express();

app.get('/status', (req, res) => {
    res.status(200).send({
        message: 'Good Evening Kenya'
    })
});

// Setting Up Port

const port = process.env.PORT || 9090;

app.listen(port, () => {
    console.log(`Server running at port ${9090}`);
});