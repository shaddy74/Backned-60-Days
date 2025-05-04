const os = require('os')

// 1. get os platform & user info

console.log('OS Platform:', os.platform())
console.log('OS Platform:', os.userInfo())


// 2. get the Os CPU architecture

console.log('CPU Architecture: ', os.arch())

// 3. get the Os CPU core Info
console.log('CPU Core info:', os.cpus())

// 4. get the free memory of the system
console.log('Free Memory:', os.freemem(), "bytes");

// 5. get the total memory of the system
console.log('Total Memory:', os.totalmem(), "bytes")

// 6. get the home directory of the user
console.log('Home Directory', os.homedir())

// 7. get the host name of the system
console.log('Host Name:', os.hostname())

// 8. get the network interface of the system
console.log('Network Interface', os.networkInterfaces())

// 9. get the OS release info
console.log('OS Release:', os.release())

// 10. get the os temp directory
console.log('OS Temp directory', os.tmpdir())

// 11. get the os Uptime
console.log('OS Uptime', os.uptime())

// 12. get the os version
console.log('OS Version:', os.version())

// 13. get the os load average
console.log('OS Load average', os.loadavg())

// 14. get the os endienness
console.log('OS Endianness', os.endianness())

// 15. get the os constant
console.log("OS Contstant", os.constants)

// 16. OS Type
console.log("OS Type", os.type())

