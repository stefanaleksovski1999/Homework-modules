const os = require("os");

//information about each logical CPU
os.cpus().forEach((cpu) => {
    console.log(cpu);
});

//CPU architecture
console.log(os.arch());

//Operating system platform
console.log(os.platform());

//Operating system name
console.log(os.type());

//Total memory in bytes
console.log(os.totalmem());

//Free memory in bytes
console.log(freemem());

//System uptime
console.log(os.uptime());
