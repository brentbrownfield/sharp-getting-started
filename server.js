const express = require('express');
const resize = require('./resize');
const server = express();

server.listen(8000, () => {
    console.log('Server started!');
});

server.get('/', (req,res) => {

    const widthString = req.query.width;
    const heightString = req.query.height;
    const format = req.query.format;

    let width, height;
    if (widthString) {
        width = parseInt(widthString);
    }

    if(heightString) {
        height = parseInt(heightString);
    }

    res.type(`image/${format || 'jpeg'}`);
    resize('./test.jpg', format, width, height).pipe(res);
});
