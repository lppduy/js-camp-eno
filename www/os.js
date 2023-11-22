const os = require('os');

// arch()
// console.log(os.arch());

// platform() darwin mac - win32 windows - linux linux
// console.log(os.platform());
// if (os.platform() === 'darwin') console.log('you are on a mac ~');

// cpus -  return an array of objects
// containing information about each logical CPU core
// console.log(os.cpus());

// freemem() - show the amount of free memory in your system.
console.log(`number of bytes: ${os.freemem()}`); // number of bytes
console.log(`free memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

// totalmem()
console.log(`total memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`); // RAM

// homedir()
console.log(os.homedir());

// uptime() time from system started
const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor((uptime / 60 / 60) % 24);
const minutes = Math.floor((uptime / 60) % 60);
const seconds = Math.floor(uptime % 60);
console.log(`Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`);

// hostname()
console.log(os.hostname());
