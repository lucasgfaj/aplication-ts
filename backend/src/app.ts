// const express = require('express');
import express from 'express';

//routes
import home from '../routes/home';


const app = express();

app.get('/', home);

app.listen(3000, function () {
    console.log('Server Is Running');
});