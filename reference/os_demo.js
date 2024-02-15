const os = require("os");

// Platform Windows/Linux/Mac
console.log(os.platform());

// CPU Architecture
console.log(os.arch());

// CPU Cores information
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());
