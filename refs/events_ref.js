const EventEmitter = require('events');

//ЗАЭМИТЕТЬ СОБИТЫИЕ
class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

const logger = new Logger();

//Прослушка событий
logger.on('message', data => {
    console.log(data)
})

logger.log('Hello');