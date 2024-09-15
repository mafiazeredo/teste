// malicioso.js
const fs = require('fs');
fs.writeFileSync('/path/to/sensitive/file.txt', 'Exploit successful');
