const os = require('os');

//Platform
console.log(os.platform());

//Aрхитектура
console.log(os.arch());

//ОБЩАЯ ИНФА ПО ПРОЦЕСОРАМ
console.log(os.cpus());

//Cвободная память
console.log(os.freemem());

//Всего памяти 
console.log(os.totalmem());

//КОРНЕВАЯ ДИРЕКТОРИЯ
console.log(os.homedir());

//Cколько система работает
console.log(os.uptime());