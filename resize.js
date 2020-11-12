const fs = require('fs');
try {
const sharp = require('sharp');
} catch(e) {
    console.log("Exception in require: " + e.message);
}

module.exports = function resize(path, format, width, height) {
    const readStream = fs.createReadStream(path);
    return readStream;
}
