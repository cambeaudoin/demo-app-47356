// options.js
var fs = require('fs'),
    configPath = './config/cloudantCreds.json';
var parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));
exports.config = parsed;