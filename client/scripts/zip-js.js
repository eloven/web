const fs = require('fs');
const path = require('path');

const pack = fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8');

console.log(pack);
