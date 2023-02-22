const express = require('express');
const app = express();
const ExpressError = require('./errors');
const { findMean, findMedian, findMode, convertAndValidateNums } = require('./helpers');

// express app the calculates mean, median, and mode of an array of numbers

app.get('/mean', (req, res) => {
        if (!req.query.nums) {
            throw new ExpressError('You must provide a list of numbers', 400);
        }
        let nums = convertAndValidateNums(req.query.nums);
        if(nums instanceof Error) {
            throw new ExpressError(nums.message);
        }
        let mean = findMean(nums);
        return res.json({operation: 'mean', value: mean});     
});

app.get('/median', (req, res, next) => {
    if(!req.query.nums) {
        throw new ExpressError('You must provide a list of numbers', 400);
    }
    let nums = convertAndValidateNums(req.query.nums);
    if(nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    let median = findMedian(nums);
    return res.json({operation: 'median', value: median});
});

app.get('/mode', (req, res, next) => {
    if(!req.query.nums) {
        throw new ExpressError('You must provide a list of numbers', 400);
    }
    let nums = convertAndValidateNums(req.query.nums);
    if(nums instanceof Error) {
        throw new ExpressError(nums.message);
    }
    let mode = findMode(nums);
    return res.json({operation: 'mode', value: mode});
});

app.use((req, res, next) => {
    const err = new ExpressError('Not Found', 404);
    return next(err);
});

app.use((err, req, res, next) => {
    res.status = err.status || 500;
    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, () => {
    console.log('App on port 3000');
});


