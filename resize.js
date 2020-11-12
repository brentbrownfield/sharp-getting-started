const fs = require('fs');
const sharp = require('sharp');

// Exceptions seem to be swallowed in termux
// If running on termux, place the sharp require in the
// following block and comment out the contents of
// the resize function below
try {
} catch(e) {
    console.log("Exception in require: " + e.message);
}

module.exports = function resize(path, format, width, height) {
    const readStream = fs.createReadStream(path);
    let transform = sharp();

    if(format) {
        transform = transform.toFormat(format);
    }

    if(width || height) {
        transform = transform.resize(width, height);
    }

    return readStream.pipe(transform);
}
